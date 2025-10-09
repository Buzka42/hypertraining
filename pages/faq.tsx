import React, { useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../contexts/LanguageContext'
import PageHeader from '../components/PageHeader'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const faqs = [
    {
      question: 'Jak zacząć przygodę z trenerem personalnym?',
      answer: 'Pierwsza sesja rozpoczyna się od szczegółowego wywiadu dotyczącego Twoich celów, doświadczenia treningowego i stanu zdrowia. Następnie przeprowadzam analizę składu ciała i testy kondycyjne. Na tej podstawie tworzę indywidualny plan treningowy i omawiamy dalsze kroki.'
    },
    {
      question: 'Ile razy w tygodniu ćwiczyć z trenerem personalnym?',
      answer: 'Dla początkujących polecam 2-3 treningi w tygodniu. Osoby bardziej zaawansowane mogą trenować 3-4 razy w tygodniu. Częstotliwość zależy od celów, kondycji i możliwości regeneracji.'
    },
    {
      question: 'Czego mogę się spodziewać korzystając z usług trenera personalnego?',
      answer: 'Możesz oczekiwać profesjonalnego podejścia, indywidualnego planu treningowego, motywacji, bezpiecznych ćwiczeń oraz regularnego monitoringu postępów. Zapewniam również podstawowe wskazówki żywieniowe.'
    },
    {
      question: 'Jak wygląda konsultacja z trenerem personalnym?',
      answer: 'Konsultacja obejmuje wywiad zdrowotny, analizę celów, pomiary ciała, testy kondycyjne oraz omówienie możliwości treningowych. Na tej podstawie tworzę plan dopasowany do Twoich potrzeb.'
    },
    {
      question: 'Ile treningów personalnych potrzebuję?',
      answer: 'Zależne od celów - dla podstawowej poprawy kondycji wystarczy 8-12 sesji, dla znaczących zmian sylwetki 20-30 treningów. Regularne treningi przez 3-6 miesięcy dają najlepsze rezultaty.'
    },
    {
      question: 'Po czym poznać dobrego trenera personalnego?',
      answer: 'Dobry trener ma certyfikaty, doświadczenie, pozytywne opinie klientów, indywidualne podejście, umiejętność motywowania i dostosowywania treningów do możliwości klienta.'
    },
    {
      question: 'Gdzie odbywają się treningi personalne?',
      answer: 'Treningi odbywają się w profesjonalnej siłowni przy ul. gen. Augusta Emila Fieldorfa Nila 41 w Warszawie. Oferuję również treningi online oraz w domu klienta.'
    },
    {
      question: 'Czy opłaca się trenować z trenerem personalnym?',
      answer: 'Tak, trening personalny to inwestycja w zdrowie. Zapewnia szybsze osiągnięcie celów, bezpieczeństwo ćwiczeń, motywację i profesjonalne wsparcie, co jest bardziej efektywne niż samodzielne treningi.'
    },
    {
      question: 'Ile trwa jeden trening i jaki jest jego koszt?',
      answer: 'Standardowa sesja treningowa trwa 60 minut. Ceny zaczynają się od 120 zł za sesję. Szczegółowy cennik znajdziesz w zakładce Cennik lub skontaktuj się ze mną po indywidualną wycenę.'
    },
    {
      question: 'Jak długo trzeba ćwiczyć z trenerem personalnym?',
      answer: 'Pierwsze efekty widoczne są po 2-3 tygodniach, znaczące zmiany po 6-8 tygodniach. Dla trwałych rezultatów polecam minimum 3-miesięczny program treningowy.'
    },
    {
      question: 'Jakie są korzyści z treningu personalnego?',
      answer: 'Główne korzyści to: szybsze osiągnięcie celów, bezpieczne ćwiczenia, indywidualne podejście, motywacja, profesjonalne doradztwo żywieniowe, monitoring postępów i dostosowanie do Twoich możliwości.'
    },
    {
      question: 'Czy muszę mieć skierowanie od lekarza, aby korzystać z trenera personalnego?',
      answer: 'Skierowanie nie jest wymagane, ale zalecam konsultację lekarską przed rozpoczęciem intensywnych treningów, szczególnie jeśli masz problemy zdrowotne lub kontuzje.'
    },
    {
      question: 'Czy mogę trenować razem z moim mężem/żoną/znajomym?',
      answer: 'Tak, oferuję treningi w parach lub małych grupach. To doskonała opcja dla par lub przyjaciół, którzy chcą trenować razem. Cena za trening w parze jest korzystniejsza niż za dwie osobne sesje.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>{t('faq.title')}</title>
        <meta name="description" content={t('faq.description')} />
        <meta name="keywords" content="jak zacząć przygodę z trenerem personalnym, ile razy w tygodniu ćwiczyć z trenerem personalnym, korzyści z treningu personalnego, po czym poznać dobrego trenera personalnego" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <PageHeader 
          title={t('faq.header.title')}
          description={t('faq.header.description')}
        />

        {/* FAQ Content */}
        <section className="py-24 px-4 bg-card">
          <div className="container mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-lg font-bold text-foreground pr-4">
                      {t(`faq.q${index + 1}`) || faq.question}
                    </h3>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-border mt-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {t(`faq.a${index + 1}`) || faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {t('faq.cta.title')}
              </h2>
              <p className="text-xl mb-8 mx-auto text-muted-foreground">
                {t('faq.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48123456789" className="btn-secondary inline-flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  {t('faq.cta.call')}
                </a>
                <a href="mailto:kontakt@hypertraining.pl" className="btn-primary inline-flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  {t('faq.cta.email')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}