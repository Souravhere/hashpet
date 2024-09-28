"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCoins, FaPercentage, FaHandsHelping, FaChartPie, FaGlobe, FaHeart } from "react-icons/fa";

// Define interfaces for types
interface TokenInfo {
  label: string;
  value: string;
}

interface TokenAllocation {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const tokenInfo: TokenInfo[] = [
  { label: "Network", value: "BSC (Binance Smart Chain)" },
  { label: "Token Name", value: "Hash Pet Token" },
  { label: "Ticker", value: "Hash Pet" },
  { label: "Decimal", value: "18" },
  { label: "Total Issuance", value: "10,000,000,000 Hash Pet" },
  { label: "Contract Address", value: "0x8e3Ec4184C8dF07418D8aDFfaa7ADfc5DEdb521C" },
];

const tokenAllocation: TokenAllocation[] = [
  { label: "Sale", value: "25%", icon: <FaCoins className="text-pink-500" /> },
  { label: "Team & Advisor", value: "20%", icon: <FaHandsHelping className="text-purple-500" /> },
  { label: "Marketing & Operation", value: "20%", icon: <FaGlobe className="text-pink-500" /> },
  { label: "Bounty", value: "5%", icon: <FaPercentage className="text-purple-500" /> },
  { label: "Ecosystem", value: "20%", icon: <FaChartPie className="text-pink-500" /> },
  { label: "Reserve", value: "10%", icon: <FaHeart className="text-purple-500" /> },
];

const howToUseToken = [
  "Service use and payment",
  "Marketplace",
  "Platform transaction fees",
  "Donations and Social Contribution",
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

const TokenCard = ({ info }: { info: TokenInfo }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-lg font-semibold text-gray-800">{info.label}</h3>
      <p className="text-gray-600">{info.value}</p>
    </motion.div>
  );
};

const TokenAllocationCard = ({ alloc }: { alloc: TokenAllocation }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 hover:bg-purple-50 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {alloc.icon}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{alloc.label}</h3>
        <p className="text-gray-600">{alloc.value}</p>
      </div>
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6 py-24">
      <HeroSection />

      {/* Token Info Section */}
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-8 mt-3">Hash Pet Token Details</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {tokenInfo.map((info, index) => (
          <TokenCard key={index} info={info} />
        ))}
      </motion.div>

      {/* Token Allocation Section */}
      <h2 className="text-3xl font-bold text-center text-purple-500 mb-8">Token Allocation</h2>
      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Token Allocation Image */}
        <Image
          src="/chart.png" // Replace with the correct path of your image
          alt="Token Allocation"
          width={800}
          height={600}
          className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-lg shadow-md mb-8"
        />
        {tokenAllocation.map((alloc, index) => (
          <TokenAllocationCard key={index} alloc={alloc} />
        ))}
      </motion.div>

      {/* How to Use Section */}
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">How to Use Hash Pet Token</h2>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg text-gray-700 w-full sm:w-2/3 lg:w-1/2 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <ul className="list-disc list-inside space-y-2">
          {howToUseToken.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Page;
