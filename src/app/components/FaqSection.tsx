'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'Какие документы нужны для международной перевозки?',
    a: 'Набор документов зависит от типа груза и страны назначения. Обычно требуются инвойс, упаковочный лист, транспортные документы и таможенная декларация. Наши специалисты подготовят полный пакет под вашу сделку.',
  },
  {
    q: 'Какие сроки доставки?',
    a: 'Сроки зависят от маршрута и вида транспорта: авиа — 3–7 дней, авто — 7–21 день. Для цветов подбираем максимально быстрый маршрут. Точный срок рассчитываем индивидуально после заявки.',
  },
  {
    q: 'В какие страны вы работаете?',
    a: 'Мы организуем перевозки в более чем 25 стран мира, включая страны СНГ, Европу, Азию и Ближний Восток. Уточните направление — подберём оптимальный маршрут.',
  },
  {
    q: 'Как рассчитывается стоимость?',
    a: 'Стоимость формируется из вида транспорта, маршрута, веса и объёма груза, а также таможенных и дополнительных услуг. Оставьте заявку — подготовим детальный расчёт в течение 24 часов.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="home-faq" className="section-padding bg-white">
      <div className="section-container">
        {/* Section header */}
        <div className="reveal mb-12 max-w-3xl md:mb-16 text-center mx-auto">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem] text-primary">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Ответы на популярные вопросы о наших услугах
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="reveal mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs?.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <span className="text-lg font-semibold text-primary">{faq?.q}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-gray-500">{faq?.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}