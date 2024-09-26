"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    title: "Hello Pet",
    description: "Pet owners share information about their pets, we provide a variety of features that allow you to form a community and help each other.",
    image: "/image-1@2x.png",
    features: ["Social Community", "Information Sharing", "Events and Gatherings"]
  },
  {
    title: "PetPle",
    description: "This service provides wellness solutions for pets and pet owners. PetPle promotes the health and happiness of pets through a variety of care options for pets. We promote convenience in the lives of pet owners.",
    image: "/image@2x.png",
    features: ["Location-based Services", "Activity tracking & Recording", "Reward System"]
  },
  {
    title: "Pet Parazzi",
    description: "Enjoy recording moments with your pets and sharing them with other users. At the same time, you can receive various rewards and reminisce about happy memories with your pet.",
    image: "/image-2@2x.png",
    features: ["Information sharing", "Daily Challenge", "Events & Promotions"]
  },
  {
    title: "Pet Walk",
    description: "Pet owners and pets can be active together and enjoy receiving rewards.",
    image: "/image-3@2x.png",
    features: ["Group activity", "Function", "Reward System"]
  }
]

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-pink-500 mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.p 
          className="text-center text-lg mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join your Pet Life with <span className="text-pink-500">#Pet</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white sm:flex relative rounded-lg shadow-lg p-6 z-10">
                <div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                <div className="relative h-[500px] w-full mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <ul className="space-y-2 absolute top-1 right-2 backdrop-blur-sm p-3 rounded-xl border border-pink-300">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 }}
                    >
                      <svg className="w-4 h-4 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div 
                className={`absolute top-1/2 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-16 h-16 ${index % 2 === 0 ? 'bg-pink-300' : 'bg-purple-300'} rounded-full z-0`}
                style={{
                  clipPath: index % 2 === 0 ? 'polygon(0 0, 100% 0, 100% 100%, 50% 100%)' : 'polygon(0 0, 50% 0, 100% 100%, 0 100%)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}