"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeSettings() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="fixed top-4 right-4 p-2">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-14 h-8 bg-gray-100/70 dark:bg-white/10   rounded-full"
      >
        {/* Motion knob */}
        <motion.div
          className="absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center shadow-md"
          animate={{
            x: isDark ? 24 : 0, // slide right for dark mode
            backgroundColor: isDark ? "#d1d5db" : "#fde68a", // Tailwind: gray-300 / yellow-300
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isDark ? (
            <Moon size={14} className="text-gray-800" />
          ) : (
            <Sun size={14} className="text-yellow-600" />
          )}
        </motion.div>
      </button>
    </div>
  );
}
