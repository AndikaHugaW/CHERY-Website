'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import logoImg from '../../public/images/logo/logo.png';

interface NavbarProps {
  onOpenTestDrive?: (carId?: string) => void;
}

/**
 * Glass action button that inverts to a solid white pill with dark text once
 * the navbar enters its resized (scrolled) state.
 */
const NavbarActionButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}> = ({ children, href, onClick }) => {
  const visible = useNavbarVisible();

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
        visible && 'bg-white! shadow-[0_10px_30px_rgb(0_0_0/0.28)]',
      )}
    >
      {href ? (
        <Link
          href={href}
          className={cn(
            'block text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-colors duration-300',
            visible ? 'text-gray-950' : 'text-white',
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
            visible ? 'text-gray-950' : 'text-white',
          )}
        >
          {children}
        </button>
      )}
    </LiquidGlass>
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

  const isCatalogUnitDetail =
    pathname != null && /^\/katalog\/[^/]+$/.test(pathname);

  const brandLogo = (
    <Link
      href="/"
      className="relative z-20 mr-2 flex shrink-0 items-center gap-3.5 group"
    >
      <span className="relative h-10 flex items-center">
        <Image
          src={logoImg}
          alt="Logo"
          style={{ width: 'auto', height: '26px' }}
          className="h-6 sm:h-7 w-auto object-contain group-hover:scale-105 transition-transform"
          priority
        />
      </span>
      <span className="font-semibold text-lg sm:text-xl tracking-tight text-white uppercase">
        Salatiga
      </span>
    </Link>
  );

  const actionButton = onOpenTestDrive ? (
    <NavbarActionButton onClick={() => onOpenTestDrive()}>
      Test Drive
    </NavbarActionButton>
  ) : (
    <NavbarActionButton href="/kontak">Kontak</NavbarActionButton>
  );

  return (
    <ResizableNavbar className="fixed top-0 inset-x-0 z-50 w-full">
      {/* Desktop Navigation */}
      <NavBody
        className="max-w-[1728px] px-4 sm:px-8 lg:px-12 md:flex"
        visibleWidth="76%"
        minWidth={760}
        visibleClassName={
          isCatalogUnitDetail
            ? 'bg-black/90! border-b border-white/10 shadow-lg'
            : 'bg-neutral-950/85! border-b border-white/10 shadow-lg'
        }
      >
        {brandLogo}
        <NavItems
          items={navLinks}
          className="md:flex"
          linkClassName="text-white/60! hover:text-white! transition-colors"
          activeClassName="text-white!"
          hoverPillClassName="bg-white/10!"
          isActive={(item) => pathname === item.link}
        />
        <div className="relative z-20 flex items-center shrink-0">{actionButton}</div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav
        visibleClassName="bg-neutral-950/90! border-b border-white/10 shadow-lg"
        className="px-4 sm:px-8 md:hidden"
      >
        <MobileNavHeader>
          {brandLogo}
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          menuClassName="bg-neutral-950/95 backdrop-blur-xl border-t border-white/10 text-white"
        >
          {navLinks.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className={`relative ${
                pathname === item.link
                  ? 'font-bold text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4">
            <div className="w-full">{actionButton}</div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};
