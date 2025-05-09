"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  stars: number
  delay: number
}

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "These shin guards have completely changed my game. The lightweight design gives me the confidence to play at my best.",
      author: "Alex Rodriguez",
      role: "Professional Midfielder",
      stars: 5,
      delay: 0.2,
    },
    {
      quote:
        "I've tried many shin guards over my career, but Ziva offers the perfect balance of protection and comfort.",
      author: "Maria Santos",
      role: "National Team Forward",
      stars: 5,
      delay: 0.4,
    },
    {
      quote:
        "The Faith Driven model isn't just equipment, it's a reminder of what I play for. Plus, the protection is unmatched.",
      author: "David Johnson",
      role: "College Athlete",
      stars: 5,
      delay: 0.6,
    },
  ]

  return (
    <section className="py-24 px-8 bg-white">
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
          TRUSTED BY ATHLETES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Testimonial({ quote, author, role, stars, delay }: TestimonialProps) {
  return (
    <motion.div
      className="p-8 border border-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-black text-black" />
        ))}
      </div>
      <p className="text-lg mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </motion.div>
  )
}
