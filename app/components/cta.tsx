"use client"

import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-24 px-8 bg-black text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ELEVATE YOUR GAME
        </motion.h2>

        <motion.p
          className="text-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join the elite players who trust Ziva for uncompromising protection and performance.
        </motion.p>

        <motion.button
          className="px-8 py-4 bg-white text-black font-bold tracking-wider uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Shop the collection
        </motion.button>
      </motion.div>
    </section>
  )
}
