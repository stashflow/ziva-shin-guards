"use client"

import { motion } from "framer-motion"
import PageLayout from "../components/PageLayout"

export default function Preorder() {
  return (
    <PageLayout title="JOIN THE WAITLIST">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white border-2 border-black p-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-black">BE THE FIRST TO KNOW</h2>
          <p className="text-gray-600 mb-8">
            Join our exclusive waitlist to be notified when ZIVA Shin Guards are available for pre-order.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                EMAIL ADDRESS
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

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-black text-white font-bold tracking-wider uppercase border-2 border-black hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              JOIN WAITLIST
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 pt-8 border-t-2 border-black"
          >
            <h3 className="text-lg font-bold mb-4 text-black">WHY JOIN THE WAITLIST?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span className="text-gray-600">Early access to pre-orders</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span className="text-gray-600">Exclusive launch day discounts</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">•</span>
                <span className="text-gray-600">Priority shipping for waitlist members</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
} 