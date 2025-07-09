import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()
  const features = [
    t('home.features.1'),
    t('home.features.2'), 
    t('home.features.3'),
    t('home.features.4'),
    t('home.features.5'),
    t('home.features.6')
  ]

  const testimonials = [
    {
      name: 'Anna K.',
      text: 'Dzięki profesjonalnemu podejściu Patryka osiągnęłam swoje cele w bardzo krótkim czasie. Polecam każdemu!',
      rating: 5
    },
    {
      name: 'Michał S.',
      text: 'Najlepszy trener w Warszawie! Indywidualne podejście i skuteczne metody treningowe.',
      rating: 5
    },
    {
      name: 'Katarzyna M.',
      text: 'Profesjonalizm na najwyższym poziomie. Treningi są efektywne i dostosowane do moich potrzeb.',
      rating: 5
    }
  ]

  return (
    <>
      <Head>
        <title>{t('home.title')}</title>
        <meta name="description" content={t('home.description')} />
        <meta name="keywords" content="trener personalny Warszawa, trening personalny Warszawa, trener personalny dla kobiet Warszawa, trener personalny opinie Warszawa, trener personalny fitness Warszawa, trener personalny Warszawa dla początkujących, trener personalny Warszawa redukcja wagi, trener personalny Warszawa trening indywidualny, trener personalny Warszawa plany treningowe, trener personalny Warszawa trening siłowy" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-indigo-500/10"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-gray-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container-max text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              {t('home.hero.title')} <span className="gradient-text">{t('home.hero.subtitle')}</span>
              <br />
              {t('home.hero.location') || 'w Warszawie'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kontakt" className="btn-primary group">
                {t('home.hero.cta.primary')}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/cennik" className="btn-secondary">
                {t('home.hero.cta.secondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('home.services.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card group hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full flex-shrink-0"></div>
                  <span className="text-lg font-medium text-white">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-700">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('home.services.section.title').split(' ')[0]} <span className="gradient-text">{t('home.services.section.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('home.services.section.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('home.services.1.title'),
                description: t('home.services.1.description'),
                icon: '🏋️‍♀️',
                gradient: 'from-indigo-100 to-indigo-200'
              },
              {
                title: t('home.services.2.title'),
                description: t('home.services.2.description'),
                icon: '💻',
                gradient: 'from-gray-100 to-gray-200'
              },
              {
                title: t('home.services.3.title'),
                description: t('home.services.3.description'),
                icon: '💪',
                gradient: 'from-gray-100 to-accent-50'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card text-center group hover:scale-105"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl border border-indigo-400/30`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="gradient-text">{t('home.testimonials.title')}</span>
            </h2>
            <p className="text-xl text-gray-200">
              {t('home.testimonials.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card group hover:scale-105"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-white">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-700 to-gray-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              {t('home.cta.section.title').split(' ').slice(0, 2).join(' ')} <span className="gradient-text">{t('home.cta.section.title').split(' ').slice(2).join(' ')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
              {t('home.cta.description')}
            </p>
            <Link href="/kontakt" className="btn-primary group text-lg">
              {t('home.cta.section.button')}
              <ArrowRightIcon className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}