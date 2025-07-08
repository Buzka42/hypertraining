import React, { useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Jak wygląda pierwsza sesja treningowa?',
      answer: 'Pierwsza sesja rozpoczyna się od szczegółowego wywiadu dotyczącego Twoich celów, doświadczenia treningowego i stanu zdrowia. Następnie przeprowadzam analizę składu ciała i testy kondycyjne. Na tej podstawie tworzę indywidualny plan treningowy i omawiamy dalsze kroki.'
    },
    {
      question: 'Ile trwa jedna sesja treningowa?',
      answer: 'Standardowa sesja treningowa trwa 60 minut. W tym czasie mieszczą się rozgrzewka, główna część treningowa oraz stretching. W zależności od potrzeb, sesja może być wydłużona do 90 minut.'
    },
    {
      question: 'Czy mogę anulować lub przełożyć trening?',
      answer: 'Tak, możesz anulować lub przełożyć trening z 24-godzinnym wyprzedzeniem bez dodatkowych opłat. Anulowanie w krótszym czasie może wiązać się z opłatą za sesję.'
    },
    {
      question: 'Czy dostaję plan żywieniowy w ramach treningu?',
      answer: 'Podstawowe wskazówki żywieniowe są zawsze częścią treningu personalnego. Szczegółowy plan żywieniowy jest dostępny w pakietach miesięcznych lub jako dodatkowa usługa.'
    },
    {
      question: 'Jakie efekty mogę osiągnąć i w jakim czasie?',
      answer: 'Pierwsze efekty widoczne są już po 2-3 tygodniach regularnych treningów. Znaczące zmiany w sylwetce i kondycji następują po 6-8 tygodniach. Tempo postępów zależy od regularności, diety i indywidualnych predyspozycji.'
    },
    {
      question: 'Czy treningi są odpowiednie dla początkujących?',
      answer: 'Absolutnie! Specjalizuję się w pracy z osobami na każdym poziomie zaawansowania. Dla początkujących przygotowuję szczególnie bezpieczne i stopniowo progresywne programy treningowe.'
    },
    {
      question: 'Co powinienem zabrać na trening?',
      answer: 'Potrzebujesz wygodnego stroju sportowego, butów treningowych, ręcznika i butelki z wodą. Jeśli masz własne rękawiczki treningowe, możesz je zabrać, ale nie jest to konieczne.'
    },
    {
      question: 'Czy mogę trenować z kontuzją?',
      answer: 'To zależy od rodzaju i stopnia kontuzji. Zawsze wymagam zaświadczenia lekarskiego o braku przeciwwskazań do aktywności fizycznej. Mogę dostosować trening do Twoich ograniczeń zdrowotnych.'
    },
    {
      question: 'Jak często powinienem trenować?',
      answer: 'Dla początkujących polecam 2-3 treningi w tygodniu. Osoby bardziej zaawansowane mogą trenować 3-4 razy w tygodniu. Częstotliwość zależy od celów, kondycji i możliwości regeneracji.'
    },
    {
      question: 'Czy oferujesz treningi online?',
      answer: 'Tak, oferuję treningi online oraz coaching zdalny. To doskonała opcja dla osób, które nie mogą regularnie przyjeżdżać na siłownię lub preferują trening w domu.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>FAQ - Często Zadawane Pytania | HyperTraining</title>
        <meta name="description" content="Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące treningów personalnych, planów żywieniowych i usług HyperTraining." />
        <meta name="keywords" content="faq trener personalny, pytania trening personalny, informacje fitness warszawa" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-primary-600 text-white section-padding">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Często Zadawane Pytania
              </h1>
              <p className="text-xl font-light max-w-2xl mx-auto">
                Znajdź odpowiedzi na najważniejsze pytania dotyczące treningów personalnych i moich usług
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-max max-w-4xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
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
                        <div className="pt-4 border-t border-gray-200 mt-4">
                          <p className="text-gray-600 font-light leading-relaxed">
                            {faq.answer}
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

        {/* Contact CTA */}
        <section className="section-padding bg-primary-600 text-white">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Nie Znalazłeś Odpowiedzi na Swoje Pytanie?
              </h2>
              <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
                Skontaktuj się ze mną bezpośrednio. Chętnie odpowiem na wszystkie Twoje pytania 
                i pomogę wybrać najlepszy plan treningowy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48123456789" className="btn-secondary">
                  📞 Zadzwoń Teraz
                </a>
                <a href="mailto:kontakt@hypertraining.pl" className="btn-primary bg-accent-500 hover:bg-accent-600">
                  📧 Wyślij Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FAQPage