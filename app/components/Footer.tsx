import React from "react"

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <img src="/images/ziva-shin-guard.png" alt="Ziva Logo" className="h-8 w-8 object-contain" />
          ZIVA
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Twitter</a>
          <a href="mailto:info@zivashinguards.com" className="hover:text-yellow-400 transition">Email</a>
        </div>
        <div className="text-xs text-gray-400 mt-4 md:mt-0">&copy; {new Date().getFullYear()} ZIVA. All rights reserved.</div>
      </div>
    </footer>
  )
} 