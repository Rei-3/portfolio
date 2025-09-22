"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Discover() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto flex items-center justify-center text-center px-4 gap-8"
    >
      {/* Profile Image with Crossfade */}
      <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md">
        {/* Light Theme Image */}
        <motion.div
          initial={false}
          animate={{ opacity: theme === "light" ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          suppressHydrationWarning
        >
          <Image
            src="/main-pic.png"
            alt="Christan C Endan"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Dark Theme Image */}
        <motion.div
          initial={false}
          animate={{ opacity: theme === "dark" ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          suppressHydrationWarning
        >
          <Image
            src="/me-bw.png"
            alt="Christan C Endan (Dark)"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Name and Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Christan C Endan
        </h1>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Full Stack Developer — Crafting scalable, clean, and modern web
          experiences.
        </p>
      </motion.div>
    </motion.div>
  );
}
