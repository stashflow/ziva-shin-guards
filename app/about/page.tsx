"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 px-8"
    >
      <h1 className="text-4xl font-bold mb-8">About ZIVA</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">
          ZIVA is dedicated to revolutionizing protective gear for athletes. Our mission is to create innovative, comfortable, and effective shin guards that help athletes perform at their best.
        </p>
        {/* Add more content about your company */}
      </div>
    </motion.div>
  )
} 