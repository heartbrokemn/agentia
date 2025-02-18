"use client"; // Next.js 14 ke liye zaroori hai (if using app router)
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      {/* Contact Us Heading Animation */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-purple-500 mb-6"
      >
        Contact Us
      </motion.h1>

      {/* Contact Form Animation */}
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gray-900 p-6 rounded-lg shadow-xl border border-purple-500 w-full max-w-lg space-y-4"
      >
        {/* Name Input */}
        <div>
          <label className="block text-sm font-semibold text-purple-400">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-purple-500"
            placeholder="Enter your name..."
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold text-purple-400">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-purple-500"
            placeholder="Enter your email..."
          />
        </div>

        {/* Message Box */}
        <div>
          <label className="block text-sm font-semibold text-purple-400">Message</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-purple-500"
            placeholder="Write your message..."
          />
        </div>

        {/* Submit Button with Animation */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </div>
  );
}
