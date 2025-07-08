import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'

const CennikPage: React.FC = () => {
  // Placeholder pricing data - will be updated with actual Excel data
  const pricingPlans = [
    {
      name: 'Trening Pojedynczy',
      price: '150',
      duration: '60 min',
      description: 'Pojedyncza sesja treningowa',
      features: [
        'Indywidualny plan treningowy',
        'Profesjonalne wsparcie trenera',
        'Analiza techniki wykonania',
        'Porady żywieniowe'
      ],
      popular: false
    },
    {
      name: 'Pakiet 4 Treningi',
      price: '560',
      duration: '4 x 60 min',
      description: 'Pakiet 4 treningów personalnych',
      features: [
        'Wszystko z treningu pojedynczego',
        'Spersonalizowany plan żywieniowy',
        'Monitoring postępów',
        'Wsparcie między treningami',
        'Oszczędność 40 zł'
      ],
      popular: true
    },
    {
      name: 'Pakiet 8 Treningów',
      price: '1040',
      duration: '8 x 60 min',
      description: 'Pakiet 8 treningów personalnych',
      features: [
        'Wszystko z pakietu 4 treningi',
        'Szczegółowa analiza składu ciała',
        'Regularne konsultacje żywieniowe',
        'Plan treningowy na miesiąc',
        'Oszczędność 160 zł'
      ],
      popular: false
    },
    {
      name: 'Coaching Miesięczny',
      price: '800',
      duration: 'miesięcznie',
      description: 'Kompleksowy coaching fitness',
      features: [
        '8 treningów personalnych',
        'Codzienny kontakt z trenerem',
        'Aplikacja do monitoringu',
        'Spersonalizowane plany żywieniowe',
        'Wsparcie motywacyjne 24/7'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Head>
        <title>Cennik - HyperTraining | Trener Personalny Warszawa</title>
        <meta name="description" content="Sprawdź cennik treningów personalnych w Warszawie. Konkurencyjne ceny, różne pakiety treningowe dostosowane do Twoich potrzeb i budżetu." />
        <meta name="keywords" content="cennik trener personalny, ceny treningi personalne warszawa, koszt personal trainer" />
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
                Cennik Treningów
              </h1>
              <p className="text-xl font-light max-w-2xl mx-auto">
                Wybierz pakiet treningowy dostosowany do Twoich potrzeb i budżetu. 
                Wszystkie ceny zawierają profesjonalne wsparcie i indywidualne podejście.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative card ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        NAJPOPULARNIEJSZY
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-primary-600">{plan.price}</span>
                      <span className="text-gray-600 font-light"> zł</span>
                    </div>
                    <p className="text-sm text-gray-500 font-light">{plan.duration}</p>
                    <p className="text-gray-600 font-light mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                    Wybierz Pakiet
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Dlaczego Warto Zainwestować w Trening Personalny?
                </h2>
                <ul className="space-y-4">
                  {[
                    'Szybsze osiągnięcie celów fitness',
                    'Bezpieczne i efektywne ćwiczenia',
                    'Motywacja i wsparcie eksperta',
                    'Indywidualne podejście do każdego klienta',
                    'Profesjonalne doradztwo żywieniowe',
                    'Monitoring postępów i korygowanie planów'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-primary-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Masz Pytania o Cennik?
                </h3>
                <p className="text-gray-600 font-light mb-6">
                  Skontaktuj się ze mną, aby omówić szczegóły pakietów treningowych 
                  i znaleźć rozwiązanie idealne dla Ciebie.
                </p>
                <div className="space-y-3">
                  <p className="flex items-center space-x-2">
                    <span className="font-bold">📞</span>
                    <span className="font-light">+48 123 456 789</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="font-bold">📧</span>
                    <span className="font-light">kontakt@hypertraining.pl</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CennikPage