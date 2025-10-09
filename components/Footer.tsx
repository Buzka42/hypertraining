import React from 'react'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">HyperTraining</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/cennik" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link href="/o-mnie" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.faq')}</Link></li>
              <li><Link href="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 Email: kontakt@hypertraining.pl</p>
              <p>📱 Telefon: +48 123 456 789</p>
              <p>🕒 Godziny: Pon-Sob 8:00-20:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 HyperTraining - Patryk Dębowski. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer