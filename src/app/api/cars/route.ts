import { NextRequest, NextResponse } from 'next/server';
import { CARS_DATA, Car } from '@/data/cars';
import { CATALOG_LINEUP_ORDER } from '@/data/catalog-card-specs';
import { CONTACT_INFO } from '@/data/contact';

function getLineupCars(): Car[] {
  return CATALOG_LINEUP_ORDER.map((id) => CARS_DATA.find((c) => c.id === id)).filter(
    (c): c is Car => Boolean(c)
  );
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const query = searchParams.get('q')?.toLowerCase();
    const id = searchParams.get('id');
    const modelsParam = searchParams.get('models');
    const minPriceParam = searchParams.get('minPrice');
    const maxPriceParam = searchParams.get('maxPrice');
    const bodyTypeParam = searchParams.get('bodyType');
    const powertrainParam = searchParams.get('powertrain');
    const transmissionParam = searchParams.get('transmission');
    const sortParam = searchParams.get('sort');

    if (id) {
      const car = CARS_DATA.find((item) => item.id.toLowerCase() === id.toLowerCase());
      if (!car) {
        return NextResponse.json(
          { status: 'error', message: `Mobil dengan ID '${id}' tidak ditemukan` },
          { status: 404 }
        );
      }
      return NextResponse.json({
        status: 'success',
        data: car,
      });
    }

    let filteredCars = getLineupCars();

    if (modelsParam && modelsParam.trim() !== '') {
      const modelsList = modelsParam.split(',').map((m) => m.trim().toLowerCase());
      filteredCars = filteredCars.filter((car) => modelsList.includes(car.model.toLowerCase()));
    }

    if (category && category !== 'All') {
      filteredCars = filteredCars.filter(
        (car) => car.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (powertrainParam && powertrainParam !== 'All' && powertrainParam !== 'Semua') {
      const pt = powertrainParam.toUpperCase();
      filteredCars = filteredCars.filter((car) => car.powertrain === pt);
    }

    if (bodyTypeParam && bodyTypeParam !== 'All' && bodyTypeParam !== 'Semua') {
      filteredCars = filteredCars.filter((car) => {
        if (bodyTypeParam.toLowerCase() === 'elektrik' || bodyTypeParam.toLowerCase() === 'ev') {
          return car.category === 'EV' || car.bodyType === 'EV' || car.fuelType === 'Listrik';
        }
        return car.bodyType.toLowerCase() === bodyTypeParam.toLowerCase();
      });
    }

    if (transmissionParam && transmissionParam !== 'Semua' && transmissionParam !== 'All') {
      filteredCars = filteredCars.filter((car) => {
        if (
          transmissionParam.toLowerCase().includes('automatic') ||
          transmissionParam.toLowerCase().includes('at')
        ) {
          return car.transmissionType === 'Automatic';
        }
        if (
          transmissionParam.toLowerCase().includes('manual') ||
          transmissionParam.toLowerCase().includes('mt')
        ) {
          return car.transmissionType === 'Manual';
        }
        return true;
      });
    }

    if (minPriceParam) {
      const minVal = parseFloat(minPriceParam);
      if (!isNaN(minVal)) {
        filteredCars = filteredCars.filter((car) => car.rawPrice >= minVal);
      }
    }

    if (maxPriceParam) {
      const maxVal = parseFloat(maxPriceParam);
      if (!isNaN(maxVal)) {
        filteredCars = filteredCars.filter((car) => car.rawPrice <= maxVal);
      }
    }

    if (query) {
      filteredCars = filteredCars.filter(
        (car) =>
          car.name.toLowerCase().includes(query) ||
          car.trim.toLowerCase().includes(query) ||
          car.engine.toLowerCase().includes(query)
      );
    }

    if (sortParam === 'price-high') {
      filteredCars.sort((a, b) => b.rawPrice - a.rawPrice);
    } else if (sortParam === 'name-asc') {
      filteredCars.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortParam === 'newest' || sortParam === 'popular') {
      const order = new Map(CATALOG_LINEUP_ORDER.map((carId, index) => [carId, index]));
      filteredCars.sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0));
    } else {
      filteredCars.sort((a, b) => a.rawPrice - b.rawPrice);
    }

    return NextResponse.json({
      status: 'success',
      total: filteredCars.length,
      dealer: 'Chery Official Dealer Salatiga',
      address: CONTACT_INFO.address,
      contact: '0813-2652-822',
      data: filteredCars,
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error', details: String(error) },
      { status: 500 }
    );
  }
}
