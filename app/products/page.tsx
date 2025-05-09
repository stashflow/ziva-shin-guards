"use client"

import PageLayout from "../components/PageLayout"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <PageLayout title="Our Products">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <Link href="/preorder" className="relative group">
          <div className="bg-white border border-black p-12 h-[500px] flex flex-col justify-between cursor-pointer">
            <div className="flex justify-center items-center h-3/4">
              <Image
                alt="ZIVA CLASSIC"
                src="/images/ziva-classic.png"
                width={224}
                height={224}
                className="h-56 object-contain transform rotate-6"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-black">ZIVA CLASSIC</h2>
              <p className="text-gray-600 mb-4">Minimalist design. Maximum performance.</p>
              <div className="flex items-center text-sm font-medium">
                EXPLORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-1"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 border-2 border-black -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>

        <Link href="/preorder" className="relative group">
          <div className="bg-white border border-black p-12 h-[500px] flex flex-col justify-between cursor-pointer">
            <div className="flex justify-center items-center h-3/4">
              <Image
                alt="FAITH DRIVEN"
                src="/images/ziva-shin-guard.png"
                width={224}
                height={224}
                className="h-56 object-contain transform rotate-6"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-black">FAITH DRIVEN</h2>
              <p className="text-gray-600 mb-4">Performance inspired by Christ.</p>
              <div className="flex items-center text-sm font-medium">
                EXPLORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-1"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 border-2 border-black -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>
      </div>
    </PageLayout>
  )
} 