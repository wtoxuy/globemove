import React from 'react';

const advantageItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
    title: 'Быстрое оформление',
    desc: 'Ускоряем таможенные и транспортные процедуры',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </svg>
    ),
    title: 'Надёжная логистика',
    desc: 'Проверенные маршруты и перевозчики',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Контроль груза',
    desc: 'Отслеживание на каждом этапе доставки',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    ),
    title: 'Работа под ключ',
    desc: 'Полный цикл от документов до доставки',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
        <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
        <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: 'Международные перевозки',
    desc: 'Авто и авиа направления по всему миру',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
    title: 'Полное сопровождение',
    desc: 'Персональный менеджер на всех этапах',
  },
];

const cargoItems = [
  { emoji: '🏗️', text: 'Промышленное оборудование' },
  { emoji: '🧱', text: 'Строительные материалы' },
  { emoji: '🚜', text: 'Спецтехнику и коммерческую технику' },
  { emoji: '🥦', text: 'Продукты питания и скоропортящиеся грузы' },
  { emoji: '🧵', text: 'Текстиль и швейную продукцию' },
  { emoji: '🌹', text: 'Цветы, растения и саженцы' },
];

export default function SpecializationSection() {
  return (
    <>
      {/* Advantages section */}
      <section id="home-advantages" className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="reveal mb-12 max-w-3xl md:mb-16 text-center mx-auto">
            <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent">
              Преимущества
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] text-primary">
              Наши преимущества
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Всё для комфортной и безопасной доставки вашего груза
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantageItems?.map((item, idx) => (
              <div key={item?.title} className="reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className="card-hover group flex h-full items-start gap-5 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg" style={{ boxShadow: '0 10px 15px -3px rgba(15,39,71,0.05), 0 4px 6px -4px rgba(15,39,71,0.05)' }}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    {item?.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-primary">{item?.title}</h3>
                    <p className="text-gray-500">{item?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Specialization section */}
      <section id="home-gallery" className="section-padding bg-white">
        <div className="section-container">
          <div className="reveal mb-12 max-w-3xl md:mb-16 text-center mx-auto">
            <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent">
              Специализация
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] text-primary">
              Международная логистика цветов и растений
            </h2>
          </div>

          <div className="reveal mx-auto mb-12 max-w-4xl">
            <p className="text-center text-lg leading-relaxed text-gray-500">
              Мы специализируемся на перевозке срезанных цветов, саженцев, декоративных растений и флористической продукции. Организуем экспорт и импорт с соблюдением температурного режима, сроков доставки и всех требований к сохранности груза. Благодаря надёжной логистике ваш товар прибудет свежим, в идеальном состоянии и точно в срок.
            </p>
          </div>

          <div className="reveal mb-14">
            <h3 className="mb-6 text-center text-xl font-semibold text-primary">Мы перевозим:</h3>
            <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
              {cargoItems?.map((item) => (
                <li
                  key={item?.text}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 text-gray-700"
                >
                  <span className="text-2xl" aria-hidden="true">{item?.emoji}</span>
                  <span className="font-medium">{item?.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}