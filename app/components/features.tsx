"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Shield, Zap, Award } from "lucide-react"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

export function Features() {
  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "SUPERIOR PROTECTION",
      description: "Engineered with advanced impact-absorbing materials that distribute force away from your leg.",
      delay: 0.2,
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "LIGHTWEIGHT DESIGN",
      description: "Ultralight construction that won't slow you down, giving you the edge when it matters most.",
      delay: 0.4,
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "COMPETITION APPROVED",
      description: "Meets and exceeds all international standards for competitive play at every level.",
      delay: 0.6,
    },
  ]

  return (
    <section className="py-24 px-8 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          WHY CHOOSE ZIVA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Feature({ icon, title, description, delay }: FeatureProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-20 h-20 flex items-center justify-center border-2 border-black rounded-full mb-6"
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
