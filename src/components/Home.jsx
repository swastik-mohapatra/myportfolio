import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2
            className="text-4xl sm:text-7xl font-bold text-white"
            initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            I'm a Front End Developer
          </motion.h2>
          <motion.p
            className="text-gray-500 py-4 max-w-md"
            initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            I have a year of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Bootstrap , jQuery etc.
          </motion.p>

          <div>
            <motion.Link
              initial={{ y: 50, opacity:0 }}
              whileInView={{ y: 0, opacity:1 }}
              transition={{ duration: 1, type: "spring" }}
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </motion.Link>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
