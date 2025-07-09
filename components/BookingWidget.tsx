import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'

interface BookingFormData {
  name: string
  phone: string
  days: string[]
  times: string[]
}

const BookingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<BookingFormData>()

  const daysOfWeek = [
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota'
  ]

  const timeSlots = [
    '8:00-12:00',
    '12:00-16:00',
    '16:00-20:00'
  ]

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
        setIsOpen(false)
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
        className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-4 rounded-full shadow-2xl z-50 flex items-center space-x-3 backdrop-blur-sm border border-white/10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <CalendarIcon className="w-5 h-5" />
        <span className="font-semibold text-sm">Wyślij zapytanie o trening</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800/95 backdrop-blur-md rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">Umów Trening</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-colors"
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
                  <h3 className="text-xl font-bold text-white mb-2">Dziękuję za zapytanie!</h3>
                  <p className="text-gray-300 font-light">Skontaktuję się z Tobą tak szybko, jak to możliwe.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Imię i Nazwisko *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Imię i nazwisko jest wymagane' })}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light text-white placeholder-gray-400 transition-all"
                      placeholder="Wprowadź swoje imię i nazwisko"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2 font-light">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Numer Telefonu *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Numer telefonu jest wymagany' })}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light text-white placeholder-gray-400 transition-all"
                      placeholder="+48 123 456 789"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-2 font-light">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Days */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Preferowane Dni (możesz wybrać kilka)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {daysOfWeek.map((day) => (
                        <label key={day} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                          <input
                            type="checkbox"
                            value={day}
                            {...register('days')}
                            className="rounded border-gray-600 text-primary-500 focus:ring-primary-500 bg-gray-700"
                          />
                          <span className="text-sm font-light text-gray-300">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Preferowane Godziny (możesz wybrać kilka)
                    </label>
                    <div className="space-y-3">
                      {timeSlots.map((time) => (
                        <label key={time} className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-700/30 transition-colors">
                          <input
                            type="checkbox"
                            value={time}
                            {...register('times')}
                            className="rounded border-gray-600 text-primary-500 focus:ring-primary-500 bg-gray-700"
                          />
                          <span className="text-sm font-light text-gray-300">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary mt-8"
                  >
                    Wyślij Zapytanie
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