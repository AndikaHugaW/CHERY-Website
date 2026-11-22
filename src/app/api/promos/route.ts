import { NextResponse } from 'next/server';
import { PROMOS_DATA } from '@/data/promos';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    updatedAt: new Date().toISOString(),
    dealer: 'Chery Official Dealer Salatiga',
    totalPromos: PROMOS_DATA.length,
    data: PROMOS_DATA
  });
}
