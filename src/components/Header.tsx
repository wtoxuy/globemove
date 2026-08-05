'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from './ui/AppLogo';

const navLinks = [
  { label: 'О компании', href: '#home-about' },
  { label: 'Услуги', href: '#home-services' },
  { label: 'Преимущества', href: '#home-why' },
  { label: 'Как работаем', href: '#home-process' },
  { label: 'Специализация', href: '#home-gallery' },
  { label: 'FAQ', href: '#home-faq' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-hero'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex items-center gap-2">
              <AppLogo src="/assets/images/app_logo.png" size={40} />
              <span className="text-xl font-bold text-white">Globe Move</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-accent"
              >
                {link?.label}
              </Link>
            ))}
            <Link
              href="#home-contact"
              className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02]"
            >
              Связаться
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary z-40 flex flex-col pt-24 px-6 pb-10 mobile-menu-overlay ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-2 flex-1">
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={closeMenu}
              className="flex items-center justify-between py-4 border-b border-white/10 text-white text-2xl font-semibold hover:text-accent transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link?.label}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
        <Link
          href="#home-contact"
          onClick={closeMenu}
          className="mt-8 w-full text-center bg-accent text-white px-6 py-4 rounded-xl font-semibold text-base hover:bg-accent-hover transition-colors"
        >
          Получить консультацию
        </Link>
        <p className="text-center text-white/40 text-xs mt-4">+998 (88) 747-06-03</p>
      </div>
    </>
  );
}