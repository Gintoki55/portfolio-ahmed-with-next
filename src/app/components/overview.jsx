'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Overview() {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug"
        >
          Do you have a brilliant idea and need a website that reflects it professionally?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl"
        >
          I use <span className="font-semibold text-blue-700">Next.js</span> to build fast, secure, and SEO-friendly websites — helping your brand appear at the top of Google search results.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl"
        >
          Expect a beautiful design, smooth user experience, and lightning-fast load times — all with the option of full hosting and deployment handled for you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl"
        >
          Your website will be <span className="font-semibold text-blue-700">fully responsive</span>, looking great on phones, tablets, and desktops — anytime, anywhere.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl"
        >
          Our goal is simple: a website that reflects your project’s quality and turns visitors into customers. Get started now — let’s build your online presence with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/services">
            <button className="px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition">
              Explore Services
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
