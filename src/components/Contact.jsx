import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <motion.div
          className="pb-8"
          initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0 , opacity:1}}
          transition={{ duration: 5, type: "spring" }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </motion.div>

        <div className=" flex justify-center items-center">
          <motion.form
            action="https://getform.io/f/7dd65348-d11c-40fa-be32-7d2bfad053f8"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            initial={{ y: 50, opacity:0 }}
            whileInView={{ y: 0 , opacity:1}}
            transition={{ duration: 5, type: "spring" }}
            animate={{}}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
