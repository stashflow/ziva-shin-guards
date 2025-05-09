"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { hasSeenSplash, markSplashAsSeen } from "../utils/splashScreen"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const pathname = usePathname()
  const [showSplash, setShowSplash] = useState(false)
  console.log('PageLayout mounted, initial showSplash:', showSplash)

  useEffect(() => {
    console.log('useEffect running, checking splash screen state')
    const hasSeen = hasSeenSplash()
    console.log('Has seen splash before:', hasSeen)

    if (!hasSeen) {
      console.log('First time visit, showing splash screen')
      setShowSplash(true)
      markSplashAsSeen()
      const timer = setTimeout(() => {
        console.log('Splash screen timer complete, hiding splash')
        setShowSplash(false)
      }, 1000)
      return () => {
        console.log('Cleaning up splash screen timer')
        clearTimeout(timer)
      }
    } else {
      console.log('Returning visitor, skipping splash screen')
    }
  }, [])

  // Log whenever showSplash changes
  useEffect(() => {
    console.log('showSplash state changed:', showSplash)
  }, [showSplash])

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1],
      },
    },
  }

  const splashVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            variants={splashVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white text-4xl font-bold"
            >
              ZIVA
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link 
              href="/"
              className="inline-block mb-8 text-lg font-bold text-black hover:text-gray-600 transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-8"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-4xl font-bold mb-8 text-black"
              >
                {title}
              </motion.h1>
              <div className="text-black">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
} 