import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const Contact = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    // This Element makes the section scrollable via react-scroll when the "contact" target is triggered.
    <Element name="contact" className="relative overflow-hidden py-32 bg-black text-white">
      <div className="container mx-auto px-6 relative z-10">
        {/* Background Glow Effects for a subtle futuristic vibe */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-indigo-500 opacity-10 blur-3xl top-0 left-0 animate-pulse" />
          <div className="absolute w-80 h-80 bg-blue-500 opacity-10 blur-3xl bottom-0 right-0 animate-pulse" />
        </div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-16 tracking-wider uppercase nav"
        >
          Contact
        </motion.h2>

        {/* Glass-like Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl p-10 shadow-2xl max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-400 transition"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-400 transition"
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="p-4 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-400 transition resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="py-4 px-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full font-bold uppercase tracking-wider hover:from-indigo-700 hover:to-blue-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Element>
  );
};

export default Contact;
