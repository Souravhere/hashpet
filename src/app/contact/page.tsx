"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8 py-28"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="p-8 md:w-1/2"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact</h1>
          <p className="text-gray-600 mb-4">
            If you have any questions about Hash Pet, please do not hesitate to contact us. We will respond by email as soon as possible.
          </p>
          <div className="flex items-center mb-4">
            <FiMail className="text-purple-600 mr-2" />
            <a href="mailto:help@hashpet.io" className="text-purple-600 hover:underline">
              help@hashpet.io
            </a>
          </div>
          <div className="mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-6 py-2 rounded-full inline-flex items-center"
              onClick={() => window.open('mailto:help@hashpet.io', '_blank')}
            >
              <FiMail className="mr-2" /> Email Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white px-6 py-2 rounded-full inline-flex items-center"
              onClick={() => window.open('https://t.me/yourTelegramHandle', '_blank')} // replace with your actual Telegram handle
            >
              <FaTelegramPlane className="mr-2" /> Telegram
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="p-8 md:w-1/2 bg-gradient-to-br from-purple-500 to-pink-500"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 rounded-md"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 rounded-md"
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md"
              onChange={handleInputChange}
              required
            />
            <textarea
              name="comment"
              placeholder="Your Comments"
              rows={4} // Changed from "4" (string) to 4 (number)
              className="w-full p-2 rounded-md"
              onChange={handleInputChange} // Removed unnecessary type assertion
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-purple-600 font-semibold py-2 rounded-md flex items-center justify-center"
            >
              <FiSend className="mr-2" /> Submit
            </motion.button>
          </form>
          <p className="text-white text-sm mt-4">
            By contacting us, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;
