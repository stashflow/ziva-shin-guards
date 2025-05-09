"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ProductsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 px-8"
    >
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-50 border border-black rounded-lg p-6 flex flex-col items-center">
          <img src="/images/ziva-classic.png" alt="ZIVA Classic" className="h-48 object-contain mb-4" />
          <h2 className="text-2xl font-bold mb-2">ZIVA Classic</h2>
          <p className="text-gray-600 mb-4 text-center">Minimalist design. Maximum performance. The original ZIVA shin guard for all players.</p>
          <Link href="/products/classic" className="px-6 py-2 bg-black text-white font-bold rounded hover:bg-yellow-400 hover:text-black transition">View Details</Link>
        </div>
        <div className="bg-gray-50 border border-black rounded-lg p-6 flex flex-col items-center">
          <img src="/images/ziva-shin-guard.png" alt="Faith Driven" className="h-48 object-contain mb-4" />
          <h2 className="text-2xl font-bold mb-2">Faith Driven</h2>
          <p className="text-gray-600 mb-4 text-center">Performance inspired by Christ. For players who bring their faith onto the field.</p>
          <Link href="/" className="px-6 py-2 bg-black text-white font-bold rounded hover:bg-yellow-400 hover:text-black transition">Learn More</Link>
        </div>
      </div>
    </motion.div>
  )
} 