"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; // Icon for download button
import Image from 'next/image'; // Import Image component

// Define a TypeScript interface for the resource data
interface Resource {
  title: string;
  description: string;
  link: string;
  image: string;
  icon: React.ReactNode; // ReactNode for the icon
}

// Define the resources data array with proper types
const resourcesData: Resource[] = [
  {
    title: "Get the Logo",
    description: "Download the logo and brush up on usage guidelines.",
    link: "/logo.png", // Change this to the actual path of your logo
    image: "/logo.png", // Add the path to your logo preview
    icon: <FaDownload className="text-blue-500" />,
  },
  {
    title: "Characters",
    description: "Explore our characters and their usage in your content.",
    link: "/cat3.png", // Change this to the actual path of your character resource
    image: "/cat3.png", // Add the path to your character preview
    icon: <FaDownload className="text-blue-500" />,
  },
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl p-5">
      <div className="h-full text-white text-center">
        <motion.h1
          className="sm:text-5xl text-4xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Brand & Press
        </motion.h1>
        <motion.p
          className="sm:text-xl text-lg mt-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Brand
        </motion.p>
      </div>
    </div>
  );
};

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={resource.image}
        alt={resource.title}
        width={500} // Specify the width
        height={300} // Specify the height
      />
      <div className="flex items-center mb-4">
        {resource.icon}
        <h2 className="text-lg font-semibold ml-2">{resource.title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{resource.description}</p>
      <a
        href={resource.link}
        download
        className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-center flex items-center justify-center"
      >
        <FaDownload className="mr-2" />
        Download
      </a>
    </motion.div>
  );
};

const ResourcesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {resourcesData.map((resource, index) => (
        <ResourceCard key={index} resource={resource} />
      ))}
    </div>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-24 px-4">
      <HeroSection />
      <motion.h1
        className="text-4xl font-bold text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        HashPet’s brand represents a new popularization of the pet market.
      </motion.h1>
      <motion.p
        className="text-center text-gray-600 mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        We created these resources to empower you to utilize the Hash Pet brand while maintaining our brand integrity. 
        Below you will find the logo and character resources that you can easily download.
      </motion.p>
      <ResourcesSection />
    </div>
  );
};

export default Page;
