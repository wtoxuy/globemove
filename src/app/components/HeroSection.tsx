import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="home-hero"
      className="relative flex min-h-screen items-start overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/assets/images/ChatGPT_Image_5____._2026__.__12_49_29-1785916583526.png)', backgroundSize: 'cover', backgroundPosition: 'center center', imageRendering: 'auto' }}>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      <div className="section-container relative z-10 pt-24 pb-20 md:pt-28 lg:pt-32">
        <div className="max-w-2xl -mt-2 animate-fade-in md:-mt-6 lg:-mt-10">
          {/* Badge */}
          <span className="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">

          </span>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Международные грузоперевозки без границ
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            Организуем экспорт, импорт, таможенное оформление и доставку грузов по всему миру быстро, безопасно и профессионально.
          </p>

          {/* CTA */}
          <Link
            href="#home-contact"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-accent-hover shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">

            Получить консультацию
          </Link>
        </div>
      </div>
    </section>);

}