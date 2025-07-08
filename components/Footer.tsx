import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HyperTraining</h3>
            <p className="text-gray-300 mb-4">
              Profesjonalny trening personalny w Warszawie z Patrykiem Dębowskim. 
              Osiągnij swoje cele fitness z doświadczonym trenerem.
            </p>
            <p className="text-gray-300">
              <strong>Adres:</strong><br />
              gen. Augusta Emila Fieldorfa Nila 41<br />
              04-125 Warszawa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Strona Główna</Link></li>
              <li><Link href="/cennik" className="text-gray-300 hover:text-white transition-colors">Cennik</Link></li>
              <li><Link href="/o-mnie" className="text-gray-300 hover:text-white transition-colors">O Mnie</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
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