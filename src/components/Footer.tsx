"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Image from "next/image"
import { FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { RiMediumFill } from "react-icons/ri";

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
      <div className="max-w-7xl mx-auto sm:flex justify-between block">
        <motion.div variants={itemVariants} className="space-y-4 sm:inline block sm:min-w-32 w-full sm:mx-0">
          <Image src="/logo.png" alt="Hash Pet Logo" width={80} height={80} className="rounded-lg sm:mx-0 mx-auto" />
          <h2 className="text-2xl font-bold sm:text-left text-center">Hash Pet</h2>
          <p className="text-sm sm:text-left text-center">Touched With Hash Pet Community</p>
          <div className="flex w-fit space-x-4 sm:mx-0 mx-auto">
            <Link href="https://t.me/hashpetofficial" target="blank" className="hover:text-pink-300 transition-colors duration-500">
              <FaTelegramPlane size={24} />
            </Link>
            <Link href="https://medium.com/@hashpet" target="blank" className="hover:text-pink-300 transition-colors duration-500">
            <RiMediumFill size={24}/>
            </Link>
            <Link href="https://x.com/Hash_Pet" target="blank" className="hover:text-pink-300 transition-colors duration-500">
            <FaXTwitter size={24}/>
            </Link>
          </div>
        </motion.div>
        <div className="flex w-full justify-evenly sm:my-0 my-5">
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-pink-300 transition-colors duration-300 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-pink-300 transition-colors duration-300 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-pink-300 transition-colors duration-300 hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Resources Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/explorer"
                className="hover:text-pink-300 transition-colors duration-300 hover:underline"
              >
                WhitePaper
              </Link>
            </li>
            <li>
              <Link
                href="/brand"
                className="hover:text-pink-300 transition-colors duration-300 hover:underline"
              >
                Brand & Press
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-pink-300 transition-colors duration-300 hover:underline"
              >
                Explorer
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Legal Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms"
                className="hover:text-pink-300 transition-colors duration-300 hover:underline"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-pink-300 transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>
        </div>
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
