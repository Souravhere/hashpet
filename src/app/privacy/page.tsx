"use client";

import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaLock, FaGavel } from 'react-icons/fa'; // Add relevant icons

// Updated Data for Privacy Policy (Sections)
const privacyData = [
  {
    title: "Welcome to HashPet",
    content: `
      Welcome to https://hashpet.io (the “Website”). This Privacy Policy outlines how Pet Tower Company (the “Company”, “us”, “we”, or “our”) collects, uses, and protects your information when you visit our Website and use our services.
    `,
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    title: "Information We Collect",
    content: `
      We collect various types of information in connection with the services we provide, including:
      - Personal Information: Name, email address, phone number, etc.
      - Non-Personal Information: Browser type, operating system, IP address, etc.
    `,
    icon: <FaExclamationTriangle className="text-yellow-500" />,
  },
  {
    title: "How We Use Your Information",
    content: `
      We use the information we collect for the following purposes:
      - To provide and maintain our services.
      - To improve, personalize, and expand our services.
      - To communicate with you, either directly or through one of our partners.
    `,
    icon: <FaLock className="text-blue-500" />,
  },
  {
    title: "Data Security",
    content: `
      We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access. However, no method of transmission over the internet or method of electronic storage is 100% secure.
    `,
    icon: <FaGavel className="text-red-500" />,
  },
  {
    title: "Third-Party Services",
    content: `
      Our services may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
    `,
    icon: <FaExclamationTriangle className="text-yellow-500" />,
  },
  {
    title: "Children's Privacy",
    content: `
      We do not knowingly collect personal information from children under the age of 13. If you believe that we have collected such information, please contact us immediately.
    `,
    icon: <FaLock className="text-blue-500" />,
  },
  {
    title: "Changes to This Privacy Policy",
    content: `
      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this policy.
    `,
    icon: <FaGavel className="text-red-500" />,
  },
  {
    title: "Your Rights",
    content: `
      Depending on your jurisdiction, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal information.
    `,
    icon: <FaExclamationTriangle className="text-yellow-500" />,
  },
  {
    title: "Contact Us",
    content: `
      If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
      Email: support@pettower.com
      Address: 123 Pet Lane, Pet City, PC 12345
    `,
    icon: <FaLock className="text-blue-500" />,
  },
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-fit flex items-center justify-center bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl p-5">
      <div className="h-full text-white">
        <motion.h1
          className="sm:text-5xl text-3xl font-bold text-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
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

const Page = () => {
  const { scrollYProgress } = useScroll();

  // Framer Motion Variants for Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-4">
      <HeroSection />
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        style={{ scale: scrollYProgress }}
      >
        Privacy Policy
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {privacyData.map((privacy, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              {privacy.icon}
              <h2 className="text-lg font-semibold ml-2">{privacy.title}</h2>
            </div>
            <p className="text-gray-600">{privacy.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
