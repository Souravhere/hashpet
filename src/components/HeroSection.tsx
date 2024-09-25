"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      <div>
      <motion.div 
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/cat3.png"
              alt="Left Cat"
              width={300}
              height={300}
              className="sm:w-52 w-44 rotate-[75deg] absolute sm:-left-16 -left-[50px] sm:top-[35%] top-[20%]"
            />
          </motion.div>
          <motion.div 
            className=""
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/cat3.png"
              alt="Right Cat"
              width={300}
              height={300}
              className="sm:w-52 w-48 rotate-[-15deg] absolute sm:-right-3 right-0 sm:-bottom-[10%] -bottom-[5%]"
            />
          </motion.div>
        <div className="relative w-full">
          
          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="text-center">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Your <span className="text-pink-300">Hash Pet Is</span>
              </motion.h1>
              <motion.div
                className="relative"
                initial="hidden"
                animate="visible"
              >
                <motion.svg
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2"
                  width="100"
                  height="8"
                  viewBox="0 0 82 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.8263 0.766163C30.9739 1.02872 27.1668 1.35156 23.4542 1.7045C18.1986 2.20379 12.945 2.7203 7.72309 3.5381C6.07936 3.79636 4.41012 3.95991 2.77666 4.28273C1.75128 4.48502 0.391641 4.77337 0.213206 4.83362C0.119877 4.86806 0.0791612 4.91976 0.0660047 4.93697C-0.0265019 5.05749 -0.0096229 5.17366 0.0425919 5.26405C0.0635601 5.30278 0.116582 5.39751 0.263771 5.41043C10.1073 6.29279 20.1728 4.57111 30.0283 4.39033C47.1194 4.08043 64.7285 5.31143 81.684 7.99726C81.832 8.01878 81.9759 7.91115 81.9965 7.75189C82.0211 7.59694 81.9142 7.44629 81.7662 7.42477C64.782 4.73464 47.1441 3.49932 30.0201 3.81353C20.8352 3.98139 11.469 5.4922 2.27137 4.9757C2.48269 4.93265 2.68992 4.8896 2.87905 4.85086C4.50593 4.52804 6.16817 4.3688 7.80533 4.11055C13.0161 3.29275 18.259 2.77624 23.5076 2.28125C30.0201 1.66145 36.8162 1.12772 43.6658 0.878077C46.1162 0.916815 48.5584 0.955569 51.0006 1.00292C56.2837 1.10622 61.5916 1.40751 66.8624 1.81211C68.4494 1.93693 70.0364 2.06605 71.6234 2.17796C72.1496 2.2167 73.5064 2.32859 73.6955 2.31998C73.9299 2.31137 73.9751 2.10479 73.9792 2.07035C73.9915 1.99288 73.9833 1.88526 73.8682 1.79488C73.8559 1.78196 73.7819 1.73889 73.6174 1.71307C64.0337 0.189377 53.8004 -0.0645317 43.6741 0.301327C32.9926 0.142071 22.2701 0.0731716 11.6158 0C11.4632 0 11.3387 0.129145 11.3374 0.288401C11.3366 0.447657 11.4595 0.576807 11.6121 0.581111C19.3267 0.632762 27.0804 0.684383 34.8263 0.766163Z" fill="#FFA5CB"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: { 
                        pathLength: 1, 
                        opacity: 1,
                        transition: { 
                          pathLength: { type: "spring", duration: 1.5, bounce: 0 },
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
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Next-generation digital WEB3.0 platform beyond providing simple existing services.
              </motion.p>
              <div className="mt-10 sm:flex sm:justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href='/contact' 
                  className="w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#A45489] to-[#7A69A2] md:py-4 md:text-lg md:px-10"
                  >
                  Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}