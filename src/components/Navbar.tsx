'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from '@/components/ui/optimized-image';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import { usePathname } from 'next/navigation';
import { LiquidGlass } from '@/components/ui/liquid-glass';
import { cn } from '@/lib/utils';
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  useNavbarVisible,
} from '@/components/ui/resizable-navbar';
import logoImg from '../../public/images/logo/logo.webp';
import logoDarkImg from '../../public/images/logo/logo-dark.webp';

interface NavbarProps {
  onOpenTestDrive?: (carId?: string) => void;
}

/**
 * Glass action button for the right-hand call to action.
 *
 * `tone` selects the treatment for a bar that is already light or already
 * dark:
 *   - "dark"  -> the bar is light, so the button is a solid black pill with
 *                white text in every scroll state.
 *   - "light" -> the bar is dark, so the button starts as a translucent white
 *                pill and inverts to a solid white pill with dark text once
 *                the navbar is scrolled.
 */
const NavbarActionButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  tone?: 'dark' | 'light';
}> = ({ children, href, onClick, tone = 'light' }) => {
  const visible = useNavbarVisible();

  // On a light bar the button is always a solid black pill with white text.
  // On a dark bar it starts translucent and inverts to a solid white pill
  // with dark text once scrolled.
  const isBlackPill = tone === 'dark';
  const labelClass = isBlackPill ? 'text-white' : visible ? 'text-gray-950' : 'text-white';

  return (
    <LiquidGlass
      radius={999}
      scale={22}
      aberration={10}
      bevelDepth={16}
      frost={0.3}
      tint={0.14}
      className={cn(
        'shadow-[0_12px_40px_rgb(0_0_0/0.25),inset_0_1px_0_rgb(255_255_255/0.5)]',
        isBlackPill && 'bg-black! shadow-[0_10px_30px_rgb(0_0_0/0.28)]',
        !isBlackPill && visible && 'bg-white! shadow-[0_10px_30px_rgb(0_0_0/0.28)]',
      )}
    >
      {href ? (
        <Link
          href={href}
          className={cn(
            'block text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-colors duration-300',
            labelClass,
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cn(
            'block text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-all duration-300 active:scale-95',
            labelClass,
          )}
        >
          {children}
        </button>
      )}
    </LiquidGlass>
  );
};

const MobileNavHeaderSection: React.FC<{
  isMobileDefaultTransparent: boolean;
  isMobileLightTheme: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  isMobileDefaultTransparent,
  isMobileLightTheme,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const visible = useNavbarVisible();

  // Saat visible (scrolled) -> selalu pakai tema terang (logo dark, teks #2B2B2B, toggle hitam).
  // Saat !visible (posisi awal / default di atas):
  //   - Jika isMobileDefaultTransparent (landing page, katalog, bengkel):
  //     Logo putih, teks putih, toggle putih!
  //   - Jika tidak (misal /kontak):
  //     Logo dark, teks #2B2B2B, toggle hitam.
  const useLightMobile = visible ? isMobileLightTheme : !isMobileDefaultTransparent;

  return (
    <MobileNavHeader className="px-1 py-0.5">
      <Link
        href="/"
        className="relative z-20 mr-2 flex shrink-0 items-center gap-3.5 group"
      >
        <span className="relative h-10 flex items-center">
          <Image
            src={useLightMobile ? logoDarkImg : logoImg}
            alt="Logo"
            qualityRole="logo"
            sizes={IMAGE_SIZES.logo}
            style={{ width: 'auto', height: '26px' }}
            className="h-6 sm:h-7 w-auto object-contain group-hover:scale-105 transition-transform"
            preload
          />
        </span>
        <span
          className={cn(
            'font-semibold text-lg sm:text-xl tracking-tight uppercase transition-colors duration-200',
            useLightMobile ? 'text-[#2B2B2B]' : 'text-white',
          )}
        >
          Salatiga
        </span>
      </Link>

      <MobileNavToggle
        isOpen={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={cn(
          'transition-colors duration-200',
          useLightMobile
            ? 'bg-black/5 hover:bg-black/10 border border-black/10 text-[#2B2B2B]'
            : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white',
        )}
      />
    </MobileNavHeader>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenTestDrive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Beranda', link: '/' },
    { name: 'Katalog Unit', link: '/katalog' },
    { name: 'Layanan Bengkel', link: '/bengkel' },
    { name: 'Kontak & Tentang', link: '/kontak' },
  ];

  /**
   * Halaman detail mobil: /katalog/<id> (segmen tunggal setelah /katalog).
   * Tidak mencakup /katalog (daftar unit) maupun /katalog/<id>/spesifikasi.
   */
  const isCatalogUnitDetail =
    pathname != null && /^\/katalog\/[^/]+$/.test(pathname);

  /**
   * Menu "Katalog Unit" tetap ditandai aktif saat pengguna berada di dalam
   * katalog — termasuk halaman detail unit — sehingga pill active tidak
   * pernah hilang di tengah navigasi.
   */
  const isNavItemActive = (item: { name: string; link: string }) => {
    if (pathname == null) return false;
    if (item.link === '/katalog') {
      return pathname === '/katalog' || /^\/katalog\/.+/.test(pathname);
    }
    return pathname === item.link;
  };

  /**
   * Halaman detail mobil dan kontak & tentang memakai navbar terang (latar #F8F9FA)
   * dengan logo dan CTA hitam di desktop. Halaman lain mempertahankan
   * tema gelap-hingga-scroll yang sudah ada.
   */
  const isLightTheme =
    isCatalogUnitDetail || pathname === '/kontak' || pathname === '/kontak/';

  /**
   * Versi mobile navbar untuk landing page ('/'), katalog unit ('/katalog'),
   * dan kontak & tentang ('/kontak') mengikuti tema terang liquid glass
   * milik page kontak dan tentang saat scrolled.
   */
  const isMobileLightTheme =
    pathname === '/' ||
    pathname === '/katalog' ||
    (pathname != null && pathname.startsWith('/katalog')) ||
    (pathname != null && pathname.startsWith('/kontak')) ||
    isLightTheme;

  /**
   * Navbar default versi mobile untuk landing page, katalog unit, dan bengkel
   * tanpa background fill (transparan), dengan logo dan teks putih.
   */
  const isMobileDefaultTransparent =
    pathname === '/' ||
    pathname === '/katalog' ||
    pathname === '/katalog/' ||
    pathname === '/bengkel' ||
    pathname === '/bengkel/';

  const renderBrandLogo = (isLight: boolean) => (
    <Link
      href="/"
      className="relative z-20 mr-2 flex shrink-0 items-center gap-3.5 group"
    >
      <span className="relative h-10 flex items-center">
        <Image
          src={isLight ? logoDarkImg : logoImg}
          alt="Logo"
          qualityRole="logo"
          sizes={IMAGE_SIZES.logo}
          style={{ width: 'auto', height: '26px' }}
          className="h-6 sm:h-7 w-auto object-contain group-hover:scale-105 transition-transform"
          preload
        />
      </span>
      <span
        className={cn(
          'font-semibold text-lg sm:text-xl tracking-tight uppercase',
          isLight ? 'text-[#2B2B2B]' : 'text-white',
        )}
      >
        Salatiga
      </span>
    </Link>
  );

  const desktopActionButton = onOpenTestDrive ? (
    <NavbarActionButton onClick={() => onOpenTestDrive()} tone={isLightTheme ? 'dark' : 'light'}>
      Test Drive
    </NavbarActionButton>
  ) : (
    <NavbarActionButton href="/kontak" tone={isLightTheme ? 'dark' : 'light'}>
      Kontak
    </NavbarActionButton>
  );

  const mobileActionButton = onOpenTestDrive ? (
    <NavbarActionButton onClick={() => onOpenTestDrive()} tone={isMobileLightTheme ? 'dark' : 'light'}>
      Test Drive
    </NavbarActionButton>
  ) : (
    <NavbarActionButton href="/kontak" tone={isMobileLightTheme ? 'dark' : 'light'}>
      Kontak
    </NavbarActionButton>
  );

  return (
    <ResizableNavbar className="fixed top-0 inset-x-0 z-50 w-full">
      <NavBody
        className="max-w-[1728px] px-4 sm:px-8 lg:px-12 lg:flex"
        visibleWidth="76%"
        minWidth={760}
        defaultClassName={
          isLightTheme
            ? 'border-b border-black/5'
            : undefined
        }
        visibleClassName={
          isLightTheme
            ? 'bg-[#F8F9FA]! border-b border-black/5 shadow-lg'
            : 'bg-neutral-950/85! border-b border-white/10 shadow-lg'
        }
      >
        {renderBrandLogo(isLightTheme)}
        <NavItems
          items={navLinks}
          className="lg:flex"
          linkClassName={
            isLightTheme
              ? 'text-[#45464C]! hover:text-[#2B2B2B]! transition-colors duration-200'
              : 'text-white/60! hover:text-white! transition-colors'
          }
          activeClassName={
            isLightTheme
              ? 'text-white! hover:text-white!'
              : 'text-white!'
          }
          activePillClassName={isLightTheme ? 'bg-black!' : undefined}
          hoverPillClassName={isLightTheme ? 'bg-black/8!' : 'bg-white/10!'}
          enableSlidingPill={isLightTheme}
          isActive={isNavItemActive}
        />
        <div className="relative z-20 flex items-center shrink-0">{desktopActionButton}</div>
      </NavBody>

      <MobileNav
        visibleClassName={
          isMobileLightTheme
            ? 'bg-white/70! border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.85)]'
            : 'bg-neutral-950/70! border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.25)]'
        }
        defaultClassName={
          isMobileDefaultTransparent
            ? 'bg-transparent! border-transparent! shadow-none!'
            : isMobileLightTheme
              ? 'bg-white/50 border-b border-black/5 shadow-sm'
              : 'bg-black/20 border-b border-white/10'
        }
        className="px-3 sm:px-6 lg:hidden"
      >
        <MobileNavHeaderSection
          isMobileDefaultTransparent={isMobileDefaultTransparent}
          isMobileLightTheme={isMobileLightTheme}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          menuClassName={
            isMobileLightTheme
              ? 'bg-white/85 border border-black/10 shadow-[0_24px_50px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] text-[#2B2B2B]'
              : 'bg-neutral-950/80 border border-white/15 shadow-[0_24px_50px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] text-white'
          }
        >
          {navLinks.map((item, idx) => {
            const isActiveItem = isNavItemActive(item);
            return (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActiveItem ? 'page' : undefined}
                className={cn(
                  'group relative w-full flex items-center justify-between rounded-full px-5 py-3 hover:py-4 text-sm sm:text-base font-semibold transition-all duration-200 ease-out',
                  isActiveItem
                    ? 'bg-black text-white shadow-md shadow-black/20 py-3.5'
                    : isMobileLightTheme
                      ? 'text-[#2B2B2B] hover:bg-[#2C2D31] hover:text-white hover:shadow-md hover:shadow-black/10'
                      : 'text-white/85 hover:bg-[#2C2D31] hover:text-white hover:shadow-md hover:shadow-black/20',
                )}
              >
                <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
                  {item.name}
                </span>
                <span
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-200',
                    isActiveItem
                      ? 'bg-white scale-100 opacity-100'
                      : 'bg-white scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100',
                  )}
                />
              </Link>
            );
          })}
          <div className="w-full pt-3 mt-1 border-t border-black/10">
            <div className="w-full [&>div]:w-full [&>div>button]:w-full [&>div>a]:w-full">
              {mobileActionButton}
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};
