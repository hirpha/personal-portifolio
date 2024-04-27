import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Application Developer"
            subTitle="Application Developer"
            result="Success"
            des="Notable achievements at Vintege Technology PLC: Developed and delivered 6+ Flutter applications, enhancing software offerings and exceeding client expectations. Built strong client relationships and continuously improved skills."
          />
         
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Developed Over 6 apps"
            subTitle="Fullstack Developer"
            result="Success"
            des="Developed and deployed multiple successful Flutter applications, surpassing client expectations. Implemented innovative solutions, resulting in improved user experience and increased client satisfaction. Collaborated effectively with cross-functional teams and consistently met project deadlines."
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
