"use client"

import PageLayout from "../components/PageLayout"

export default function AboutPage() {
  return (
    <PageLayout title="About ZIVA">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-6 text-black">
            ZIVA is dedicated to revolutionizing protective gear for athletes. Our mission is to create innovative, comfortable, and effective shin guards that help athletes perform at their best.
          </p>
          <p className="text-lg text-black">
            We believe that protection shouldn't compromise performance. Every ZIVA product is designed with this philosophy in mind, combining cutting-edge materials with thoughtful design to create shin guards that athletes can trust.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-6 text-black">
            Founded by a team of professional athletes and engineers, ZIVA was born from a simple observation: existing shin guards weren't meeting the needs of modern players. We set out to change that.
          </p>
          <p className="text-lg text-black">
            After years of research, testing, and refinement, we've created a line of shin guards that sets new standards for protection, comfort, and style in the sport.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-black">Pushing boundaries in materials science and design to create better protective gear.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-black">Uncompromising standards in every aspect of our products.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-black">Designing for athletes who demand the best in protection and comfort.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-black">Building a global community of athletes who trust ZIVA.</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
} 