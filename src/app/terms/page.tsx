"use client"
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaLock, FaGavel } from 'react-icons/fa'; // Add relevant icons

// Updated Data for Terms of Service (Sections)
const termsData = [
  {
    title: "Welcome to HashPet",
    content: `
      Welcome to https://hashpet.io (the “Website”). This Terms of Use Agreement (the “Agreement”) is made and entered into by and between you and Pet Tower Company (the “Company”, “us”, “we”, or “our”). This Agreement sets forth the terms and conditions that govern your use of and access to the Website and any products, materials, and services provided by or on the Website (collectively, the “Services”).
    `,
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    title: "Acceptance of this Agreement",
    content: `
      Please review the following terms carefully. By accessing or using the Services (or by clicking on “accept” or “agree” to this Agreement when prompted), you agree to be bound by the terms and conditions of this Agreement on behalf of yourself or the entity or organization that you represent. If you do not agree to the terms and conditions of this Agreement, you may not use or access the Services and must exit the Website immediately.
    `,
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    title: "Eligibility Requirements",
    content: `
      To use the Website or any other Services, you must be (i) at least 18 years old, and (ii) not a competitor of or using the Services for purposes that are competitive with the Company. By accessing or using the Services, you represent and warrant that you meet all the foregoing eligibility requirements.
    `,
    icon: <FaExclamationTriangle className="text-yellow-500" />,
  },
  {
    title: "Changes to this Agreement",
    content: `
      The Company reserves the right to change this Agreement from time to time in its sole discretion without notice to you. The latest version of the Agreement will be posted on the Website and should be reviewed prior to accessing or using the Services. All changes will be effective immediately when posted on the Website.
    `,
    icon: <FaLock className="text-blue-500" />,
  },
  {
    title: "Access to the Services",
    content: `
      The Services may change from time to time as the Company evolves. The Company reserves the right to modify, withdraw, or discontinue the Services, in whole or in part, at any time without notice to you. You agree that the Company shall have no liability to you for any losses or damages caused by the Services not being available.
    `,
    icon: <FaGavel className="text-red-500" />,
  },
  {
    title: "Policy for Using the Services",
    content: `
      You may use the Services for lawful purposes only and in accordance with this Agreement. You agree not to use the Services in any way that could damage the Services or general business of the Company.
    `,
    icon: <FaExclamationTriangle className="text-yellow-500" />,
  },
  {
    title: "Intellectual Property Rights",
    content: `
      All intellectual property rights, including copyrights, trademarks, trade secrets, and patents, in the Services and its contents, features, and functionality are owned by the Company, its licensors, or other providers of such material.
    `,
    icon: <FaGavel className="text-red-500" />,
  },
  {
    title: "Assumption of Risk",
    content: `
      The information presented on or through the Services is made available for general information purposes only. The Company does not warrant the accuracy or completeness of any such information.
    `,
    icon: <FaExclamationTriangle className="text-yellow-500" />,
  },
  {
    title: "Privacy",
    content: `
      We do not knowingly collect or solicit personally identifiable information from children under 13 years old. If you believe that a child under 13 years old may have provided us personal information, please contact us.
    `,
    icon: <FaLock className="text-blue-500" />,
  },
  {
    title: "Third-Party Links and Ads",
    content: `
      The Services may contain links to third-party websites and resources. The Company does not endorse any third-party links and is not responsible for their contents.
    `,
    icon: <FaExclamationTriangle className="text-yellow-500" />,
  },
  {
    title: "Termination",
    content: `
      The Company may suspend or terminate your access to the Services at any time for any breach of the terms of this Agreement. Upon termination, your right to access and use the Services will immediately cease.
    `,
    icon: <FaGavel className="text-red-500" />,
  },
  {
    title: "No Warranty",
    content: `
      THE SERVICES ARE PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS. USE OF THE SERVICES IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND.
    `,
    icon: <FaLock className="text-blue-500" />,
  },
  // Add more sections as needed
];
const HeroSection = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl p-5">
    <div className=" h-full text-white">
      <motion.h1
        className="sm:text-4xl text-3xl font-bold text-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Terms of Service
      </motion.h1>
      <motion.p
        className="sm:text-xl text-sm font-bold text-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Effective Date: August 7, 2024
      </motion.p>
    </div>
  </div>
  );
};
const Page = () => { // Changed 'page' to 'Page'
  const { scrollYProgress } = useScroll();

  // Framer Motion Variants for Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-4">
    <HeroSection/>
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        style={{ scale: scrollYProgress }}
      >
        Terms of Service
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {termsData.map((term, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              {term.icon}
              <h2 className="text-lg font-semibold ml-2">{term.title}</h2>
            </div>
            <p className="text-gray-600">{term.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
