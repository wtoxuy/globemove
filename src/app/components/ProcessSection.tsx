import React from 'react';

const steps = [
  {
    num: '1',
    title: 'Заявка клиента',
    desc: 'Оставьте заявку на сайте или свяжитесь с нами',
  },
  {
    num: '2',
    title: 'Расчёт стоимости',
    desc: 'Подготовим оптимальный маршрут и смету',
  },
  {
    num: '3',
    title: 'Перевозка груза',
    desc: 'Организуем доставку и таможенное оформление',
  },
  {
    num: '4',
    title: 'Доставка получателю',
    desc: 'Контролируем груз до финальной точки',
  },
];

export default function ProcessSection() {
  return (
    <section id="home-process" className="section-padding bg-white">
      <div className="section-container">
        {/* Section header */}
        <div className="reveal mb-12 max-w-3xl md:mb-16 text-center mx-auto">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent">
            Процесс
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] text-primary">
            Как мы работаем
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Простой и прозрачный путь от заявки до доставки
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="process-line" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps?.map((step, idx) => (
              <div key={step?.num} className="reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white shadow-lg" style={{ boxShadow: '0 10px 15px -3px rgba(56,189,248,0.3)' }}>
                    {step?.num}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-primary">{step?.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{step?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}