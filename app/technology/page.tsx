"use client"

import PageLayout from "../components/PageLayout"

export default function TechnologyPage() {
  return (
    <PageLayout title="Our Technology">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Materials</h2>
          <p className="text-lg mb-6">
            ZIVA shin guards utilize a proprietary blend of advanced materials that provide superior protection while maintaining lightweight comfort. Our multi-layer construction combines impact-resistant polymers with energy-absorbing foams to create the perfect balance of protection and flexibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Impact Protection</h3>
              <p className="text-gray-600">Our outer shell is engineered to disperse impact forces across a wider area, reducing the risk of injury.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Comfort Layer</h3>
              <p className="text-gray-600">The inner layer features moisture-wicking materials that keep you dry and comfortable during intense play.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Ergonomic Design</h2>
          <p className="text-lg mb-6">
            Every ZIVA shin guard is designed with the athlete's anatomy in mind. Our ergonomic shape follows the natural contours of the leg, ensuring a secure fit that stays in place during movement.
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Anatomically contoured for perfect fit</li>
            <li>Strategic ventilation for temperature regulation</li>
            <li>Non-slip inner lining for stability</li>
            <li>Adjustable straps for custom fit</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Testing & Certification</h2>
          <p className="text-lg mb-6">
            All ZIVA shin guards undergo rigorous testing to ensure they meet or exceed industry safety standards. Our products are certified for use in professional leagues and competitions worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="font-bold mb-2">Impact Testing</h3>
              <p className="text-sm text-gray-600">Meets FIFA standards</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="font-bold mb-2">Durability</h3>
              <p className="text-sm text-gray-600">1000+ hours of testing</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg text-center">
              <h3 className="font-bold mb-2">Comfort</h3>
              <p className="text-sm text-gray-600">Athlete-approved fit</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
} 