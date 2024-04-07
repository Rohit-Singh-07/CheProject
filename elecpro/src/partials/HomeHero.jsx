import React from "react";
import blueLight from '../assets/blueLight.mp4'
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <div>
      <div className="flex justify-center items-start overflow-hidden bg-black relative mt-14">
        <video
          className="w-[100vw] h-[99vh] p-0 object-cover py-[5vh] font-sans"
          src={blueLight}
          muted
          autoPlay
          loop
        ></video>
        <div className="font-bold text-[3vw] absolute top-0">
          <h1 className="">AmpereAtlas</h1>
        </div>
        <div
          className="left-0 absolute text-[4vw] pt-[25vh] px-[5vw] font-semibold"
          style={{
            fontFamily: "manrope",
          }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }}
            >
              <h1 className="bg-gradient-to-r from-amber-400 via-amber-200 to-indigo-100 text-transparent bg-clip-text pb-1">Empowering Insight,</h1>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }}
            >
              <h1 className="bg-gradient-to-r from-indigo-500 to-indigo-100 text-transparent bg-clip-text pb-1">
                Illuminating Energy Trends.
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
