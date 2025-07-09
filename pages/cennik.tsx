import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../contexts/LanguageContext'

export default function CennikPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const { t } = useLanguage()

  const wellFitnessPackages = [
    {
      id: '1',
      name: '1 Trening',
      price: '150',
      duration: 'Pojedyncza sesja',
      description: 'Idealny na start - poznaj moje metody treningowe',
      features: [
        'Indywidualny trening 60 min',
        'Analiza potrzeb i celow',
        'Podstawowe wskazowki zywieniowe',
        'Trening w Well Fitness Goclaw',
        'Profesjonalne wsparcie trenera'
      ],
      popular: false
    },
    {
      id: '4',
      name: '4 Treningi',
      price: '520',
      duration: '130 zl za trening',
      description: 'Pakiet startowy - pierwsze efekty juz widoczne',
      features: [
        '4 treningi personalne po 60 min',
        'Plan treningowy na miesiac',
        'Wsparcie motywacyjne',
        'Monitoring postepow',
        'Podstawowe wskazowki zywieniowe'
      ],
      popular: false
    },
    {
      id: '8',
      name: '8 Treningow',
      price: '960',
      duration: '120 zl za trening',
      description: 'Najchetniej wybierany pakiet - widoczne rezultaty',
      features: [
        '8 treningow personalnych po 60 min',
        'Szczegolowy plan treningowy',
        'Plan zywieniowy',
        'Regularne pomiary i ocena postepow',
        'Wsparcie miedzy treningami'
      ],
      popular: true
    },
    {
      id: '12',
      name: '12 Treningow',
      price: '1320',
      duration: '110 zl za trening',
      description: 'Pakiet dla ambitnych - trwala zmiana nawykow',
      features: [
        '12 treningow personalnych po 60 min',
        'Kompleksowy plan treningowy',
        'Indywidualny plan zywieniowy',
        'Regularne konsultacje',
        'Dostep do aplikacji treningowej'
      ],
      popular: false
    },
    {
      id: '16',
      name: '16 Treningow',
      price: '1680',
      duration: '105 zl za trening',
      description: 'Rozszerzony pakiet dla zaawansowanych',
      features: [
        '16 treningow personalnych po 60 min',
        'Zaawansowany plan treningowy',
        'Szczegolowy plan zywieniowy',
        'Regularne pomiary skladu ciala',
        'Coaching online miedzy treningami'
      ],
      popular: false
    },
    {
      id: '25',
      name: '25 Treningow',
      price: '2500',
      duration: '100 zl za trening',
      description: 'Pakiet transformacyjny - najlepsza cena za trening',
      features: [
        '25 treningow personalnych po 60 min',
        'Kompleksowy program treningowy',
        'Szczegolowy plan zywieniowy',
        'Pelne wsparcie przez 3-4 miesiace',
        'Najlepsza cena za pojedynczy trening'
      ],
      popular: false
    }
  ]

  const pairGroupPackages = [
    {
      name: '1 Trening w Parze',
      price: '200',
      duration: 'Pojedyncza sesja dla 2 osob',
      description: 'Trenuj razem z partnerem lub przyjacielem',
      features: [
        'Trening dla 2 osob - 60 min',
        'Cwiczenia dostosowane do obu osob',
        'Motywacja w parze',
        'Wspolne osiaganie celow',
        'Podstawowe wskazowki zywieniowe'
      ]
    },
    {
      name: '4 Treningi w Parze',
      price: '720',
      duration: '180 zl za trening',
      description: 'Pakiet startowy dla par',
      features: [
        '4 treningi w parze po 60 min',
        'Plan treningowy dla obu osob',
        'Wspolne cele i motywacja',
        'Monitoring postepow pary',
        'Wsparcie miedzy treningami'
      ]
    },
    {
      name: '8 Treningow w Parze',
      price: '1280',
      duration: '160 zl za trening',
      description: 'Rozszerzony pakiet dla par',
      features: [
        '8 treningow w parze po 60 min',
        'Szczegolowy plan treningowy',
        'Indywidualne podejscie do kazdej osoby',
        'Regularne pomiary postepow',
        'Plan zywieniowy dla obu osob'
      ]
    },
    {
      name: '1 Trening Grupowy',
      price: '250',
      duration: 'Sesja dla 2-6 osob',
      description: 'Trening w malej grupie znajomych',
      features: [
        'Trening grupowy 2-6 osob - 60 min',
        'Cwiczenia dostosowane do grupy',
        'Motywacja grupowa',
        'Wspolna zabawa i cele',
        'Podstawowe wskazowki zywieniowe'
      ]
    }
  ]

  const otherLocations = [
    {
      name: 'Trening Kalisteniczny',
      price: '100',
      duration: 'Silownia plenerowa',
      description: 'Trening na swiezym powietrzu z wykorzystaniem wlasnej masy ciala',
      features: [
        'Trening na silowni plenerowej - 60 min',
        'Cwiczenia z wlasna masa ciala',
        'Trening funkcjonalny',
        'Podstawowe wskazowki zywieniowe',
        'Dostosowanie do poziomu zaawansowania'
      ]
    },
    {
      name: 'Trening Online',
      price: '100',
      duration: 'Sesja zdalna',
      description: 'Indywidualny trening prowadzony zdalnie przez video',
      features: [
        'Trening online przez video - 60 min',
        'Indywidualne podejscie',
        'Trening w domu lub wybranym miejscu',
        'Wskazowki dotyczace sprzetu',
        'Monitoring techniki wykonania'
      ]
    },
    {
      name: '8 Treningow - Inna Silownia',
      price: '1360',
      duration: '170 zl za trening',
      description: 'Pakiet treningow w silowni innej niz Well Fitness Goclaw',
      features: [
        '8 treningow personalnych po 60 min',
        'Trening w wybranej przez Ciebie silowni',
        'Szczegolowy plan treningowy',
        'Dostosowanie do sprzetu silowni',
        'Regularne pomiary postepow'
      ]
    }
  ]

  const additionalServices = [
    {
      name: 'Plan Treningowy - Poczatkujacy',
      price: '100',
      description: 'Indywidualny plan treningowy dla osob rozpoczynajacych przygode z fitness',
      features: [
        'Plan na 4-6 tygodni',
        'Szczegolowe opisy cwiczen',
        'Progresja trudnosci',
        'Podstawowe wskazowki zywieniowe',
        'Wsparcie przez telefon/email'
      ]
    },
    {
      name: 'Plan Treningowy - Sredniozaawansowany',
      price: '150',
      description: 'Plan dla osob z doswiadczeniem treningowym',
      features: [
        'Plan na 6-8 tygodni',
        'Zaawansowane techniki treningowe',
        'Periodyzacja obciazen',
        'Szczegolowe wskazowki zywieniowe',
        'Regularne konsultacje online'
      ]
    },
    {
      name: 'Plan Treningowy - Zaawansowany',
      price: '300',
      description: 'Specjalistyczny plan kulturystyczny, trojbojowy lub sportowy',
      features: [
        'Plan na 8-12 tygodni',
        'Specjalizacja w wybranej dyscyplinie',
        'Zaawansowana periodyzacja',
        'Kompleksowy plan zywieniowy',
        'Regularne konsultacje i korekty'
      ]
    },
    {
      name: 'Coaching Online',
      price: '150',
      duration: '1 miesiac',
      description: 'Miesieczne wsparcie online z planem treningowym i zywieniowym',
      features: [
        'Indywidualny plan treningowy',
        'Plan zywieniowy',
        'Cotygodniowe konsultacje online',
        'Monitoring postepow',
        'Wsparcie motywacyjne 24/7'
      ]
    },
    {
      name: 'Porada Dietetyczna',
      price: '100',
      description: 'Konsultacja zywieniowa i doradztwo w zakresie suplementacji',
      features: [
        'Analiza aktualnej diety',
        'Indywidualny plan zywieniowy',
        'Doradztwo suplementacyjne',
        'Wskazowki praktyczne',
        'Materialy edukacyjne'
      ]
    },
    {
      name: 'Prep Coaching Kulturystyczny',
      price: '500',
      duration: '1 miesiac',
      description: 'Specjalistyczne przygotowanie do zawodow kulturystycznych',
      features: [
        'Plan treningowy przedzawodowy',
        'Szczegolowa dieta przedzawodowa',
        'Coaching pozowania',
        'Wsparcie psychologiczne',
        'Monitoring skladu ciala'
      ]
    }
  ]

  const handleBookingOpen = () => {
    setIsBookingOpen(true)
  }

  return (
    <>
      <Head>
        <title>{t('pricing.title')}</title>
        <meta name="description" content={t('pricing.description')} />
        <meta name="keywords" content="trener personalny cena Warszawa, cennik trener personalny Warszawa, trening personalny Warszawa ceny, trener personalny Warszawa umow sie, trener personalny tanio Warszawa" />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <section className="bg-gray-900 text-white section-padding border-b border-gray-700">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {t('pricing.header.title')}
              </h1>
              <p className="text-xl font-light max-w-2xl mx-auto text-gray-200">
                {t('pricing.header.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Well Fitness Packages */}
        <section className="section-padding bg-gray-800">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('pricing.well.title')}
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {t('pricing.well.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {wellFitnessPackages.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative card ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''} flex flex-col h-full`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        NAJPOPULARNIEJSZY
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{t(`pricing.packages.${plan.id}.name`) || plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-200 font-light"> zl</span>
                    </div>
                    <p className="text-sm text-gray-300 font-light">{plan.duration}</p>
                    <p className="text-gray-200 font-light mt-2">{t(`pricing.packages.${plan.id}.description`) || plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 font-light text-sm">
                          {t(`pricing.packages.${plan.id}.features.${featureIndex + 1}`) || feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={handleBookingOpen}
                    className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'} mt-auto`}
                  >
                    Wybierz Pakiet
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pair and Group Training */}
        <section className="section-padding bg-gray-700">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('pricing.pair.title')}
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {t('pricing.pair.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pairGroupPackages.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-3">{service.name}</h3>
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-indigo-400">{service.price}</span>
                      <span className="text-gray-200 font-light"> zl</span>
                    </div>
                    <p className="text-sm text-gray-300 font-light">{service.duration}</p>
                    <p className="text-gray-200 font-light text-sm mt-2">{service.description}</p>
                  </div>
                  <ul className="space-y-2 flex-grow mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckIcon className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 font-light text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={handleBookingOpen}
                    className="w-full btn-secondary text-sm mt-auto"
                  >
                    Wybierz Pakiet
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="section-padding bg-gray-800">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('pricing.other.title')}
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {t('pricing.other.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherLocations.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-3">{service.name}</h3>
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-indigo-400">{service.price}</span>
                      <span className="text-gray-200 font-light"> zl</span>
                    </div>
                    <p className="text-sm text-gray-300 font-light">{service.duration}</p>
                    <p className="text-gray-200 font-light text-sm mt-2">{service.description}</p>
                  </div>
                  <ul className="space-y-2 flex-grow mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckIcon className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 font-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/kontakt"
                    className="w-full btn-secondary text-sm mt-auto inline-block text-center"
                  >
                    Skontaktuj sie ze mna
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-gray-700">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('pricing.additional.title')}
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {t('pricing.additional.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:scale-105 transition-transform duration-300 flex flex-col h-full"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-3">{service.name}</h3>
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-indigo-400">{service.price}</span>
                      <span className="text-gray-200 font-light"> zl</span>
                    </div>
                    {service.duration && (
                      <p className="text-sm text-gray-300 font-light">{service.duration}</p>
                    )}
                    <p className="text-gray-200 font-light text-sm mt-2">{service.description}</p>
                  </div>
                  <ul className="space-y-2 flex-grow mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckIcon className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 font-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/kontakt"
                    className="w-full btn-secondary text-sm mt-auto inline-block text-center"
                  >
                    Skontaktuj sie ze mna
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-gray-800">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  {t('pricing.benefits.title')}
                </h2>
                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5, 6].map((num, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      <span className="font-light text-gray-200">{t(`pricing.benefits.${num}`)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="card"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('pricing.contact.title') || 'Masz Pytania o Cennik?'}
                </h3>
                <p className="text-gray-200 font-light mb-6">
                  {t('pricing.contact.description') || 'Skontaktuj sie ze mna, aby omowic szczegoly pakietow treningowych i znalezc rozwiazanie idealne dla Ciebie.'}
                </p>
                <div className="space-y-3">
                  <p className="flex items-center space-x-2">
                    <span className="font-bold text-white">📞</span>
                    <span className="font-light text-gray-200">+48 123 456 789</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-bold text-white">📧</span>
                    <span className="font-light text-gray-200">kontakt@hypertraining.pl</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Booking Widget Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-700/50">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Umow Trening</h2>
              <button
                onClick={() => setIsBookingOpen(false)}
                className="p-2 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dziekuje za zainteresowanie!</h3>
              <p className="text-gray-300 font-light mb-6">Aby umowic trening, skontaktuj sie ze mna bezposrednio:</p>
              <div className="space-y-3">
                <a href="tel:+48123456789" className="btn-primary w-full">
                  📞 Zadzwon Teraz
                </a>
                <a href="mailto:kontakt@hypertraining.pl" className="btn-secondary w-full">
                  📧 Wyslij Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}