import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Application Developer"
            subTitle="Vintage Technology PLC - (2022 - Present)"
            result="Ethiapia"
            des="During my tenure at Vintege Technology PLC as an application developer, I have gained valuable experience and knowledge. Working with the company since 2022, I have accumulated two years of expertise in developing applications using the Flutter framework. Through successfully delivering over six applications, I have enhanced my skills in software development and contributed to the improvement of the company's software offerings."
          />
          <ResumeCard
            title="Flutter Developer"
            subTitle="Upwork - (2024 - present)"
            result="worldwide"
            des="As a Flutter Developer on Upwork, I have gained expertise in cross-platform app development, UI/UX design, API integration, and efficient coding. Effective communication and collaboration with clients have been crucial for exceeding expectations and delivering successful solutions."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Self Development"
            subTitle="Dereja Academy 2022"
            result="JIMMA ETHIOPIA"
            des="Dereja Academy provides professional training programs covering technical skills, leadership development, communication, project management, and more. Their practical approach and experienced instructors empower individuals to excel in their careers and achieve their professional goals."
          />
          {/* <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
