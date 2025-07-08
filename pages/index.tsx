import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid'

const HomePage: React.FC = () => {
  const features = [
    'Spersonalizowane plany treningowe',
    'Profesjonalne doradztwo żywieniowe',
    'Monitoring postępów',
    'Elastyczne godziny treningów',
    'Nowoczesny sprzęt fitness',
    'Doświadczony trener personalny'
  ]

  const testimonials = [
    {
      name: 'Anna K.',
      text: 'Dzięki treningom z Patrykiem osiągnęłam swoje cele fitness w rekordowym czasie!',
      rating: 5
    },
    {
      name: 'Michał S.',
      text: 'Profesjonalne podejście i indywidualne treningi dały niesamowite rezultaty.',
      rating: 5
    },
    {
      name: 'Katarzyna M.',
      text: 'Najlepszy trener personalny w Warszawie! Polecam każdemu.',
      rating: 5
    }
  ]

  return (
    <>
      <Head>
        <title>HyperTraining - Trener Personalny Warszawa | Patryk Dębowski</title>
        <meta name="description" content="Profesjonalny trener personalny w Warszawie. Indywidualne treningi fitness, plany żywieniowe i coaching. Osiągnij swoje cele z HyperTraining!" />
        <meta name="keywords" content="trener personalny warszawa, personal trainer, fitness, siłownia, trening indywidualny, coaching, patryk dębowski" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Osiągnij Swoje
                <span className="text-accent-500"> Cele Fitness</span>
              </h1>
              <p className="text-xl font-light mb-8 text-gray-100">
                Profesjonalny trener personalny w Warszawie. Indywidualne treningi, 
                spersonalizowane plany żywieniowe i kompleksowy coaching fitness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-secondary">
                  Skontaktuj się
                </Link>
                <Link href="/cennik" className="btn-primary bg-accent-500 hover:bg-accent-600">
                  Zobacz Cennik
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Dlaczego HyperTraining?</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kompleksowe Usługi Fitness
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Oferuję pełen zakres usług treningowych dostosowanych do Twoich indywidualnych potrzeb i celów.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trening Personalny',
                description: 'Indywidualne sesje treningowe dostosowane do Twoich celów i możliwości.',
                icon: '💪'
              },
              {
                title: 'Plany Żywieniowe',
                description: 'Spersonalizowane diety wspierające Twoje cele fitness i zdrowie.',
                icon: '🥗'
              },
              {
                title: 'Coaching Online',
                description: 'Zdalne wsparcie i monitoring postępów przez aplikacje mobilne.',
                icon: '📱'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card text-center hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Opinie Klientów
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Zobacz, co mówią o mnie zadowoleni klienci
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 font-light mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Rozpocznij Swoją Transformację Już Dziś!
            </h2>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              Nie czekaj dłużej. Skontaktuj się ze mną i rozpocznij swoją podróż do lepszej wersji siebie.
            </p>
            <Link href="/kontakt" className="btn-secondary">
              Umów Bezpłatną Konsultację
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage