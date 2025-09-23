"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import ContactButtons from "../layout/contact-buttons";

export default function Discover() {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-4xl mx-auto flex items-center justify-center px-4 py-12 md:py-20"
    >
      {/* Info Card with Integrated Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex-1 lg:max-w-4xl"
      >
        <Card className="bg-blur-sm backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-0 shadow-2xl relative overflow-visible">
          <CardHeader className="pb-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-start gap-4"
            >
              {/* Small Profile Image with Hover Effect */}
              <motion.div
                className="relative flex-shrink-0"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
              >
                {/* Small Image */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src="/me-bw.png"
                    alt="Christan C Endan"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    priority
                  />
                </div>

                {/* Expanded Image on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute top-0 left-full ml-4 z-50"
                    >
                      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gray-200">
                        <Image
                          src="/me-bw.png"
                          alt="Christan C Endan - Full Stack Developer"
                          fill
                          className="object-cover grayscale-0"
                          priority
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Name and Title */}
              <div className="flex-1 min-w-0">
                <CardTitle className="text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                  Christan C. Endam
                </CardTitle>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 rounded-full"></div>
                <p className="text-sm text-gray-900 dark:text-gray-400 mt-1 font-medium">
                  Full Stack Developer
                </p>
              </div>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
            >
              Full Stack Developer & Creative Artist — Transforming ideas into exceptional digital experiences with modern, scalable solutions and artistic vision.
            </motion.p>

           

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <ContactButtons />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}