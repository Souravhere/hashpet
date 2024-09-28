"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaHeart, FaChartLine, FaDatabase, FaUsers, FaLeaf } from 'react-icons/fa';

const aboutSections = [
  {
    title: "Company About",
    content: "Hash Pet Vision\nPet owners share information about their pets, we provide a variety of features that allow you to form a community and help each other.",
    icon: <FaInfoCircle className="text-pink-300 text-3xl mb-2" />
  },
  {
    title: "Hash Pet Values",
    content: "Skip the hassle, and log into your favourite deals, no matter where you are in the world.",
    icon: <FaHeart className="text-purple-300 text-3xl mb-2" />
  },
  {
    title: "Data-Driven Solutions",
    content: "Hash Pet is leading the WEB 3.0 era in the pet industry and aims to help pets and their owners enjoy happier and healthier lives. Through innovative technology and a user-centered approach, we will set a new standard in pet care and lead the growth of the global pet community.",
    icon: <FaChartLine className="text-pink-300 text-3xl mb-2" />
  },
  {
    title: "Big Data",
    content: "Based on the collected data, we share it with people in various industries to create new business opportunities, we promote the overall development of the pet industry and provide insights to improve services.",
    icon: <FaDatabase className="text-purple-300 text-3xl mb-2" />
  },
  {
    title: "Community Activation",
    content: "We build a social network where users can share experiences and information related to pets, help each other, and grow.",
    icon: <FaUsers className="text-pink-300 text-3xl mb-2" />
  },
  {
    title: "Sustainable Development & Social Responsibility",
    content: "Hash Pet attaches importance to sustainable development and social responsibility. We fulfill our social responsibilities by protecting abandoned animals, improving companion animal welfare, creating a fair trade environment, and cooperating with the local community. Through these efforts, we provide a sustainable future for both pets and their owners, and lead the development of the pet industry.",
    icon: <FaLeaf className="text-purple-300 text-3xl mb-2" />
  }
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-52 flex items-center justify-center bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl p-5">
    <motion.div
      className="relative w-auto flex items-center justify-end h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/logo.png" 
        alt="Welcome to Hash Pet"
        width={100}
        height={100}
      />
    </motion.div>
    <div className="w-1/2 h-full flex items-center justify-center text-white">
      <motion.h1
        className="sm:text-5xl text-3xl font-bold text-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Hash Pet
      </motion.h1>
    </div>
  </div>
  );
};

const page = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center bg-gray-100 p-5 py-24">
      <HeroSection />
      <h1 className="text-4xl font-bold mb-8 text-center mt-8">
        <span className='text-pink-300'>About Us</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutSections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center">
              {section.icon}
              <h2 className="text-xl font-semibold mb-2 ml-2">{section.title}</h2>
            </div>
            <p className="text-gray-700">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default page;