import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1">
      <button
        onClick={() => setLanguage('pl')}
        className={`p-2 rounded-md transition-all duration-200 hover:scale-110 ${
          language === 'pl' 
            ? 'bg-indigo-600 shadow-lg ring-2 ring-indigo-400' 
            : 'hover:bg-gray-700/50'
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
        className={`p-2 rounded-md transition-all duration-200 hover:scale-110 ${
          language === 'en' 
            ? 'bg-indigo-600 shadow-lg ring-2 ring-indigo-400' 
            : 'hover:bg-gray-700/50'
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