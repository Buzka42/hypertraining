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

      {/* Hero Section - Split Layout */}
      <section id="home" className="relative w-full overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="block">{t('home.hero.title')}</span>
                <span className="text-gradient block mt-2">{t('home.hero.subtitle')}</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                {t('home.hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/kontakt" className="btn-primary px-8 py-4 text-lg">
                  {t('home.hero.cta.primary')}
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/cennik" className="btn-secondary px-8 py-4 text-lg">
                  {t('home.hero.cta.secondary')}
                </Link>
              </div>

              <div className="flex gap-12 pt-8 opacity-80">
                <div>
                  <div className="text-4xl font-bold text-foreground">100%</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">{t('home.hero.satisfiedClients')}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground">14+</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">{t('home.hero.yearsExperience')}</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual/Interactive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block h-[600px]"
            >
              {/* Hero Image */}
              <div className="relative z-10 w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl group">
                <Image
                  src="/hero-fitness.jpg"
                  alt="Personal Trainer Warsaw"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Train With Me Section - Clean Grid */}
      <section id="why-train" className="py-24 w-full bg-white/2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">{t('home.why.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.why.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Expertise */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Image src="/icons/Hypertrophy.png" alt="Expertise" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.why.expertise.title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t('home.why.expertise.description')}</p>
            </motion.div>

            {/* Card 2: Plant Based */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Image src="/icons/PlantBasedDiet.png" alt="Plant Based" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.why.plant.title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t('home.why.plant.description')}</p>
            </motion.div>

            {/* Card 3: Holistic */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Image src="/icons/HolisticApproach.png" alt="Holistic Approach" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.why.holistic.title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t('home.why.holistic.description')}</p>
            </motion.div>

            {/* Card 4: Modern Tools */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Image src="/icons/Spreadsheet.png" alt="Tools" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.why.tools.title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t('home.why.tools.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maximize Your Gains: The Science Behind Why a Personal Trainer is Essential for RIR Accuracy */}
      <section id="rir-science" className="py-24 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('home.scientific.title')}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mx-auto">
              {t('home.scientific.description')}
            </p>
          </motion.div>

          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t('home.scientific.intro.title')}</h3>
              <p className="mb-6 text-muted-foreground">
                {t('home.scientific.intro.1')}
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{t('home.scientific.novice.title')}</h3>
                  <p className="mb-4 text-muted-foreground">{t('home.scientific.novice.1')}</p>
                  <p className="text-muted-foreground">{t('home.scientific.novice.2')}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{t('home.scientific.trainer.title')}</h3>
                  <p className="mb-4 text-muted-foreground">{t('home.scientific.trainer.1')}</p>
                  <p className="text-muted-foreground">{t('home.scientific.trainer.2')}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">{t('home.scientific.science.title')}</h3>
              <p className="mb-4 text-muted-foreground">{t('home.scientific.science.1')}</p>
              <p className="mb-8 text-muted-foreground">{t('home.scientific.science.2')}</p>

              {/* Graph Visualization */}
              <div className="my-8">
                <RIRGraphVisualization />
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                <p className="font-bold text-lg text-primary-foreground">
                  {t('home.scientific.conclusion')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="results" className="py-24 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('home.testimonials.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mx-auto">
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
                className="glass-card p-8 flex flex-col h-full hover:scale-105 transition-transform duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic flex-grow text-muted-foreground">&quot;{testimonial.text}&quot;</p>
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                  <p className="text-primary font-semibold">Client Result</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto text-center max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t('home.cta.section.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 mx-auto max-w-2xl">
              {t('home.cta.description')}
            </p>
            <Link href="/kontakt" className="btn-primary px-10 py-4 text-lg w-full sm:w-auto">
              {t('home.cta.section.button')}
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('home.services.section.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mx-auto">
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
                className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4">
                    <Image src={service.icon} alt={service.title} width={64} height={64} className="object-contain" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('home.services.title')}</span>
            </h2>
            <p className="text-xl text-muted-foreground mx-auto">
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
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
                <span className="text-lg font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}