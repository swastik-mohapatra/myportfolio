import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          className="pb-8"
          initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>

        <motion.p
          className="text-xl mt-20"
          initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </motion.p>

        <br />

        <motion.p
          className="text-xl"
          initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
