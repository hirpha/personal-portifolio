import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Sofware Engineering"
            subTitle="Jimma University (2018 - 2022)"
            result="3.83/4"
            des="I pursued my Bachelor's degree in Software Engineering at Jimma University from 2018 to 2022. During this four-year program, I gained a strong foundation in software development principles, algorithms, data structures, and various programming languages. I also acquired practical skills through hands-on projects and internships. My education at Jimma University equipped me with the knowledge and expertise needed to excel in the field of software engineering."
          />
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Education