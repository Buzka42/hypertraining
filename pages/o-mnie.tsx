import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Placeholder images - will be replaced with actual gallery images
  const galleryImages = [
    '/galeria_goclaw/image1.jpg',
    '/galeria_goclaw/image2.jpg',
    '/galeria_goclaw/image3.jpg',
    '/galeria_goclaw/image4.jpg',
    '/galeria_goclaw/image5.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <>
      <Head>
        <title>O Mnie - Patryk Dębowski | HyperTraining</title>
        <meta name="description" content="Poznaj Patryka Dębowskiego - doświadczonego trenera personalnego z Warszawy. Dowiedz się o jego doświadczeniu, certyfikatach i podejściu do treningu." />
        <meta name="keywords" content="patryk dębowski, trener personalny warszawa, doświadczenie, certyfikaty, o trenerze" />
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
                O Mnie
              </h1>
              <p className="text-xl font-light max-w-2xl mx-auto">
                Poznaj historię i doświadczenie, które stoją za HyperTraining
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Patryk Dębowski
                </h2>
                <div className="space-y-4 text-gray-600 font-light">
                  <p>
                    Witaj! Jestem Patryk Dębowski, certyfikowanym trenerem personalnym z ponad 8-letnim 
                    doświadczeniem w branży fitness. Moją pasją jest pomaganie ludziom w osiąganiu ich 
                    celów zdrowotnych i kondycyjnych poprzez indywidualne podejście do każdego klienta.
                  </p>
                  <p>
                    Specjalizuję się w treningu siłowym, redukcji tkanki tłuszczowej, budowaniu masy 
                    mięśniowej oraz rehabilitacji pourazowej. Moje podejście opiera się na naukowych 
                    podstawach treningu oraz wieloletnim doświadczeniu praktycznym.
                  </p>
                  <p>
                    Wierzę, że każdy zasługuje na indywidualne podejście i plan treningowy dostosowany 
                    do jego potrzeb, możliwości i stylu życia. Dlatego każdy program treningowy, który 
                    tworzę, jest unikalny i skoncentrowany na osiągnięciu konkretnych rezultatów.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-primary-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Moje Kwalifikacje</h3>
                  <ul className="space-y-3">
                    {[
                      'Certyfikowany Trener Personalny (ACSM)',
                      'Specjalista ds. Żywienia Sportowego',
                      'Certyfikat Treningu Funkcjonalnego',
                      'Kurs Pierwszej Pomocy',
                      'Specjalizacja w Treningu Siłowym',
                      'Certyfikat Treningu Rehabilitacyjnego'
                    ].map((qualification, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="font-light">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Galeria Siłowni
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Zobacz nowoczesne wyposażenie i przestrzeń treningową
              </p>
            </motion.div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`Galeria siłowni ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = 'https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Galeria+Siłowni'
                  }}
                />
              </motion.div>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Lokalizacja
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Adres Siłowni</h3>
                    <p className="text-gray-600 font-light">
                      gen. Augusta Emila Fieldorfa Nila 41<br />
                      04-125 Warszawa
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Godziny Otwarcia</h3>
                    <p className="text-gray-600 font-light">
                      Poniedziałek - Sobota: 8:00 - 20:00<br />
                      Niedziela: Zamknięte
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dojazd</h3>
                    <p className="text-gray-600 font-light">
                      Dogodna lokalizacja z łatwym dostępem komunikacją publiczną. 
                      Parking dostępny na miejscu.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="h-96 rounded-2xl overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.8234567890123!2d21.0123456789!3d52.2123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEyJzQ0LjQiTiAyMcKwMDAnNDQuNCJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja HyperTraining"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage