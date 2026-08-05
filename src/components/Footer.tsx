import React from 'react';


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
            <span className="text-xl font-bold text-white">Globe Move</span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/60">
          Globe Move — международная транспортно-логистическая компания, предоставляющая комплексные решения в сфере грузоперевозок, экспорта, импорта и таможенного оформления.
        </p>

        {/* Nav */}
        <nav className="mb-8" aria-label="Навигация в подвале">
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