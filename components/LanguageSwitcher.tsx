import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 bg-card/30 backdrop-blur-lg rounded-xl p-1 border border-border">
      <button
        onClick={() => setLanguage('pl')}
        className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
          language === 'pl' 
            ? 'bg-primary shadow-lg ring-2 ring-primary/50' 
            : 'hover:bg-card/50'
        }`}
        title="Polski"
      >
        <Image 
          src="/pl.png" 
          alt="Polish" 
          width={24} 
          height={16} 
          className="object-cover rounded-sm"
        />
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
          language === 'en' 
            ? 'bg-primary shadow-lg ring-2 ring-primary/50' 
            : 'hover:bg-card/50'
        }`}
        title="English"
      >
        <Image 
          src="/eng.png" 
          alt="English" 
          width={24} 
          height={16} 
          className="object-cover rounded-sm"
        />
      </button>
    </div>
  )
}