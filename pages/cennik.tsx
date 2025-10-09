import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../contexts/LanguageContext'
import { useBooking } from '../contexts/BookingContext'
import PageHeader from '../components/PageHeader'

export default function CennikPage() {
  const { t, language } = useLanguage()
  const { setIsBookingOpen } = useBooking()

  const wellFitnessPackages = [
    {
      id: '1',
      name: t('pricing.packages.1.name'),
      price: language === 'pl' ? '150' : '150',
      duration: language === 'pl' ? 'Pojedyncza sesja' : 'Single session',
      description: t('pricing.packages.1.description'),
      features: [
        t('pricing.packages.1.features.1'),
        t('pricing.packages.1.features.2'),
        t('pricing.packages.1.features.3'),
        t('pricing.packages.1.features.4'),
        t('pricing.packages.1.features.5')
      ],
      popular: false
    },
    {
      id: '4',
      name: t('pricing.packages.4.name'),
      price: language === 'pl' ? '520' : '520',
      duration: language === 'pl' ? '130 zl za trening' : '130 PLN per session',
      description: t('pricing.packages.4.description'),
      features: [
        t('pricing.packages.4.features.1'),
        t('pricing.packages.4.features.2'),
        t('pricing.packages.4.features.3'),
        t('pricing.packages.4.features.4'),
        t('pricing.packages.4.features.5')
      ],
      popular: false
    },
    {
      id: '8',
      name: t('pricing.packages.8.name'),
      price: language === 'pl' ? '960' : '960',
      duration: language === 'pl' ? '120 zl za trening' : '120 PLN per session',
      description: t('pricing.packages.8.description'),
      features: [
        t('pricing.packages.8.features.1'),
        t('pricing.packages.8.features.2'),
        t('pricing.packages.8.features.3'),
        t('pricing.packages.8.features.4'),
        t('pricing.packages.8.features.5')
      ],
      popular: true
    },
    {
      id: '12',
      name: t('pricing.packages.12.name'),
      price: language === 'pl' ? '1320' : '1320',
      duration: language === 'pl' ? '110 zl za trening' : '110 PLN per session',
      description: t('pricing.packages.12.description'),
      features: [
        t('pricing.packages.12.features.1'),
        t('pricing.packages.12.features.2'),
        t('pricing.packages.12.features.3'),
        t('pricing.packages.12.features.4'),
        t('pricing.packages.12.features.5')
      ],
      popular: false
    },
    {
      id: '16',
      name: t('pricing.packages.16.name'),
      price: language === 'pl' ? '1680' : '1680',
      duration: language === 'pl' ? '105 zl za trening' : '105 PLN per session',
      description: t('pricing.packages.16.description'),
      features: [
        t('pricing.packages.16.features.1'),
        t('pricing.packages.16.features.2'),
        t('pricing.packages.16.features.3'),
        t('pricing.packages.16.features.4'),
        t('pricing.packages.16.features.5')
      ],
      popular: false
    },
    {
      id: '25',
      name: t('pricing.packages.25.name'),
      price: language === 'pl' ? '2500' : '2500',
      duration: language === 'pl' ? '100 zl za trening' : '100 PLN per session',
      description: t('pricing.packages.25.description'),
      features: [
        t('pricing.packages.25.features.1'),
        t('pricing.packages.25.features.2'),
        t('pricing.packages.25.features.3'),
        t('pricing.packages.25.features.4'),
        t('pricing.packages.25.features.5')
      ],
      popular: false
    }
  ]

  const pairGroupPackages = [
    {
      name: language === 'pl' ? '1 Trening w Parze' : '1 Pair Training',
      price: language === 'pl' ? '200' : '200',
      duration: language === 'pl' ? 'Pojedyncza sesja dla 2 osob' : 'Single session for 2 people',
      description: language === 'pl' ? 'Trenuj razem z partnerem lub przyjacielem' : 'Train together with a partner or friend',
      features: [
        language === 'pl' ? 'Trening dla 2 osob - 60 min' : 'Training for 2 people - 60 min',
        language === 'pl' ? 'Cwiczenia dostosowane do obu osob' : 'Exercises adapted to both people',
        language === 'pl' ? 'Motywacja w parze' : 'Motivation as a pair',
        language === 'pl' ? 'Wspolne osiaganie celow' : 'Achieving goals together',
        language === 'pl' ? 'Podstawowe wskazowki zywieniowe' : 'Basic nutritional guidance'
      ]
    },
    {
      name: language === 'pl' ? '4 Treningi w Parze' : '4 Pair Trainings',
      price: language === 'pl' ? '720' : '720',
      duration: language === 'pl' ? '180 zl za trening' : '180 PLN per session',
      description: language === 'pl' ? 'Pakiet startowy dla par' : 'Starter package for pairs',
      features: [
        language === 'pl' ? '4 treningi w parze po 60 min' : '4 pair trainings of 60 min each',
        language === 'pl' ? 'Plan treningowy dla obu osob' : 'Training plan for both people',
        language === 'pl' ? 'Wspolne cele i motywacja' : 'Shared goals and motivation',
        language === 'pl' ? 'Monitoring postepow pary' : 'Pair progress monitoring',
        language === 'pl' ? 'Wsparcie miedzy treningami' : 'Support between trainings'
      ]
    },
    {
      name: language === 'pl' ? '8 Treningow w Parze' : '8 Pair Trainings',
      price: language === 'pl' ? '1280' : '1280',
      duration: language === 'pl' ? '160 zl za trening' : '160 PLN per session',
      description: language === 'pl' ? 'Rozszerzony pakiet dla par' : 'Extended package for pairs',
      features: [
        language === 'pl' ? '8 treningow w parze po 60 min' : '8 pair trainings of 60 min each',
        language === 'pl' ? 'Szczegolowy plan treningowy' : 'Detailed training plan',
        language === 'pl' ? 'Indywidualne podejscie do kazdej osoby' : 'Individual approach to each person',
        language === 'pl' ? 'Regularne pomiary postepow' : 'Regular progress measurements',
        language === 'pl' ? 'Plan zywieniowy dla obu osob' : 'Nutrition plan for both people'
      ]
    },
    {
      name: language === 'pl' ? '1 Trening Grupowy' : '1 Group Training',
      price: language === 'pl' ? '250' : '250',
      duration: language === 'pl' ? 'Sesja dla 2-6 osob' : 'Session for 2-6 people',
      description: language === 'pl' ? 'Trening w malej grupie znajomych' : 'Training in a small group of friends',
      features: [
        language === 'pl' ? 'Trening grupowy 2-6 osob - 60 min' : 'Group training 2-6 people - 60 min',
        language === 'pl' ? 'Cwiczenia dostosowane do grupy' : 'Exercises adapted to the group',
        language === 'pl' ? 'Motywacja grupowa' : 'Group motivation',
        language === 'pl' ? 'Wspolna zabawa i cele' : 'Shared fun and goals',
        language === 'pl' ? 'Podstawowe wskazowki zywieniowe' : 'Basic nutritional guidance'
      ]
    }
  ]

  const otherLocations = [
    {
      name: language === 'pl' ? 'Trening Kalisteniczny' : 'Calisthenics Training',
      price: language === 'pl' ? '100' : '100',
      duration: language === 'pl' ? 'Silownia plenerowa' : 'Outdoor gym',
      description: language === 'pl' ? 'Trening na swiezym powietrzu z wykorzystaniem wlasnej masy ciala' : 'Training in the fresh air using your own body weight',
      features: [
        language === 'pl' ? 'Trening na silowni plenerowej - 60 min' : 'Training at outdoor gym - 60 min',
        language === 'pl' ? 'Cwiczenia z wlasna masa ciala' : 'Bodyweight exercises',
        language === 'pl' ? 'Trening funkcjonalny' : 'Functional training',
        language === 'pl' ? 'Podstawowe wskazowki zywieniowe' : 'Basic nutritional guidance',
        language === 'pl' ? 'Dostosowanie do poziomu zaawansowania' : 'Adaptation to skill level'
      ]
    },
    {
      name: language === 'pl' ? 'Trening Online' : 'Online Training',
      price: language === 'pl' ? '100' : '100',
      duration: language === 'pl' ? 'Sesja zdalna' : 'Remote session',
      description: language === 'pl' ? 'Indywidualny trening prowadzony zdalnie przez video' : 'Individual training conducted remotely via video',
      features: [
        language === 'pl' ? 'Trening online przez video - 60 min' : 'Online training via video - 60 min',
        language === 'pl' ? 'Indywidualne podejscie' : 'Individual approach',
        language === 'pl' ? 'Trening w domu lub wybranym miejscu' : 'Training at home or chosen location',
        language === 'pl' ? 'Wskazowki dotyczace sprzetu' : 'Equipment guidance',
        language === 'pl' ? 'Monitoring techniki wykonania' : 'Technique execution monitoring'
      ]
    },
    {
      name: language === 'pl' ? '8 Treningow - Inna Silownia' : '8 Trainings - Different Gym',
      price: language === 'pl' ? '1360' : '1360',
      duration: language === 'pl' ? '170 zl za trening' : '170 PLN per session',
      description: language === 'pl' ? 'Pakiet treningow w silowni innej niz Well Fitness Goclaw' : 'Training package at a gym other than Well Fitness Goclaw',
      features: [
        language === 'pl' ? '8 treningow personalnych po 60 min' : '8 personal trainings of 60 min each',
        language === 'pl' ? 'Trening w wybranej przez Ciebie silowni' : 'Training at your chosen gym',
        language === 'pl' ? 'Szczegolowy plan treningowy' : 'Detailed training plan',
        language === 'pl' ? 'Dostosowanie do sprzetu silowni' : 'Adaptation to gym equipment',
        language === 'pl' ? 'Regularne pomiary postepow' : 'Regular progress measurements'
      ]
    }
  ]

  const additionalServices = [
    {
      name: language === 'pl' ? 'Plan Treningowy - Poczatkujacy' : 'Training Plan - Beginner',
      price: language === 'pl' ? '100' : '100',
      description: language === 'pl' ? 'Indywidualny plan treningowy dla osob rozpoczynajacych przygode z fitness' : 'Individual training plan for people starting their fitness journey',
      features: [
        language === 'pl' ? 'Plan na 4-6 tygodni' : 'Plan for 4-6 weeks',
        language === 'pl' ? 'Szczegolowe opisy cwiczen' : 'Detailed exercise descriptions',
        language === 'pl' ? 'Progresja trudnosci' : 'Difficulty progression',
        language === 'pl' ? 'Podstawowe wskazowki zywieniowe' : 'Basic nutritional guidance',
        language === 'pl' ? 'Wsparcie przez telefon/email' : 'Support via phone/email'
      ]
    },
    {
      name: language === 'pl' ? 'Plan Treningowy - Sredniozaawansowany' : 'Training Plan - Intermediate',
      price: language === 'pl' ? '150' : '150',
      description: language === 'pl' ? 'Plan dla osob z doswiadczeniem treningowym' : 'Plan for people with training experience',
      features: [
        language === 'pl' ? 'Plan na 6-8 tygodni' : 'Plan for 6-8 weeks',
        language === 'pl' ? 'Zaawansowane techniki treningowe' : 'Advanced training techniques',
        language === 'pl' ? 'Periodyzacja obciazen' : 'Load periodization',
        language === 'pl' ? 'Szczegolowe wskazowki zywieniowe' : 'Detailed nutritional guidance',
        language === 'pl' ? 'Regularne konsultacje online' : 'Regular online consultations'
      ]
    },
    {
      name: language === 'pl' ? 'Plan Treningowy - Zaawansowany' : 'Training Plan - Advanced',
      price: language === 'pl' ? '300' : '300',
      description: language === 'pl' ? 'Specjalistyczny plan kulturystyczny, trojbojowy lub sportowy' : 'Specialized bodybuilding, powerlifting or sports plan',
      features: [
        language === 'pl' ? 'Plan na 8-12 tygodni' : 'Plan for 8-12 weeks',
        language === 'pl' ? 'Specjalizacja w wybranej dyscyplinie' : 'Specialization in chosen discipline',
        language === 'pl' ? 'Zaawansowana periodyzacja' : 'Advanced periodization',
        language === 'pl' ? 'Kompleksowy plan zywieniowy' : 'Comprehensive nutrition plan',
        language === 'pl' ? 'Regularne konsultacje i korekty' : 'Regular consultations and corrections'
      ]
    },
    {
      name: language === 'pl' ? 'Coaching Online' : 'Online Coaching',
      price: language === 'pl' ? '150' : '150',
      duration: language === 'pl' ? '1 miesiac' : '1 month',
      description: language === 'pl' ? 'Miesieczne wsparcie online z planem treningowym i zywieniowym' : 'Monthly online support with training and nutrition plan',
      features: [
        language === 'pl' ? 'Indywidualny plan treningowy' : 'Individual training plan',
        language === 'pl' ? 'Plan zywieniowy' : 'Nutrition plan',
        language === 'pl' ? 'Cotygodniowe konsultacje online' : 'Weekly online consultations',
        language === 'pl' ? 'Monitoring postepow' : 'Progress monitoring',
        language === 'pl' ? 'Wsparcie motywacyjne 24/7' : '24/7 motivational support'
      ]
    },
    {
      name: language === 'pl' ? 'Porada Dietetyczna' : 'Nutritional Advice',
      price: language === 'pl' ? '100' : '100',
      description: language === 'pl' ? 'Konsultacja zywieniowa i doradztwo w zakresie suplementacji' : 'Nutritional consultation and supplementation advice',
      features: [
        language === 'pl' ? 'Analiza aktualnej diety' : 'Current diet analysis',
        language === 'pl' ? 'Indywidualny plan zywieniowy' : 'Individual nutrition plan',
        language === 'pl' ? 'Doradztwo suplementacyjne' : 'Supplementation advice',
        language === 'pl' ? 'Wskazowki praktyczne' : 'Practical tips',
        language === 'pl' ? 'Materialy edukacyjne' : 'Educational materials'
      ]
    },
    {
      name: language === 'pl' ? 'Prep Coaching Kulturystyczny' : 'Bodybuilding Prep Coaching',
      price: language === 'pl' ? '500' : '500',
      duration: language === 'pl' ? '1 miesiac' : '1 month',
      description: language === 'pl' ? 'Specjalistyczne przygotowanie do zawodow kulturystycznych' : 'Specialized preparation for bodybuilding competitions',
      features: [
        language === 'pl' ? 'Plan treningowy przedzawodowy' : 'Pre-competition training plan',
        language === 'pl' ? 'Szczegolowa dieta przedzawodowa' : 'Detailed pre-competition diet',
        language === 'pl' ? 'Coaching pozowania' : 'Posing coaching',
        language === 'pl' ? 'Wsparcie psychologiczne' : 'Psychological support',
        language === 'pl' ? 'Monitoring skladu ciala' : 'Body composition monitoring'
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

      <div className="min-h-screen bg-background">
        {/* Header */}
        <PageHeader 
          title={t('pricing.header.title')}
          description={t('pricing.header.description')}
        />

        {/* Well Fitness Packages */}
        <section className="py-24 px-4 bg-card">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('pricing.well.title')}
              </h2>
              <p className="text-xl text-muted-foreground mx-auto">
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
                  className={`relative glass-card p-8 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''} flex flex-col h-full`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                        {language === 'pl' ? 'NAJPOPULARNIEJSZY' : 'MOST POPULAR'}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground"> {language === 'pl' ? 'zl' : 'PLN'}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.duration}</p>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={handleBookingOpen}
                    className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'} mt-auto`}
                  >
                    {t('common.choose')}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pair and Group Training */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('pricing.pair.title')}
              </h2>
              <p className="text-xl text-muted-foreground mx-auto">
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
                  className="glass-card p-6 flex flex-col h-full"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.name}</h3>
                    <div className="mb-1">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="text-muted-foreground"> {language === 'pl' ? 'zl' : 'PLN'}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={handleBookingOpen}
                    className="btn-secondary w-full text-sm"
                  >
                    {t('common.choose')}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="py-24 px-4 bg-card">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('pricing.other.title')}
              </h2>
              <p className="text-xl text-muted-foreground mx-auto">
                {t('pricing.other.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherLocations.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 flex flex-col h-full"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.name}</h3>
                    <div className="mb-1">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="text-muted-foreground"> {language === 'pl' ? 'zl' : 'PLN'}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={handleBookingOpen}
                    className="btn-secondary w-full text-sm"
                  >
                    {t('common.choose')}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('pricing.additional.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  className="glass-card p-6 flex flex-col h-full"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">{service.name}</h3>
                    <div className="mb-1">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="text-muted-foreground"> {language === 'pl' ? 'zl' : 'PLN'}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={handleBookingOpen}
                    className="btn-secondary w-full text-sm"
                  >
                    {t('common.choose')}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-card">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('pricing.benefits.title')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                t('pricing.benefits.1'),
                t('pricing.benefits.2'),
                t('pricing.benefits.3'),
                t('pricing.benefits.4'),
                t('pricing.benefits.5'),
                t('pricing.benefits.6')
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 flex items-start space-x-3"
                >
                  <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-12"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t('pricing.contact.title')}
              </h3>
              <p className="text-muted-foreground mb-6 mx-auto">
                {t('pricing.contact.description')}
              </p>
              <button 
                onClick={handleBookingOpen}
                className="btn-primary inline-flex items-center"
              >
                {t('common.contact')}
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}