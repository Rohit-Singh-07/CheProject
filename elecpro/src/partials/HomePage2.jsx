import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../assets/Footer.png"

const HomePage2 = () => {
  return (
    <>
      <div className="flex justify-end text-white">
        <motion.div
          className="bg-gradient-to-l from-orange-500 via-amber-400 flex justify-end w-[80vw]"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 1500 }}
          transition={{ ease: "linear" }}
          style={{
            fontFamily: "manrope",
          }}
        >
          <h1 className="text-[3vw] py-[2vh] w-[65vw] font-bold">
          Unlock the Potential: Features Overview
          </h1>
        </motion.div>
      </div>
      <div className=" bg-gradient-to-l from-black via-indigo-900 to-black">
        
        <div className="flex justify-between p-[5vw]">
          <div className="text-zinc-200 w-[50vw] text-[2vw] flex flex-col gap-[3vw]">
            <h2>
              Use insights from per capita energy consumption data to inform
              policy-making, <br />
              urban planning, and energy efficiency initiatives.
            </h2>
            <h2>
            Data-driven Insights: Access comprehensive data sets and analysis tools to uncover correlations, trends, and outliers
            </h2>
            <Link to="/powgeneration">
              <h3 className="text-[1.5vw] bg-gradient-to-r from-amber-700 to-amber-500 w-[8vw] h-[2.5vw] flex items-center justify-center rounded-full">
                Explore
              </h3>
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
          <img
            className="w-[22vw] h-[25vw] object-cover relative object-left rounded-md"
            src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          </motion.div>
        </div>
        <div className="flex justify-between px-[5vw] py-[4vw]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1,y: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <img
              className="w-[32vw] h-[24vw] object-cover object-left rounded-md"
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWNpdHl8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </motion.div>
          <div className="text-zinc-200 w-[50vw] text-[2vw] flex flex-col gap-[2vw]">
            <h2>
            Browse Electricity Sales: Explore our offerings for purchasing electricity, tailored to meet your specific needs and preferences.
            </h2>
            <h2>
            Keep up-to-date with the latest industry news, market trends, and regulatory updates that may impact electricity sales and pricing
            </h2>
            <Link to="/sales">
              <h3 className="text-[1.5vw] bg-gradient-to-r from-amber-700 to-amber-500 w-[9vw] h-[2.5vw] flex items-center justify-center rounded-full">
                Learn more
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage2;
