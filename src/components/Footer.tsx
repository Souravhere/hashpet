"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"
import { FaTelegramPlane, FaTwitter } from "react-icons/fa"

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.footer
      ref={ref}
      className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div variants={itemVariants} className="space-y-4">
          <Image src="/logo.png" alt="Hash Pet Logo" width={80} height={80} className="rounded-lg" />
          <h2 className="text-2xl font-bold">Hash Pet</h2>
          <p className="text-sm">Touched With Hash Pet Community</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-pink-300 transition-colors duration-500">
              <FaTelegramPlane size={24} />
            </Link>
            <Link href="#" className="hover:text-pink-300 transition-colors duration-500">
              <FaTwitter size={24} />
            </Link>
          </div>
        </motion.div>

        {["Company", "Resources", "Legal"].map((section, index) => (
          <motion.div key={section} variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">{section}</h3>
            <ul className="space-y-2">
              {["Home", "About", "Contact", "WhitePaper", "Explorer", "Brand & Press", "Terms of Service", "Privacy Policy"]
                .slice(index * 3, (index + 1) * 3)
                .map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-pink-300 transition-colors duration-300 hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-12 pt-8 border-t border-pink-400 text-center text-sm"
      >
        <p>
          Copyright 2024 Hash Pet powered by Pet Tower Rights Reserved
        </p>
      </motion.div>
    </motion.footer>
  )
}
