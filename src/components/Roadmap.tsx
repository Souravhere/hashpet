"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const BlackMainLine = () => (
  <svg width="101" height="1217" viewBox="0 0 101 1217" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 transform -translate-x-1/2 h-full">
    <g filter="url(#filter0_d_8337_11580)">
      <path d="M4.5 1H50.75M97 1H50.75M50.75 1V60V156.5V317V475.5V798V858.5V1209" stroke="black"/>
    </g>
    <defs>
      <filter id="filter0_d_8337_11580" x="0.5" y="0.5" width="100.5" height="1216.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8337_11580"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8337_11580" result="shape"/>
      </filter>
    </defs>
  </svg>
)

const PinkArrowLine = () => (
  <svg width="195" height="98" viewBox="0 0 195 98" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[10%] top-[25%] w-[40%] h-auto transform rotate-[-10deg]">
    <path fillRule="evenodd" clipRule="evenodd" d="M86.5251 34.38C77.189 30.3839 67.9217 26.5206 58.8601 22.8049C46.0326 17.5444 33.1988 12.3096 20.2466 7.5188C16.169 6.01189 12.0916 4.34785 7.99696 2.94004C5.4268 2.05583 2.00589 0.910629 1.54252 0.790713C1.29828 0.731944 1.16814 0.756003 1.12576 0.764471C0.828099 0.82328 0.793538 0.999759 0.859644 1.18123C0.884622 1.25741 0.949857 1.44567 1.2918 1.62944C24.1481 13.9449 49.2078 22.9825 72.7763 33.8709C113.646 52.758 154.757 74.3184 193.377 97.1117C193.715 97.3081 194.127 97.3248 194.279 97.1322C194.437 96.9501 194.279 96.6252 193.941 96.4288C155.256 73.5972 114.079 51.9984 73.1278 33.08C51.1633 22.9317 27.9034 14.3983 6.34878 3.30825C6.87934 3.48865 7.40016 3.6644 7.87513 3.82555C11.9542 5.22593 16.0121 6.88791 20.074 8.38739C32.9998 13.1656 45.8081 18.3884 58.6163 23.6468C74.5122 30.1638 91.0278 37.1178 107.488 44.5173C113.294 47.3379 119.08 50.1492 124.861 52.9722C137.367 59.0803 149.804 65.4846 162.086 71.9871C165.782 73.949 169.476 75.9167 173.18 77.8611C174.407 78.5081 177.564 80.1924 178.02 80.3944C178.583 80.6475 178.823 80.4186 178.855 80.3766C178.934 80.2856 178.984 80.1304 178.768 79.8779C178.747 79.8465 178.599 79.7045 178.224 79.4838C156.399 66.5928 132.211 54.6886 107.878 43.745C82.5631 31.4629 57.0918 19.2567 31.7857 7.12185C31.4227 6.94954 31.0432 6.98381 30.9378 7.19822C30.8334 7.41309 31.0428 7.72696 31.4031 7.9051C49.7278 16.69 68.1454 25.519 86.5251 34.38Z" fill="#EE339A"/>
  </svg>
)

const PinkLineArrow = () => (
  <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[5%] bottom-[30%] w-[5%] h-auto transform rotate-[10deg]">
    <path d="M36 1L8 6L13 31.5L1.5 1H36Z" fill="#EE339A" stroke="#EE339A"/>
  </svg>
)

const PurpleLine = () => (
  <svg width="193" height="101" viewBox="0 0 193 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[10%] top-[25%] w-[40%] h-auto transform rotate-[10deg]">
    <path fillRule="evenodd" clipRule="evenodd" d="M78.1607 50.5283C69.4533 55.7571 60.8974 61.015 52.5837 66.1969C40.8145 73.532 29.0634 80.8891 17.6201 88.6369C14.0186 91.0769 10.2845 93.4137 6.75707 95.9331C4.5425 97.5141 1.62169 99.6392 1.25582 99.9501C1.06672 100.117 1.01278 100.242 0.995743 100.283C0.875559 100.572 1.00503 100.717 1.19618 100.78C1.27484 100.809 1.47124 100.878 1.82178 100.711C25.2798 89.5704 47.2244 74.4282 69.8825 61.7532C109.178 39.7775 150.872 19.3516 192.186 1.82873C192.545 1.67302 192.794 1.33787 192.718 1.08435C192.654 0.831801 192.29 0.751116 191.931 0.906836C150.547 18.4599 108.783 38.9159 69.4145 60.9391C48.2976 72.7509 27.8067 86.7105 6.12759 97.5602C6.58295 97.2324 7.02881 96.9098 7.43616 96.6161C10.9484 94.1051 14.6697 91.7832 18.2559 89.3515C29.6736 81.6177 41.3999 74.274 53.1563 66.9539C67.7393 57.8631 83.0454 48.538 98.6964 39.5515C104.395 36.5197 110.075 33.4983 115.761 30.4891C128.063 23.9806 140.576 17.724 153.084 11.6617C156.853 9.84068 160.625 8.02582 164.383 6.18634C165.631 5.57868 168.856 4.02923 169.287 3.77865C169.823 3.47109 169.766 3.11888 169.749 3.06448C169.717 2.93821 169.614 2.79477 169.278 2.81061C169.239 2.8077 169.034 2.83937 168.634 3.00965C145.278 12.9061 121.407 25.4359 98.2665 38.7168C73.433 51.9465 48.5747 65.3571 23.871 78.6756C23.5181 78.8678 23.3305 79.2093 23.4516 79.4385C23.5737 79.6671 23.9585 79.6969 24.3147 79.5109C42.2014 69.8652 60.1783 60.1702 78.1607 50.5283Z" fill="#8A3FFE"/>
  </svg>
)

const PurpleLineArrow = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[5%] bottom-[30%] w-[5%] h-auto transform rotate-[-10deg]">
    <path d="M24.4659 34.2058L26.8661 5.86434L0.939794 4.10977L33.375 0.875977L24.4659 34.2058Z" fill="#8A3FFE" stroke="#8A3FFE"/>
  </svg>
)

const QuarterBox = ({ year, quarter, items, color }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={`p-4 rounded-lg shadow-lg ${color === 'pink' ? 'bg-pink-500' : 'bg-purple-500'} text-white mb-8 max-w-sm mx-auto`}
    >
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
  return (
    <div className="relative min-h-screen py-16 bg-gray-100">
      <BlackMainLine />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Road Map</h1>
        <Image src="/placeholder.svg?height=100&width=100" alt="Pet Logo" width={100} height={100} className="mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-16">
            <QuarterBox
              year="2024"
              quarter="Q2"
              items={["Hashpet project Reveal"]}
              color="pink"
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
            />
          </div>
        </div>
      </div>
      <PinkArrowLine />
      <PinkLineArrow />
      <PurpleLine />
      <PurpleLineArrow />
    </div>
  )
}