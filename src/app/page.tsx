"use client";

import Discover from "@/components/custom/discover";
import EducationExperience from "@/components/custom/education-experience";
import Skills from "@/components/custom/skills";
import Summary from "@/components/custom/summary";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";


export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="min-h-screen flex flex-col ">
        {/* Starting Point */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-screen h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
          {/* Base Background Image */}

          <motion.div
            className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover blur-xs"
            style={{
              backgroundImage: "url(/me-unwolf.jpg)",
              transform: "scale(1.2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Dark Mode Wolf Overlay - Half Screen */}
          <motion.div
            className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover blur-xs"
            style={{
              backgroundImage: "url(/wolf-me.jpg)",
              transform: "scale(1.2)",
              // clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: theme === "dark" ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Content Layer */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Discover />
          </motion.div>
        </motion.div>
        <motion.div className="bg-gray-100/70 dark:bg-gray-800/40 transition-colors duration-500">
          <Skills />
        </motion.div>

      <motion.div className="bg-gray-100/5 dark:bg-gray-900 px-4 py-4 md:py-4 transition-colors duration-500">
          <EducationExperience />
        </motion.div>

        {/* education and experience */}

        {/* Main*/}

        {/* Footer */}
       
      </div>
    </div>
  );
}
