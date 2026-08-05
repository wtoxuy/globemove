import React from 'react';
import AppLogo from './ui/AppLogo';

const footerLinks = [
  { label: 'О компании', href: '#home-about' },
  { label: 'Услуги', href: '#home-services' },
  { label: 'Преимущества', href: '#home-why' },
  { label: 'Как работаем', href: '#home-process' },
  { label: 'Специализация', href: '#home-gallery' },
  { label: 'FAQ', href: '#home-faq' },
];

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 text-center text-white">
      <div className="section-container flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <div className="flex items-center gap-2 justify-center">
            <AppLogo src="/assets/images/672687bb-c03e-4d7e-bb26-a0b74cec1756-1785928506284.png" size={40} />
            <span className="text-xl font-bold text-white">Globe Move</span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/60">
          Globe Move — международная транспортно-логистическая компания, предоставляющая комплексные решения в сфере грузоперевозок, экспорта, импорта и таможенного оформления.
        </p>

        {/* Nav */}
        <nav className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Навигация в подвале">
          {footerLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="text-sm text-white/60 hover:text-accent transition-colors"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="w-full border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">© 2026 Globe Move. Все права защищены.</p>
          <p className="mt-2 text-sm text-white/50">Международная логистика и таможенное оформление</p>
        </div>
      </div>
    </footer>
  );
}