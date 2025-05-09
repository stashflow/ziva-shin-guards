import Link from "next/link"

export default function ZivaClassicPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img src="/images/ziva-classic.png" alt="ZIVA Classic" className="h-72 md:h-96 object-contain rounded-lg shadow-lg" />
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ZIVA Classic</h1>
          <p className="text-lg text-gray-700 mb-6">The ZIVA Classic represents the pinnacle of minimalist design paired with maximum performance. Engineered for the modern player who demands both style and substance.</p>
          <ul className="mb-8 space-y-2 text-gray-800">
            <li>• Lightweight, impact-absorbing construction</li>
            <li>• Anatomical fit for comfort and agility</li>
            <li>• Clean, timeless design</li>
            <li>• Competition approved</li>
          </ul>
          <Link href="/contact" className="inline-block px-8 py-3 bg-black text-white font-bold rounded hover:bg-yellow-400 hover:text-black transition">Pre-order Now</Link>
        </div>
      </div>
    </main>
  )
} 