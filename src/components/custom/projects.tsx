'use client'
import { motion, AnimatePresence } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "NORSU CSIT E-Class Record (Backend)",
        description: "Spring Boot Java backend application providing robust API endpoints for class record management with secure authentication and data processing.",
        technologies: ["SPRING BOOT", "JAVA", "REST API"],
        status: "COMPLETED",
        type: "BACKEND",
        url: "https://github.com/Rei-3/ClassRecord"
    },
    {
        id: 2,
        title: "NORSU CSIT E-Class Record (Frontend)",
        description: "Modern web interface built with Next.js providing intuitive class record management with real-time updates and responsive design.",
        technologies: ["NEXT.JS", "NODE.JS", "TYPESCRIPT"],
        status: "COMPLETED",
        type: "WEB",
        url: "https://github.com/Rei-3/ClassRecordFrontend"
    },
    {
        id: 3,
        title: "NORSU Document Tracing App",
        description: "Full-stack document tracking system enabling efficient document workflow management across different departments.",
        technologies: ["NEXT.JS", "LARAVEL", "PHP"],
        status: "ACTIVE",
        type: "FULLSTACK",
        url: ""
    },
    {
        id: 4,
        title: "NORSU CSIT E-Class Record (Mobile)",
        description: "Cross-platform mobile application using React Native and Expo for on-the-go class record access and management.",
        technologies: ["REACT NATIVE", "EXPO", "JAVASCRIPT"],
        status: "COMPLETED",
        type: "MOBILE",
        url: "https://github.com/Rei-3/classrecord-app"
    },
    {
        id: 5,
        title: "Toothfairy Web Application",
        description: "Custom web application built with PHP following MVC architectural pattern for dental clinic management system.",
        technologies: ["PHP", "MVC", "MYSQL"],
        status: "COMPLETED",
        type: "WEB",
        url: "https://github.com/Rei-3/PlatTechProject"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="text-white py-16 px-4 relative">
            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block border-2 border-red-500 bg-red-500/10 px-6 py-2 mb-4">
                        <h2 className="text-2xl md:text-4xl font-bold font-mono tracking-wider text-red-400">
                            PROJECT_ARCHIVE
                        </h2>
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                        CLASSIFIED_OPERATIONS_DATABASE
                    </div>
                </motion.div>

                {/* Project Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                        skipSnaps: false,
                        dragFree: false,
                    }}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        <AnimatePresence mode="sync">
                            {projects.map((project, index) => (
                                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        className="bg-black/80 border border-green-400 p-6 relative group hover:border-red-400 transition-all duration-300 h-full"
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        whileInView={{ 
                                            opacity: 1, 
                                            y: 0, 
                                            scale: 1,
                                            transition: { 
                                                duration: 0.8, 
                                                delay: index * 0.15,
                                                ease: "easeOut"
                                            }
                                        }}
                                        exit={{ 
                                            opacity: 0, 
                                            y: -50, 
                                            scale: 0.8,
                                            transition: { 
                                                duration: 0.6, 
                                                delay: (projects.length - index - 1) * 0.1,
                                                ease: "easeIn" 
                                            }
                                        }}
                                        viewport={{ once: false, margin: "-100px" }}
                                        whileHover={{ 
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                        layout
                                    >
                            {/* Corner indicators */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-yellow-400"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-yellow-400"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-yellow-400"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-yellow-400"></div>

                            {/* Project Status */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-green-400 font-mono text-xs">
                                    PROJECT_{String(project.id).padStart(3, '0')}
                                </div>
                                <div className="text-red-400 font-mono text-xs">
                                    STATUS: {project.status}
                                </div>
                            </div>

                            {/* Project Type Badge */}
                            <div className="mb-4">
                                <span className="text-xs font-mono bg-blue-600 border border-blue-400 px-2 py-1 text-blue-100">
                                    {project.type}
                                </span>
                            </div>

                            {/* Project Image Placeholder */}
                            <div className="w-full h-32 bg-gray-800 border border-gray-600 mb-4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-red-400/10"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-gray-500 font-mono text-xs">PROJECT_IMAGE</div>
                                </div>
                                {/* Scanning line */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/30 to-transparent h-1"
                                    initial={{ y: -10 }}
                                    animate={{ y: '140px' }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            {/* Project Title */}
                            <h3 className="text-lg font-bold font-mono text-white mb-3 group-hover:text-red-400 transition-colors">
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="text-gray-300 font-mono text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono bg-gray-800 border border-green-400 px-2 py-1 text-green-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                              
                                <motion.button
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-mono text-xs py-2 border border-green-500 transition-all duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)' }}
                                    onClick={() => window.open(project.url, "_blank")}
                                >
                                
                                    &gt; SOURCE_CODE
                                </motion.button>
                                  
                            </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                        </AnimatePresence>
                    </CarouselContent>
                    
                    {/* Custom Navigation Buttons with NERV styling */}
                    <CarouselPrevious className="left-4 bg-red-600 border-red-500 text-white hover:bg-red-700 hover:text-white font-mono" />
                    <CarouselNext className="right-4 bg-green-600 border-green-500 text-white hover:bg-green-700 hover:text-white font-mono" />
                </Carousel>

                {/* Navigation Indicator */}
                <div className="flex justify-center mt-8">
                    <div className="text-green-400 font-mono text-xs animate-pulse">
                        &lt; NAVIGATE_THROUGH_{projects.length}_PROJECTS &gt;
                    </div>
                </div>

                {/* Terminal-style command line */}
                <motion.div
                    className="mt-16 bg-black border border-green-400 p-4 font-mono text-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-green-400 mb-2">
                        NERV@PORTFOLIO:~$ ls -la projects/
                    </div>
                    <div className="text-gray-300">
                        total 20<br/>
                        drwxr-xr-x 8 nerv nerv 4096 Jul 23 2025 .<br/>
                        drwxr-xr-x 3 nerv nerv 4096 Jul 23 2025 ..<br/>
                        -rw-r--r-- 1 nerv nerv 3072 Jul 23 2025 norsu-eclass-backend.jar<br/>
                        -rw-r--r-- 1 nerv nerv 2560 Jul 23 2025 norsu-eclass-frontend.exe<br/>
                        -rw-r--r-- 1 nerv nerv 2816 Jul 23 2025 norsu-document-tracing.exe<br/>
                        -rw-r--r-- 1 nerv nerv 2048 Jul 23 2025 norsu-eclass-mobile.apk<br/>
                        -rw-r--r-- 1 nerv nerv 1920 Jul 23 2025 toothfairy-webapp.php<br/>
                    </div>
                    <div className="text-green-400 mt-2">
                        NERV@PORTFOLIO:~$ <span className="animate-pulse">_</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}