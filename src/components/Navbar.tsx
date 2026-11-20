'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import logoImg from '../../public/images/logo/logo.png';

interface NavbarProps {
  onOpenTestDrive?: (carId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTestDrive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Katalog Unit', href: '/katalog' },
    { name: 'Layanan Bengkel', href: '/bengkel' },
    { name: 'Kontak & Tentang', href: '/kontak' },
  ];

  const isCatalogUnitDetail =
    pathname != null && /^\/katalog\/[^/]+$/.test(pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isCatalogUnitDetail
          ? 'bg-black border-b border-white/10 shadow-lg'
          : scrolled
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-10 flex items-center">
            <Image
              src={logoImg}
              alt="Logo"
              style={{ width: 'auto', height: '26px' }}
              className="h-6 sm:h-7 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <span className="font-semibold text-xl sm:text-2xl tracking-tight text-white uppercase">
            Salatiga
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors group ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-white/50 hover:text-white font-medium'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-[-6px] left-0 right-0 h-[2px] bg-white rounded-full transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-75'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center">
          {onOpenTestDrive ? (
            <button
              type="button"
              onClick={() => onOpenTestDrive()}
              className="bg-transparent hover:bg-white/10 text-white border border-white/80 text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all active:scale-95"
            >
              Test Drive
            </button>
          ) : (
            <Link
              href="/kontak"
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all active:scale-95 text-center inline-block"
            >
              Kontak
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base transition-colors ${
                  isActive
                    ? 'font-bold text-white border-l-4 border-white pl-2'
                    : 'text-white/50 hover:text-white pl-3'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-white text-black font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition-colors"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};


