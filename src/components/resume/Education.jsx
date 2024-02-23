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
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-4 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Engineering"
            subTitle="Bahir Dar University (2016 - 2021)"
            des="Bahir Dar University, located in the vibrant city of Bahir Dar, Ethiopia, stands as a beacon of higher education and academic excellence in the region."
          />
          <ResumeCard
            title="Full-Stack development training"
            subTitle="Na'amal (05/2023 - 11/2023)"
            des="Na'amal is a non-profit organization that provides aid to refugees. I learned both technical and soft skills in this training, which made it incredible. 
            Web development using the MERN stack was the primary emphasis of the technical skill. I feel more comfortable creating responsive, modern websites now that I've had this six-month training. "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education