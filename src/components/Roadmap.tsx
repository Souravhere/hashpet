"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

const CustomTimelineSVG = ({ isMobile = false }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const mobilePath = "M10 0 V1000"
  const desktopPath = "M50 0 V1000 M20 100 H80 M80 300 H20 M20 500 H80 M80 700 H20 M20 900 H80"

  return (
    <div ref={ref} className={`absolute ${isMobile ? 'left-4' : 'left-1/2 transform -translate-x-1/2'} h-full w-full z-0`}>
      <svg
        width={isMobile ? "20" : "100%"}
        height="90%"
        viewBox={isMobile ? "0 0 20 2000" : "0 0 100 2000"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="absolute top-0"
      >
        <motion.path
          d={isMobile ? mobilePath : desktopPath}
          stroke="#EA79AB"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength }}
        />
        {[100, 300, 500, 700, 900].map((y, index) => (
          <motion.circle
            key={index}
            cx={isMobile ? "10" : "50"}
            cy={y}
            r="8"
            fill="#EA79AB"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
          />
        ))}
      </svg>
    </div>
  )
}

interface QuarterBoxProps {
  year: string;
  quarter: string;
  items: string[];
  color: 'pink' | 'purple';
  isLeft: boolean;
  imageSrc: string;
}

const QuarterBox: React.FC<QuarterBoxProps> = ({ year, quarter, items, color, isLeft, imageSrc }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const x = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [isLeft ? -50 : 50, 0, 0]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const bgColor = color === 'pink' ? 'bg-[#EE339A]' : 'bg-[#8A3FFE]'

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className={`p-4 rounded-lg shadow-lg bg-white ${color === 'pink' ? 'text-[#EE339A]' : 'text-[#8A3FFE]'} mb-8 max-w-sm mx-auto`}
    >
      <Image src={imageSrc} alt={`${year} ${quarter}`} width={100} height={100} className="mx-auto mb-4 rounded-full" />
      <h3 className={`text-2xl font-bold mb-2 text-center ${bgColor} text-white rounded-xl py-2`}>{year} {quarter}</h3>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Roadmap() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="relative min-h-[200vh] py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="md:hidden">
          <CustomTimelineSVG isMobile={true} />
        </div>
        <div className="hidden md:block">
          <CustomTimelineSVG />
        </div>
        <motion.h1
          className="text-4xl font-bold text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Road Map
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/cat1.png" alt="Pet Logo" width={100} height={100} className="mx-auto mb-8 relative z-10" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-16 md:mt-16 md:pr-8">
            <QuarterBox
              year="2024"
              quarter="Q2"
              items={["Hashpet project Reveal"]}
              color="pink"
              isLeft={true}
              imageSrc="/cat-footprint-pink.png"
            />
            <QuarterBox
              year="2024"
              quarter="Q3"
              items={[
                "Issuance Hashpet Token",
                "Hashpet Whitepaper ver 1.0 release",
                "Hashpet Website Open",
                "Hashpet community open"
              ]}
              color="pink"
              isLeft={true}
              imageSrc="/cat-footprint-pink.png"
            />
            <QuarterBox
              year="2024"
              quarter="Q4"
              items={[
                "Global Exchange Listing",
                "Continue growing a partnership",
                "Global collaboration",
                "Support app building and development"
              ]}
              color="pink"
              isLeft={true}
              imageSrc="/cat-footprint-pink.png"
            />
          </div>
          <div className="space-y-16 mt-16 md:mt-48 md:pl-8">
            <QuarterBox
              year="2025"
              quarter="Q1"
              items={[
                "Platform Service Development - 1.0 Ver",
                "Hashpet Partnership Expansion",
                "Hashpet wallet Beta launch",
                "Hashpet Reward system open"
              ]}
              color="purple"
              isLeft={false}
              imageSrc="/cat-footprint-purple.png"
            />
            <QuarterBox
              year="2025"
              quarter="Q2"
              items={[
                "Platform Service Development - 1.0 Ver",
                "Back-End Dev.",
                "Front-End Dev.",
                "Hashpet Reward system open"
              ]}
              color="purple"
              isLeft={false}
              imageSrc="/cat-footprint-purple.png"
            />
            <QuarterBox
              year="2025"
              quarter="Q3"
              items={[
                "PetWalk Service Beta Open",
                "Petple Service Beta Open",
                "Petdoc Service Beta Open",
                "Petparazzi Service Beta Open",
                "Hello Pet Service Beta Open"
              ]}
              color="purple"
              isLeft={false}
              imageSrc="/cat-footprint-purple.png"
            />
            <QuarterBox
              year="2025"
              quarter="Q4"
              items={[
                "Platform Management System Upgrade",
                "Engaged, thriving digital content ecosystem",
                "Service stabilization"
              ]}
              color="purple"
              isLeft={false}
              imageSrc="/cat-footprint-purple.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}