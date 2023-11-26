import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const JobDetails = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-4 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity:0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium">
          {time}|{address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Jobs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div
      name="jobs"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          className="pb-8"
          initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
          transition={{ duration: 5, type: "spring" }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">
            Experience
          </p>
        </motion.div>
        <div ref={ref} className="w-full mx-auto relative mt-10">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            initial={{ y: 50, opacity:0 }}
          whileInView={{ y: 0, opacity:1 }}
          transition={{ duration: 5, type: "spring" }}
            className="absolute left-9 top-0 w-[4px] h-full bg-white origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <JobDetails
              position="Software Enhineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-present"
              address="Bangalore"
              work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit recusandae nulla dolore similique omnis, adipisci expedita quasi, quae quibusdam quia quaerat incidunt consequuntur."
            />

            <JobDetails
              position="Software Enhineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-present"
              address="Bangalore"
              work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit recusandae nulla dolore similique omnis, consequuntur."
            />
             <JobDetails
              position="Software Enhineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-present"
              address="Bangalore"
              work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit recusandae nulla dolore similique omnis, consequuntur."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
