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

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const ContactPage: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    // Here you would integrate with your email service
    console.log('Contact form submitted:', data)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Dziękuję za wiadomość! Odpowiem tak szybko, jak to możliwe.')
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.')
    }
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      content: '+48 123 456 789',
      link: 'tel:+48123456789'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'kontakt@hypertraining.pl',
      link: 'mailto:kontakt@hypertraining.pl'
    },
    {
      icon: MapPinIcon,
      title: 'Adres',
      content: 'gen. Augusta Emila Fieldorfa Nila 41, 04-125 Warszawa',
      link: 'https://maps.google.com/?q=gen.+Augusta+Emila+Fieldorfa+Nila+41,+04-125+Warszawa'
    },
    {
      icon: ClockIcon,
      title: 'Godziny',
      content: 'Pon-Sob: 8:00-20:00, Niedz: Zamknięte',
      link: null
    }
  ]

  return (
    <>
      <Head>
        <title>Kontakt - HyperTraining | Patryk Dębowski</title>
        <meta name="description" content="Skontaktuj się z Patrykiem Dębowskim - trenerem personalnym w Warszawie. Telefon, email, adres siłowni i formularz kontaktowy." />
        <meta name="keywords" content="kontakt trener personalny warszawa, telefon, email, adres siłownia" />
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
                Kontakt
              </h1>
              <p className="text-xl font-light max-w-2xl mx-auto">
                Skontaktuj się ze mną, aby umówić bezpłatną konsultację lub zadać pytania 
                dotyczące treningów personalnych
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-600 font-light hover:text-primary-600 transition-colors"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 font-light">{info.content}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Wyślij Wiadomość
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Imię i Nazwisko *
                        </label>
                        <input
                          type="text"
                          {...register('name', { required: 'Imię i nazwisko jest wymagane' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light"
                          placeholder="Twoje imię i nazwisko"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1 font-light">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light"
                          placeholder="+48 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email jest wymagany',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Nieprawidłowy format email'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light"
                        placeholder="twoj@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 font-light">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Temat
                      </label>
                      <select
                        {...register('subject')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light"
                      >
                        <option value="">Wybierz temat</option>
                        <option value="consultation">Bezpłatna konsultacja</option>
                        <option value="pricing">Pytania o cennik</option>
                        <option value="training">Informacje o treningach</option>
                        <option value="nutrition">Plany żywieniowe</option>
                        <option value="other">Inne</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Wiadomość *
                      </label>
                      <textarea
                        {...register('message', { required: 'Wiadomość jest wymagana' })}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light resize-none"
                        placeholder="Opisz swoje cele, doświadczenie treningowe lub zadaj pytanie..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1 font-light">{errors.message.message}</p>
                      )}
                    </div>

                    <button type="submit" className="w-full btn-primary">
                      Wyślij Wiadomość
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="card p-0 overflow-hidden h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.8234567890123!2d21.0123456789!3d52.2123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEyJzQ0LjQiTiAyMcKwMDAnNDQuNCJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
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

        {/* Quick Contact */}
        <section className="section-padding bg-primary-600 text-white">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Potrzebujesz Szybkiej Odpowiedzi?
              </h2>
              <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
                Zadzwoń lub napisz SMS - odpowiem w ciągu kilku godzin!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+48123456789" className="btn-secondary">
                  📞 +48 123 456 789
                </a>
                <a href="sms:+48123456789" className="btn-primary bg-accent-500 hover:bg-accent-600">
                  💬 Wyślij SMS
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage