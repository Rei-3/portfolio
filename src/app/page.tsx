"use client";

import Discover from "@/components/custom/discover";
import EducationExperience from "@/components/custom/education-experience";
import Skills from "@/components/custom/skills";
import ThemeSettings from "@/components/custom/theme-settings";
import ContactButtons from "@/components/layout/contact-buttons";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="min-h-screen flex flex-col ">
        {/* Starting Point */}
        <div
          className="w-screen h-screen bg-[radial-gradient(circle_at_69%_85%,violet,indigo,indigo)] 
         dark:bg-[radial-gradient(circle_at_69%_85%,rgb(75,85,99),rgb(17,24,39),rgb(0,0,0))]
         flex flex-col items-center justify-center px-4 transition-colors duration-500"
        >
          {/* Header */}
        
          <Discover />
          <ContactButtons />
        </div>
        <EducationExperience />
        {/* Floating Theme Toggle */}

        <Skills />
        <ThemeSettings />

        {/* Main*/}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
