import React from 'react';

export default function AboutSection() {
  return (
    <section id="home-about" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section header */}
        <div className="reveal mb-12 max-w-3xl md:mb-16 text-center mx-auto">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent">
            О компании
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] text-primary">
            Надёжный партнёр в международной логистике
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Комплексные решения для вашего бизнеса
          </p>
        </div>

        {/* Description */}
        <div className="reveal mx-auto max-w-3xl">
          <p className="text-center text-lg leading-relaxed text-gray-500">
            Globe Move — международная транспортно-логистическая компания, предоставляющая комплексные решения в сфере грузоперевозок, экспорта, импорта, таможенного оформления и сопровождения ВЭД. Мы помогаем бизнесу доставлять товары быстро, безопасно и без лишней бюрократии.
          </p>
        </div>
      </div>
    </section>
  );
}