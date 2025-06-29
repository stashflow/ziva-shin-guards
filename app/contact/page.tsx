"use client"

import { motion } from "framer-motion"
import PageLayout from "../components/PageLayout"

export default function Contact() {
  return (
    <PageLayout title="CONTACT US">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white border-2 border-black p-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-black">GET IN TOUCH</h2>
          <p className="text-gray-600 mb-8">
            Have questions about ZIVA Shin Guards? We'd love to hear from you.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                placeholder="How can we help you?"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-black text-white font-bold tracking-wider uppercase border-2 border-black hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SEND MESSAGE
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 pt-8 border-t-2 border-black"
          >
            <h3 className="text-lg font-bold mb-4 text-black">OTHER WAYS TO REACH US</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span className="text-gray-600">Email: contact@zivashinguards.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span className="text-gray-600">Instagram: @zivashinguards</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span className="text-gray-600">Twitter: @zivashinguards</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
} 