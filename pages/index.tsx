import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { useLanguage } from '../contexts/LanguageContext'
import RIRGraphVisualization from '../components/RIRGraphVisualization'

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

      {/* Hero Section - Updated to match example site */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t('home.hero.title')}
              <span className="text-shimmer block mt-2">{t('home.hero.subtitle')}</span>
              <span className="block mt-2">{t('home.hero.location')}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              {t('home.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary">
                {t('home.hero.cta.primary')}
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/cennik" className="btn-secondary">
                {t('home.hero.cta.secondary')}
              </Link>
            </div>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-shimmer">100%</div>
                <div className="text-muted-foreground">{t('home.hero.satisfiedClients')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-shimmer">14+</div>
                <div className="text-muted-foreground">{t('home.hero.yearsExperience')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 bg-gradient-primary blur-2xl opacity-20 rounded-3xl" />
            <div className="relative w-full h-full min-h-[500px] rounded-3xl shadow-2xl overflow-hidden">
              <Image 
                src="/hero-fitness.jpg" 
                alt="Elite Training" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Train With Me Section */}
      <section id="why-train" className="py-24 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 animate-slide-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-shimmer">{t('home.why.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.why.subtitle')}
            </p>
            <p className="text-lg mt-6 text-muted-foreground max-w-3xl mx-auto">
              {t('home.why.description')}
            </p>
          </motion.div>

          {/* Expertise Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 animate-slide-up"
            >
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                {t('home.why.expertise.title')}
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('home.why.expertise.description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: t('home.why.hypertrophy.title'),
                  description: t('home.why.hypertrophy.description'),
                  icon: '/icons/Hypertrophy.png'
                },
                {
                  title: t('home.why.powerlifting.title'),
                  description: t('home.why.powerlifting.description'),
                  icon: '/icons/Powerlifting.png'
                },
                {
                  title: t('home.why.functional.title'),
                  description: t('home.why.functional.description'),
                  icon: '/icons/Bodybuilding.png'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 hover:scale-105 transition-transform duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 flex justify-center">
                    <Image src={item.icon} alt={item.title} width={64} height={64} className="object-contain" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground text-center">{item.title}</h4>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Plant-Powered Advantage */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 animate-slide-up"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-48 h-48 flex items-center justify-center">
                    <Image src="/icons/PlantBasedDiet.png" alt={t('home.why.plant.title')} width={128} height={128} className="object-contain" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {t('home.why.plant.title')}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {t('home.why.plant.description')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Holistic Approach */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 animate-slide-up"
            >
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                {t('home.why.holistic.title')}
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('home.why.holistic.description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: t('home.why.holistic.view'),
                  description: t('home.why.holistic.view.desc'),
                  icon: '/icons/HolisticApproach.png'
                },
                {
                  title: t('home.why.personalized'),
                  description: t('home.why.personalized.desc'),
                  icon: '/icons/PersonalizedApproach.png'
                },
                {
                  title: t('home.why.science'),
                  description: t('home.why.science.desc'),
                  icon: '/icons/ScienceBasedApproach.png'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 hover:scale-105 transition-transform duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 flex justify-center">
                    <Image src={item.icon} alt={item.title} width={64} height={64} className="object-contain" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground text-center">{item.title}</h4>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modern Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 animate-slide-up"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                {t('home.why.tools.title')}
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('home.why.tools.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: t('home.why.tools.spreadsheets'),
                  description: t('home.why.tools.spreadsheets.desc'),
                  icon: '/icons/Spreadsheet.png'
                },
                {
                  title: t('home.why.tools.calculators'),
                  description: t('home.why.tools.calculators.desc'),
                  icon: '/icons/Calculators.png'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-background/50 rounded-xl"
                >
                  <div className="mt-1">
                    <Image src={item.icon} alt={item.title} width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maximize Your Gains: The Science Behind Why a Personal Trainer is Essential for RIR Accuracy */}
      <section id="rir-science" className="py-24 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 animate-slide-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-shimmer">{t('home.scientific.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.scientific.description')}
            </p>
          </motion.div>

          <div className="glass-card p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-foreground">
              <h3 className="text-2xl font-bold mb-4">{t('home.scientific.intro.title')}</h3>
              <p className="mb-6">
                {t('home.scientific.intro.1')}
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">{t('home.scientific.novice.title')}</h3>
              <p className="mb-4">
                {t('home.scientific.novice.1')}
              </p>
              <p className="mb-4">
                {t('home.scientific.novice.2')}
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">{t('home.scientific.trainer.title')}</h3>
              <p className="mb-4">
                {t('home.scientific.trainer.1')}
              </p>
              <p className="mb-4">
                {t('home.scientific.trainer.2')}
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">{t('home.scientific.science.title')}</h3>
              <p className="mb-4">
                {t('home.scientific.science.1')}
              </p>
              <p className="mb-6">
                {t('home.scientific.science.2')}
              </p>

              {/* Graph Visualization */}
              <RIRGraphVisualization />

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <p className="text-center font-bold text-lg">
                  {t('home.scientific.conclusion')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="results" className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 animate-slide-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-shimmer">{t('home.testimonials.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.testimonials.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 animate-slide-up flex flex-col h-full"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic flex-grow">&quot;{testimonial.text}&quot;</p>
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-primary font-semibold">Client Result</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto animate-slide-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-shimmer">{t('home.cta.section.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              {t('home.cta.description')}
            </p>
            <Link href="/kontakt" className="inline-flex items-center btn-primary text-lg">
              {t('home.cta.section.button')}
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Moved to bottom as requested */}
      <section id="services" className="py-24 px-4 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 animate-slide-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-shimmer">{t('home.services.section.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.services.section.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t('home.services.1.title'),
                description: t('home.services.1.description'),
                icon: '/icons/FemaleTraining.png'
              },
              {
                title: t('home.services.2.title'),
                description: t('home.services.2.description'),
                icon: '/icons/PrepCoaching.png'
              },
              {
                title: t('home.services.3.title'),
                description: t('home.services.3.description'),
                icon: '/icons/StrengthTrainingAndFatLoss.png'
              },
              {
                title: t('home.services.4.title'),
                description: t('home.services.4.description'),
                icon: '/icons/Nutrition.png'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <Image src={service.icon} alt={service.title} width={64} height={64} className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Moved to bottom as requested */}
      <section id="features" className="py-24 px-4 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 animate-slide-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-shimmer">{t('home.services.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.services.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0"></div>
                  <span className="text-lg font-medium text-foreground">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}