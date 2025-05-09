"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Features } from "./components/features"
import { Testimonials } from "./components/testimonials"
import { CTA } from "./components/cta"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [unlocked, setUnlocked] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return;
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [hasMounted])

  const handleUnlock = () => {
    setUnlocked(true)
  }

  if (!hasMounted) {
    // Prevent hydration mismatch by not rendering splash on server
    return null
  }

  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="relative flex items-center justify-center">
                <motion.img
                  src="/images/ziva-shin-guard.png"
                  alt="Ziva Shin Guard"
                  className="h-64 object-contain drop-shadow-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        ) : !unlocked ? (
          <UnlockSplash onUnlock={handleUnlock} />
        ) : (
          <motion.div
            key="content"
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <Hero setSelectedProduct={setSelectedProduct} />
            <Features />
            <Testimonials />
            <CTA />
            <AnimatePresence>
              {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center px-8 py-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <motion.div className="text-3xl font-bold tracking-tighter" whileHover={{ scale: 1.05 }}>
        ZIVA
      </motion.div>
      <nav>
        <ul className="flex space-x-8">
          {[
            { name: "Products", href: "/products" },
            { name: "Technology", href: "/technology" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" }
          ].map((item) => (
            <motion.li key={item.name} whileHover={{ y: -3 }} className="text-sm font-medium tracking-wide">
              <Link href={item.href} className="hover:text-gray-600 transition-colors">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

function Hero({ setSelectedProduct }: { setSelectedProduct: (product: string) => void }) {
  return (
    <section className="min-h-screen pt-32 pb-20 px-8 flex flex-col justify-center">
      <motion.h1
        className="text-7xl md:text-9xl font-bold tracking-tighter mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        PROTECTION
        <br />
        REDEFINED
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <ProductCard
          title="ZIVA CLASSIC"
          description="Minimalist design. Maximum performance."
          onClick={() => setSelectedProduct("classic")}
          delay={1.2}
        />
        <ProductCard
          title="FAITH DRIVEN"
          description="Performance inspired by Christ."
          onClick={() => setSelectedProduct("faith")}
          delay={1.5}
        />
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p className="text-sm tracking-widest mb-2">DISCOVER MORE</p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

function ProductCard({
  title,
  description,
  onClick,
  delay,
}: {
  title: string
  description: string
  onClick: () => void
  delay: number
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="bg-white border border-black p-12 h-[500px] flex flex-col justify-between cursor-pointer"
        onClick={onClick}
      >
        <div className="flex justify-center items-center h-3/4">
          {title === "FAITH DRIVEN" ? (
            <img src="/images/ziva-shin-guard.png" alt={title} className="h-56 object-contain transform rotate-6" />
          ) : (
            <div className="w-32 h-56 bg-white rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.15)] transform rotate-6" />
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <motion.div className="flex items-center text-sm font-medium" whileHover={{ x: 5 }}>
            EXPLORE <ChevronRight size={16} className="ml-1" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 border-2 border-black -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ x: 8, y: 8, opacity: 1 }}
      />
    </motion.div>
  )
}

function UnlockSplash({ onUnlock }: { onUnlock: () => void }) {
  // Animation: back guard slides out from under the static front guard
  const [showBack, setShowBack] = useState(false)
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    const timer1 = setTimeout(() => setShowBack(true), 600)
    const timer2 = setTimeout(() => setShowButton(true), 1200)
    return () => { clearTimeout(timer1); clearTimeout(timer2) }
  }, [])

  // Use same size as loader: h-64 = 256px
  // Centered with flex, use absolute for overlap
  return (
    <motion.div
      key="unlock"
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -50 }} // No fade out
      transition={{ duration: 0.8 }}
    >
      <div className="relative mb-16 flex justify-center items-center" style={{ width: 180, height: 256 }}>
        {/* Back shin guard: pops out, same size, behind, -6deg */}
        {showBack && (
          <motion.img
            src="/images/ziva-shin-guard.png"
            alt="Ziva Shin Guard Back"
            className="h-64 object-contain drop-shadow-xl absolute"
            style={{ left: 0, top: 12, zIndex: 1, transform: 'rotate(-6deg)' }}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              x: { duration: 1.2, delay: 0 },
              opacity: { duration: 0.8, delay: 0.4 }
            }}
          />
        )}
        {/* Front shin guard: static, matches loader */}
        <img
          src="/images/ziva-shin-guard.png"
          alt="Ziva Shin Guard Front"
          className="h-64 object-contain drop-shadow-xl absolute"
          style={{ left: 20, top: 0, zIndex: 2, transform: 'rotate(6deg)' }}
        />
      </div>
      <motion.button
        onClick={onUnlock}
        className="px-8 py-3 text-lg font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showButton ? 1 : 0 }}
        transition={{ delay: 0, duration: 0.5 }}
      >
        <span className="text-sm font-medium">ENTER</span> <span className="text-xl font-bold">ZIVA</span>
      </motion.button>
    </motion.div>
  )
}

function ProductDetail({
  product,
  onClose,
}: {
  product: string
  onClose: () => void
}) {
  const isClassic = product === "classic"

  return (
    <motion.div
      className="fixed inset-0 bg-white z-40 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="min-h-screen px-8 py-32">
        <motion.button
          onClick={onClose}
          className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center border border-black rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ✕
        </motion.button>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center">
              <motion.div
                className="relative"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                {!isClassic ? (
                  <img
                    src="/images/ziva-shin-guard.png"
                    alt="Faith Driven Shin Guard"
                    className="h-96 object-contain"
                  />
                ) : (
                  <div className="w-64 h-96 bg-white rounded-lg shadow-[0_0_80px_rgba(0,0,0,0.15)]" />
                )}
              </motion.div>
            </div>

            <div>
              <motion.h1
                className="text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {isClassic ? "ZIVA CLASSIC" : "FAITH DRIVEN"}
              </motion.h1>

              <motion.p
                className="text-xl mb-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {isClassic
                  ? "The Ziva Classic represents the pinnacle of minimalist design paired with maximum performance. Engineered for the modern player who demands both style and substance."
                  : "Faith Driven is more than equipment—it's a statement. Designed for players who bring their faith in Christ onto the field, combining spiritual inspiration with cutting-edge protection."}
              </motion.p>

              <motion.div
                className="space-y-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Feature
                  title="LIGHTWEIGHT CONSTRUCTION"
                  description="Advanced materials provide protection without adding weight."
                />
                <Feature
                  title="ANATOMICAL FIT"
                  description="Contoured design that moves with your body for maximum comfort."
                />
                <Feature
                  title="IMPACT ABSORPTION"
                  description="Strategic padding placement for protection where you need it most."
                />
                {isClassic ? (
                  <Feature
                    title="MINIMALIST AESTHETIC"
                    description="Clean lines and pure design for the style-conscious athlete."
                  />
                ) : (
                  <Feature
                    title="INSPIRED DESIGN"
                    description="Subtle spiritual elements integrated into a performance-focused design."
                  />
                )}
              </motion.div>

              <motion.button
                className="px-8 py-4 bg-black text-white font-bold tracking-wider uppercase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Pre-order now
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="mt-32 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-16">THE TECHNOLOGY</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <TechFeature
                title="IMPACT SHIELD"
                description="Proprietary material that hardens on impact but remains flexible during movement."
                delay={1.3}
              />
              <TechFeature
                title="AIRFLOW SYSTEM"
                description="Strategic ventilation channels keep you cool under pressure."
                delay={1.5}
              />
              <TechFeature
                title="ANATOMICAL MAPPING"
                description="Computer-designed contours that match the natural shape of your leg."
                delay={1.7}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-t border-gray-200 pt-4">
      <h3 className="text-sm font-bold tracking-wider mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function TechFeature({
  title,
  description,
  delay,
}: {
  title: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      className="p-8 border border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ y: -10 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
