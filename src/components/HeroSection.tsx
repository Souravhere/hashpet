"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="absolute sm:-left-16 -left-[50px] sm:top-[35%] top-[20%]"
          initial={{ opacity: 0, x: -100, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: 75 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/cat3.png"
            alt="Left Cat"
            width={300}
            height={300}
            className="sm:w-52 w-44"
          />
        </motion.div>
        <motion.div 
          className="absolute sm:-right-3 right-0 sm:-bottom-[10%] -bottom-[5%]"
          initial={{ opacity: 0, x: 100, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: -15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/cat3.png"
            alt="Right Cat"
            width={300}
            height={300}
            className="sm:w-52 w-48"
          />
        </motion.div>
        <div className="relative w-full">
          <div className="text-center">
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your <span className="text-pink-300">Hash Pet Is</span>
            </motion.h1>
            <motion.div
              className="relative mt-4"
              initial="hidden"
              animate="visible"
            >
              <motion.svg
                className="mx-auto"
                width="454"
                height="12"
                viewBox="0 0 454 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M192.819 1.14924C171.49 1.54308 150.411 2.02734 129.856 2.55676C100.758 3.30569 71.6711 4.08046 42.7596 5.30716C33.6589 5.69454 24.417 5.93986 15.3732 6.42409C9.6961 6.72753 2.16836 7.16005 1.18043 7.25044C0.663711 7.30209 0.438283 7.37964 0.365441 7.40546C-0.14673 7.58624 -0.053278 7.76049 0.235814 7.89607C0.351906 7.95418 0.645468 8.09627 1.46039 8.11564C55.9599 9.43919 111.689 6.85666 166.254 6.5855C260.881 6.12064 358.375 7.96715 452.25 11.9959C453.07 12.0282 453.867 11.8667 453.98 11.6278C454.117 11.3954 453.525 11.1694 452.706 11.1372C358.671 7.10195 261.017 5.24898 166.209 5.72029C115.356 5.97209 63.4991 8.2383 12.5756 7.46355C13.7457 7.39898 14.893 7.33439 15.9401 7.27629C24.9475 6.79206 34.1506 6.5532 43.2149 6.16582C72.0649 4.93912 101.092 4.16436 130.152 3.42188C166.209 2.49217 203.836 1.69158 241.76 1.31711C255.326 1.37522 268.848 1.43335 282.369 1.50437C311.62 1.65933 341.007 2.11127 370.189 2.71816C378.976 2.9054 387.762 3.09907 396.549 3.26694C399.463 3.32504 406.975 3.49288 408.022 3.47997C409.319 3.46705 409.569 3.15718 409.592 3.10553C409.661 2.98932 409.615 2.8279 408.978 2.69231C408.909 2.67295 408.5 2.60834 407.589 2.5696C354.528 0.284066 297.871 -0.0967975 241.805 0.45199C182.666 0.213106 123.3 0.109757 64.3118 0C63.4673 0 62.7775 0.193718 62.7707 0.432602C62.7661 0.671486 63.4467 0.86521 64.2912 0.871666C107.004 0.949142 149.933 1.02657 192.819 1.14924Z"
                  fill="#FFA5CB"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { 
                      pathLength: 1, 
                      opacity: 1,
                      transition: { 
                        pathLength: { type: "spring", duration: 2, bounce: 0 },
                        opacity: { duration: 0.01 }
                      }
                    }
                  }}
                />
              </motion.svg>
            </motion.div>
            <motion.p 
              className="mt-8 max-w-md mx-auto text-base sm:px-0 px-4 text-gray-500 sm:text-lg md:mt-10 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Next-generation digital WEB3.0 platform beyond providing simple existing services.
            </motion.p>
            <motion.div 
              className="mt-10 sm:flex sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/contact' 
                className=" sm:w-full w-fit inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#A45489] to-[#7A69A2] md:py-4 md:text-lg md:px-10"
                >
                Get Started
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}