import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t } = useLanguage()
  
  // Gallery images from galeria_goclaw folder
  const galleryImages = [
    '/galeria_goclaw/gym1.jpg',
    '/galeria_goclaw/gym2.jpg',
    '/galeria_goclaw/gym3.jpg',
    '/galeria_goclaw/gym4.jpg',
    '/galeria_goclaw/gym5.jpg',
    '/galeria_goclaw/gym6.jpg',
    '/galeria_goclaw/gym7.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <>
      <Head>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.description')} />
        <meta name="keywords" content="trener personalny Warszawa opinie, patryk dębowski trener personalny, trener personalny dla kobiet Warszawa, trener fitness Warszawa, dobry trener personalny Warszawa, certyfikowany trener personalny Warszawa, trener siłowy Warszawa" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-background text-foreground py-24 px-4 border-b border-border">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {t('about.header.title')}
              </h1>
              <p className="text-xl text-muted-foreground mx-auto">
                {t('about.header.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24 px-4 bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Patryk Dębowski
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {t('about.content.intro.p1')}
                  </p>
                  <p>
                    {t('about.content.intro.p2')}
                  </p>
                  <p>
                    {t('about.content.intro.p3')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="glass-card p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">{t('about.qualifications.title')}</h3>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                        <span className="text-muted-foreground">{t(`about.qualifications.${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 px-4 bg-background">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('about.gallery.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('about.gallery.description')}
              </p>
            </motion.div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={galleryImages[currentImageIndex]}
                    alt={`Galeria siłowni ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = 'https://via.placeholder.com/800x400/1e293b/06b6d4?text=Galeria+Siłowni'
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out transform hover:scale-125 ${
                      index === currentImageIndex ? 'bg-primary shadow-lg' : 'bg-primary/50 hover:bg-primary/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 px-4 bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t('about.location.title')}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{t('about.location.gym.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('about.location.gym.address').split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index === 0 && <br />}
                        </span>
                      ))}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.123456789!2d21.0827!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sgen.%20Augusta%20Emila%20Fieldorfa%20Nila%2041%2C%2004-125%20Warszawa!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
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