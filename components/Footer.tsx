import React from 'react'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">HyperTraining</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="text-gray-400">
              <p className="font-semibold text-white mb-2">Adres:</p>
              <p>gen. Augusta Emila Fieldorfa Nila 41</p>
              <p>04-125 Warszawa</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/cennik" className="text-gray-300 hover:text-white transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link href="/o-mnie" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">{t('nav.faq')}</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 Email: kontakt@hypertraining.pl</p>
              <p>📱 Telefon: +48 123 456 789</p>
              <p>🕒 Godziny: Pon-Sob 8:00-20:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 HyperTraining - Patryk Dębowski. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer