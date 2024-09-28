"use client"

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const RoadmapSVG = () => {
  const ref = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  if (!isClient) return null // Return null on server-side

  return (
    <div ref={ref} className="absolute left-1/2 transform -translate-x-1/2 h-full w-full z-0 hidden md:block">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 390 1141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
      >
        <motion.path
          d="M133.5 3H198M262.5 3H198M198 3V82M198 82H15M198 82H364.5M198 82V388M198 388H0M198 388V423.5M198 423.5H364.5M198 423.5V752.5M198 752.5H15M198 752.5V782M198 782H364.5M198 782V1100C198 1120.99 215.013 1138 236 1138H389.5"
          stroke="#EA79AB"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength }}
        />
      </svg>
    </div>
  )
}

const QuarterBox = ({ year, quarter, items, color, isLeft, imageSrc }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [isLeft ? -50 : 50, 0, isLeft ? -50 : 50])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, x }}
      className={`p-4 rounded-lg shadow-lg ${color === 'pink' ? 'bg-pink-500' : 'bg-purple-500'} text-white mb-8 max-w-sm mx-auto`}
    >
      <Image src={imageSrc} alt={`${year} ${quarter}`} width={100} height={100} className="mx-auto mb-4 rounded-full" />
      <h3 className="text-2xl font-bold mb-2">{year} {quarter}</h3>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
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

  if (!isClient) return null // Return null on server-side

  return (
    <div className="relative min-h-[200vh] py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <RoadmapSVG />
        <h1 className="text-4xl font-bold text-center mb-12 relative z-10">Road Map</h1>
        <Image src="/placeholder.svg?height=100&width=100" alt="Pet Logo" width={100} height={100} className="mx-auto mb-8 relative z-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-16">
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
          <div className="space-y-16 mt-16 md:mt-32">
            <QuarterBox
              year="2025"
              quarter="Q1"
              items={[
                "Platform Service Development - 1.0 Ver",
                "Hashpet Partnership Expansion",
                "Hashpet wallet Beta launch",
                "Hashpet Partnership Expansion",
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