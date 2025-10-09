import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BookingWidget from './BookingWidget'
import InteractiveBackground from './InteractiveBackground'
import { BookingProvider } from '../contexts/BookingContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col relative w-full max-w-full overflow-x-hidden">
        <InteractiveBackground />
        <Header />
        <main className="flex-grow relative z-10 w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <BookingWidget />
      </div>
    </BookingProvider>
  )
}

export default Layout