import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import { useBooking } from '../contexts/BookingContext'
import { useLanguage } from '../contexts/LanguageContext'

interface BookingFormData {
  name: string
  phone: string
  days: string[]
  times: string[]
}

const BookingWidget: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { isBookingOpen, setIsBookingOpen } = useBooking()
  const { t, language } = useLanguage()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingFormData>()

  const daysOfWeek = language === 'pl' 
    ? ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const timeSlots = language === 'pl'
    ? ['8:00-12:00', '12:00-16:00', '16:00-20:00']
    : ['8:00-12:00', '12:00-16:00', '16:00-20:00']

  const onSubmit = async (data: BookingFormData) => {
    // Here you would integrate with EmailJS or your preferred email service
    console.log('Booking request:', data)
    
    // Simulate email sending
    try {
      // Replace with actual EmailJS implementation
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setIsBookingOpen(false)
        reset()
      }, 3000)
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 glass-card text-primary-foreground px-6 py-4 rounded-full shadow-2xl z-50 flex items-center space-x-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsBookingOpen(true)}
      >
        <CalendarIcon className="w-5 h-5" />
        <span className="font-semibold text-sm">{t('common.book')}</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsBookingOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card/95 backdrop-blur-md rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-foreground">{t('booking.title')}</h2>
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="p-2 hover:bg-card/50 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('booking.success.title')}</h3>
                  <p className="text-muted-foreground font-light">{t('booking.success.description')}</p>
                  <div className="mt-4">
                    <p className="text-muted-foreground font-light">
                      {t('booking.call')}: <a href="tel:+48123456789" className="text-primary hover:underline">+48 123 456 789</a>
                    </p>
                    <p className="text-muted-foreground font-light mt-2">
                      {t('booking.email')}: <a href="mailto:contact@hypertraining.pl" className="text-primary hover:underline">contact@hypertraining.pl</a>
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-muted-foreground mb-3">
                      {language === 'pl' ? 'Imię i Nazwisko *' : 'Name and Surname *'}
                    </label>
                    <input
                      type="text"
                      {...register('name', { 
                        required: language === 'pl' 
                          ? 'Imię i nazwisko jest wymagane' 
                          : 'Name and surname is required' 
                      })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent font-light text-foreground placeholder-muted-foreground transition-all"
                      placeholder={language === 'pl' ? 'Wprowadź swoje imię i nazwisko' : 'Enter your name and surname'}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2 font-light">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-muted-foreground mb-3">
                      {language === 'pl' ? 'Numer Telefonu *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { 
                        required: language === 'pl' 
                          ? 'Numer telefonu jest wymagany' 
                          : 'Phone number is required' 
                      })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent font-light text-foreground placeholder-muted-foreground transition-all"
                      placeholder={language === 'pl' ? '+48 123 456 789' : '+48 123 456 789'}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-2 font-light">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Days */}
                  <div>
                    <label className="block text-sm font-semibold text-muted-foreground mb-3">
                      {language === 'pl' ? 'Preferowane Dni (możesz wybrać kilka)' : 'Preferred Days (you can select multiple)'}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {daysOfWeek.map((day) => (
                        <label key={day} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-card/30 transition-colors">
                          <input
                            type="checkbox"
                            value={day}
                            {...register('days')}
                            className="rounded border-border text-primary focus:ring-primary bg-card"
                          />
                          <span className="text-sm font-light text-muted-foreground">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-semibold text-muted-foreground mb-3">
                      {language === 'pl' ? 'Preferowane Godziny (możesz wybrać kilka)' : 'Preferred Hours (you can select multiple)'}
                    </label>
                    <div className="space-y-3">
                      {timeSlots.map((time) => (
                        <label key={time} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-card/30 transition-colors">
                          <input
                            type="checkbox"
                            value={time}
                            {...register('times')}
                            className="rounded border-border text-primary focus:ring-primary bg-card"
                          />
                          <span className="text-sm font-light text-muted-foreground">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary mt-8"
                  >
                    {language === 'pl' ? 'Wyślij Zapytanie' : 'Send Request'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default BookingWidget