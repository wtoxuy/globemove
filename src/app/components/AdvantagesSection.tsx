import React from 'react';

const advantages = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>
    ),
    title: 'Более 5+ лет опыта',
    desc: 'Проверенная экспертиза в международной логистике',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    ),
    title: 'Международная сеть партнёров',
    desc: 'Надёжные агенты по всему миру',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
    ),
    title: 'Быстрое оформление документов',
    desc: 'Минимум бюрократии и задержек',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    title: 'Индивидуальный подход',
    desc: 'Решения под задачи вашего бизнеса',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
    title: 'Прозрачные цены',
    desc: 'Без скрытых платежей и сюрпризов',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    ),
    title: 'Поддержка клиентов 24/7',
    desc: 'Всегда на связи в любой точке мира',
  },
];

export default function AdvantagesSection() {
  return (
    <section id="home-why" className="section-padding bg-gray-50">
      <div className="section-container">
        {/* Section header */}
        <div className="reveal mb-12 max-w-3xl md:mb-16 text-center mx-auto">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent">
            Преимущества
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] text-primary">
            Почему выбирают нас
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Мы создаём ценность для каждого клиента
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages?.map((adv, idx) => (
            <div key={adv?.title} className="reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
              <div className="card-hover flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-lg" style={{ boxShadow: '0 10px 15px -3px rgba(15,39,71,0.05), 0 4px 6px -4px rgba(15,39,71,0.05)' }}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  {adv?.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">{adv?.title}</h3>
                <p className="text-gray-500">{adv?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}