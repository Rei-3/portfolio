"use client";
import { motion } from "motion/react";
import {
  Code,
  Server,
  Database,
  Settings,
  Palette,
  Terminal,
  Globe,
  Smartphone,
  FileCode,
  Brush,
  Camera,
  Video,
  GitBranch,
  Cloud,
  Zap,
  Badge,
  Sparkles,
} from "lucide-react";
import { HoverCard, HoverCardTrigger } from "../ui/hover-card";
import { HoverCardContent } from "@radix-ui/react-hover-card";

const skillCategories = [
  {
    title: "FRONTEND",
    color: "#22c55e",
    borderColor: "border-green-400",
    textColor: "text-green-400",
    icon: Code,
    skills: [
      {
        name: "React Native",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "React",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "HTML",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    title: "BACKEND",
    color: "#ef4444",
    borderColor: "border-red-400",
    textColor: "text-red-400",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Java",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "PHP",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        name: "Spring Boot",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      {
        name: "Laravel",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      },
    ],
  },
  {
    title: "DATABASE",
    color: "#3b82f6",
    borderColor: "border-blue-400",
    textColor: "text-blue-400",
    icon: Database,
    skills: [
      {
        name: "MariaDB",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg",
      },
      {
        name: "MySQL",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
      {
        name: "PostgreSQL",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "TOOLS",
    color: "#f59e0b",
    borderColor: "border-yellow-400",
    textColor: "text-yellow-400",
    icon: Settings,
    skills: [
      {
        name: "Git",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "HTTPie",
        iconUrl:
          "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/httpie.svg",
      },
      {
        name: "Vercel",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      },
    ],
  },
  {
    title: "CREATIVE",
    color: "#8b5cf6",
    borderColor: "border-purple-400",
    textColor: "text-purple-400",
    icon: Palette,
    skills: [
      {
        name: "Adobe Illustrator",
        iconUrl:
          "https://images.sftcdn.net/images/t_app-icon-s/p/f51224f2-96d0-11e6-8c51-00163ec9f5fa/2041745124/adobe-illustrator-icon.png",
      },
      {
        name: "Photoshop",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
      },
      {
        name: "GIMP",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg",
      },
      {
        name: "Filmora",
        iconUrl:
          "https://images.sftcdn.net/images/t_app-icon-s/p/dd0aaa64-9b53-11e6-a286-00163ed833e7/532636150/wondershare-filmora-video-editor-filmora-9-logo.png",
      },
      {
        name: "Vegas Pro",
        iconUrl:
          "https://images.sftcdn.net/images/t_app-icon-s/p/ae2e5944-28e6-469c-aec3-74325e254722/1822791693/vegas-pro-edit-Vegas_Pro_15.0.png",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="text-white py-16 px-4 relative">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`bg-gray-200 dark:bg-gray-900 rounded-2xl border ${category.borderColor} p-6 text-center relative shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header with Icon */}
              <div className="mb-6 flex flex-col items-center justify-center">
                <span className="mb-2">
                  <category.icon size={32} color={category.color} />
                </span>
                <h3 className={`text-lg font-bold ${category.textColor} dark:text-white drop-shadow`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-1">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col items-center">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <motion.div
                            className={`w-12 h-12 bg-gray-200 dark:bg-gray-400 rounded p-1 cursor-pointer`}
                            style={{
                              filter: `drop-shadow(0 0 5px ${category.color}30)`,
                            }}
                          >
                            <img
                              src={skill.iconUrl}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </motion.div>
                        </HoverCardTrigger>
                        <HoverCardContent className="text-base font-semibold text-center text-gray-900 dark:text-white bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg px-4 py-2">
                          {skill.name}
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
