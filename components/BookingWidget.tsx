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
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <CalendarIcon className="w-6 h-6" />
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
              className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Umów Trening</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dziękuję za zapytanie!</h3>
                  <p className="text-gray-600 font-light">Skontaktuję się z Tobą tak szybko, jak to możliwe.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Imię i Nazwisko *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Imię i nazwisko jest wymagane' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light"
                      placeholder="Wprowadź swoje imię i nazwisko"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 font-light">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Numer Telefonu *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Numer telefonu jest wymagany' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-light"
                      placeholder="+48 123 456 789"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 font-light">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Days */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Preferowane Dni (możesz wybrać kilka)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {daysOfWeek.map((day) => (
                        <label key={day} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={day}
                            {...register('days')}
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-sm font-light">{day}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Preferowane Godziny (możesz wybrać kilka)
                    </label>
                    <div className="space-y-2">
                      {timeSlots.map((time) => (
                        <label key={time} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={time}
                            {...register('times')}
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-sm font-light">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary mt-6"
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