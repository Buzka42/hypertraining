import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.pricing'), href: '/cennik' },
    { name: t('nav.about'), href: '/o-mnie' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/kontakt' },
  ]

  return (
    <header className="bg-background/70 backdrop-blur-xl border-b border-border sticky top-0 z-50 w-full max-w-full overflow-hidden">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center py-3 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group min-w-0 flex-shrink-0">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="HyperTraining Logo"
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                fill
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg font-bold text-shimmer whitespace-nowrap">HyperTraining</h1>
              <p className="text-[10px] text-muted-foreground font-light uppercase tracking-wider whitespace-nowrap">PATRYK DĘBOWSKI</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 flex-shrink flex-grow-0 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 relative group py-2 px-4 rounded-lg hover:bg-card/50 text-sm whitespace-nowrap flex-shrink-0"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Language Switcher - Top Right */}
          <div className="hidden md:block flex-shrink-0">
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
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-muted-foreground hover:text-foreground font-medium px-4 rounded-lg hover:bg-card/30"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header