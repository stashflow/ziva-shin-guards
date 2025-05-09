"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 px-8"
    >
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">
          Have questions about our products or want to learn more? We'd love to hear from you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-2">Email: info@ziva.com</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Address: 123 Innovation Street, Tech City, TC 12345</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="space-y-2">
              <p>Instagram: @ziva_official</p>
              <p>Twitter: @ziva_official</p>
              <p>Facebook: ZIVA Official</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 