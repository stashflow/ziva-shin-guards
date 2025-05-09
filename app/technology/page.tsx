"use client"

import { motion } from "framer-motion"

export default function TechnologyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 px-8"
    >
      <h1 className="text-4xl font-bold mb-8">Our Technology</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">
          At ZIVA, we combine cutting-edge materials science with innovative design to create shin guards that offer superior protection and comfort.
        </p>
        {/* Add more content about your technology */}
      </div>
    </motion.div>
  )
} 