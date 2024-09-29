"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaRegFileAlt, FaCheckCircle } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { RiRoadMapLine } from "react-icons/ri";

const WhitepaperPage = () => {
  // Variants for scrolling animation
  const scrollVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 sm:px-6 px-3 py-24"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="p-8 text-center"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-indigo-600">Hash Pet</span> Whitepaper
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Dive deep into the comprehensive details and vision behind Hash Pet.
            Download our whitepaper in English or Korean to explore the full
            insights and technological foundation of our ecosystem.
          </p>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scrollVariant}
          className="flex flex-col md:flex-row justify-center items-center gap-8 p-8"
        >
          <motion.div
            custom={1}
            variants={scrollVariant}
            className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              <FaRegFileAlt className="inline-block mr-2" />
              Download Whitepaper
            </h2>
            <p className="text-white mb-6">
              Get the detailed whitepaper in your preferred language.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              {/* English Whitepaper Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-6 py-3 rounded-full inline-flex items-center justify-center font-semibold shadow hover:shadow-md transition-all"
                onClick={() =>
                  window.open("https://www.hashpet.io/hashpet_whitepaper_en.pdf", "_blank")
                }
              >
                <FiDownload className="mr-2" /> English Version
              </motion.button>

              {/* Korean Whitepaper Button */}
              <motion.button  
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-600 px-6 py-3 rounded-full inline-flex items-center justify-center font-semibold shadow hover:shadow-md transition-all"
                onClick={() =>
                  window.open("https://www.hashpet.io/hashpet_whitepaper_ko.pdf", "_blank")
                }
              >
                <FiDownload className="mr-2" /> Korean Version
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Section */}
        <motion.div
          custom={2}
          variants={scrollVariant}
          className="p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            What&apos;s Inside the Whitepaper?
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Our whitepaper covers all aspects of Hash Pet&apos;s mission,
            technological foundation, and market potential. It provides a deep
            dive into the project&apos;s features, roadmap, and future vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div
              custom={3}
              variants={scrollVariant}
              className="flex items-start space-x-4"
            >
              <IoMdRocket size={60} className="text-indigo-600 text-5xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Vision and Mission
                </h4>
                <p className="text-gray-600">
                  Overview of Hash Pet&apos;s mission to revolutionize the pet tech
                  industry with innovative blockchain solutions.
                </p>
              </div>
            </motion.div>
            <motion.div
              custom={4}
              variants={scrollVariant}
              className="flex items-start space-x-4"
            >
              <BsGraphUp size={60} className="text-indigo-600 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Market Analysis
                </h4>
                <p className="text-gray-600">
                  Detailed analysis of the market landscape and how Hash Pet
                  plans to disrupt the traditional norms with technology.
                </p>
              </div>
            </motion.div>
            <motion.div
              custom={5}
              variants={scrollVariant}
              className="flex items-start space-x-4"
            >
              <FaCheckCircle size={60} className="text-indigo-600 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Technological Foundation
                </h4>
                <p className="text-gray-600">
                  In-depth information on the technological backbone powering
                  Hash Pet&apos;s ecosystem.
                </p>
              </div>
            </motion.div>
            <motion.div
              custom={6}
              variants={scrollVariant}
              className="flex items-start space-x-4"
            >
              <RiRoadMapLine size={60} className="text-indigo-600 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Roadmap</h4>
                <p className="text-gray-600">
                  Explore the development roadmap, including key milestones and
                  future plans for expansion.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhitepaperPage;
