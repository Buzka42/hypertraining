import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline'
import { useLanguage } from '../contexts/LanguageContext'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()
  const { t } = useLanguage()

  const onSubmit = async (data: ContactFormData) => {
    // Here you would integrate with your email service
    console.log('Contact form submitted:', data)
    
    // For now, just show an alert
    alert(t('contact.success.message'))
    reset()
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: t('common.phone'),
      content: '+48 123 456 789',
      link: 'tel:+48123456789'
    },
    {
      icon: EnvelopeIcon,
      title: t('common.email'),
      content: 'kontakt@hypertraining.pl',
      link: 'mailto:kontakt@hypertraining.pl'
    },
    {
      icon: MapPinIcon,
      title: t('common.address'),
      content: 'gen. Augusta Emila Fieldorfa Nila 41, 04-125 Warszawa',
      link: 'https://maps.google.com/?q=gen.+Augusta+Emila+Fieldorfa+Nila+41,+04-125+Warszawa'
    },
    {
      icon: ClockIcon,
      title: t('common.hours'),
      content: t('contact.hours.text') || 'Pon-Pt: 6:00-22:00, Sob-Nie: 8:00-20:00',
      link: null
    }
  ]

  return (
    <>
      <Head>
        <title>{t('contact.title')}</title>
        <meta name="description" content={t('contact.description')} />
        <meta name="keywords" content="trener personalny Warszawa umów się, kontakt trener personalny Warszawa, trener personalny blisko mnie, gdzie odbywają się treningi personalne, trener personalny Warszawa telefon, umówić się na trening personalny Warszawa" />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-indigo-900/20"></div>
          
          <div className="relative z-10 container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                <span className="gradient-text">{t('contact.header.title') || 'Kontakt'}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                {t('contact.header.description') || 'Skontaktuj się ze mną i rozpocznij swoją przygodę z treningiem personalnym'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="relative section-padding">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
          
          <div className="relative z-10 container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-300 font-light hover:text-indigo-400 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-300 font-light">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative section-padding">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
          
          <div className="relative z-10 container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  {t('contact.form.title')}
                </h2>
                <p className="text-gray-200 font-light mb-8">
                  {t('contact.form.description') || 'Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin'}
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.name') || 'Imię i nazwisko'} *
                      </label>
                      <input
                        {...register('name', { required: t('contact.form.name.required') || 'To pole jest wymagane' })}
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-light text-white placeholder-gray-400"
                        placeholder={t('contact.form.name.placeholder') || 'Twoje imię i nazwisko'}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.email') || 'Email'} *
                      </label>
                      <input
                        {...register('email', { 
                          required: t('contact.form.email.required') || 'To pole jest wymagane',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: t('contact.form.email.invalid') || 'Nieprawidłowy format email'
                          }
                        })}
                        type="email"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-light text-white placeholder-gray-400"
                        placeholder={t('contact.form.email.placeholder') || 'twoj@email.com'}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.phone') || 'Telefon'}
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-light text-white placeholder-gray-400"
                        placeholder={t('contact.form.phone.placeholder') || '+48 123 456 789'}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.subject') || 'Temat'}
                      </label>
                      <select
                        {...register('subject', { required: t('contact.form.subject.required') || 'Wybierz temat' })}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-light text-white"
                      >
                        <option value="">{t('contact.form.subject.placeholder') || 'Wybierz temat'}</option>
                        <option value="consultation">{t('contact.form.subject.consultation') || 'Bezpłatna konsultacja'}</option>
                        <option value="training">{t('contact.form.subject.training') || 'Trening personalny'}</option>
                        <option value="online">{t('contact.form.subject.online') || 'Trening online'}</option>
                        <option value="nutrition">{t('contact.form.subject.nutrition') || 'Plan żywieniowy'}</option>
                        <option value="other">{t('contact.form.subject.other') || 'Inne'}</option>
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.message') || 'Wiadomość'} *
                    </label>
                    <textarea
                      {...register('message', { required: t('contact.form.message.required') || 'To pole jest wymagane' })}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-light text-white placeholder-gray-400"
                      placeholder={t('contact.form.message.placeholder') || 'Opisz swoje cele treningowe i oczekiwania...'}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    {t('contact.form.send') || 'Wyślij Wiadomość'}
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:pl-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{t('contact.location.title') || 'Lokalizacja'}</h3>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.123456789!2d21.0827!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sgen.%20Augusta%20Emila%20Fieldorfa%20Nila%2041%2C%2004-125%20Warszawa!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokalizacja HyperTraining"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="relative section-padding">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-indigo-900/10"></div>
          
          <div className="relative z-10 container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {t('contact.quick.title') || 'Potrzebujesz'} <span className="gradient-text">{t('contact.quick.title2') || 'Szybkiej Odpowiedzi'}?</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                {t('contact.quick.description') || 'Zadzwoń lub napisz SMS - odpowiem w ciągu kilku minut'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48123456789" className="btn-primary">
                  📞 {t('faq.cta.call') || 'Zadzwoń Teraz'}
                </a>
                <a href="mailto:kontakt@hypertraining.pl" className="btn-secondary">
                  📧 {t('faq.cta.email') || 'Wyślij Email'}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}