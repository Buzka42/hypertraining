import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'
import { useBooking } from '../contexts/BookingContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()
  const { setIsBookingOpen } = useBooking()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.pricing'), href: '/cennik' },
    { name: t('nav.about'), href: '/o-mnie' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/kontakt' },
    { name: t('common.book'), href: '#', action: 'openBooking' },
  ]

  return (
    <header className="bg-background/70 backdrop-blur-xl border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-12 h-12">
              <Image 
                src="/logo.png" 
                alt="HyperTraining Logo" 
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                fill
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-shimmer">HyperTraining</h1>
              <p className="text-[10px] text-muted-foreground font-light uppercase tracking-wider">PATRYK DĘBOWSKI</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              item.action === 'openBooking' ? (
                <button
                  key={item.name}
                  onClick={() => setIsBookingOpen(true)}
                  className="glass-card text-muted-foreground hover:text-foreground font-medium transition-all duration-300 relative group py-2 px-3 rounded-lg hover:bg-card/50"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 relative group py-2 px-3 rounded-lg hover:bg-card/50"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              )
            ))}
          </div>
          
          {/* Language Switcher - Top Right */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-card/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border"
          >
            {navigation.map((item) => (
              item.action === 'openBooking' ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsBookingOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="glass-card block w-full text-left py-3 text-muted-foreground hover:text-foreground font-medium px-4 rounded-lg hover:bg-card/30"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-muted-foreground hover:text-foreground font-medium px-4 rounded-lg hover:bg-card/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="mt-4 pt-4 border-t border-border flex justify-center">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header