'use client';
import { motion } from "motion/react";
import { ExternalLink, Github, Smartphone, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProjectsComponent() {
    const projects = [
        {
            title: "Capstone: NORSU CSIT E-Class Record (Web App)",
            description: "A comprehensive web application for managing class records with real-time updates and analytics dashboard for educators. Spring Boot was used to develop the backend REST API.",
            picture: "/projects/class-record-web.png",
            link: ["https://github.com/Rei-3/ClassRecordFrontend", "https://github.com/Rei-3/ClassRecord"],
            type: "web",
            tags: ["Next.Js", "Redux Toolkit", "TailwindCSS", "MariaDB", "Spring Boot", "REST API Integration"]
        },
        {
            title: "Capstone: NORSU CSIT E-Class Record (Mobile App)",
            description: "Mobile application enabling teachers to efficiently scan Student IDs for attendance tracking with offline capability. PS: This was made in 3 days.",
            picture: {
                pic1: "/projects/class-record-mobile.png",
                pic2: "/projects/class-record-mobile-2.png"
            },
            link: "https://github.com/Rei-3/classrecord-app",
            type: "mobile",
            tags: ["React Native", "Expo", "QR Scanner", "REST API Integration", "Redux Toolkit"]
        },
        {
            title: "Pokemon Guessing Game (Web App)",
            description: "Interactive web game where users test their Pokemon knowledge by guessing creatures from their silhouettes with score tracking.",
            picture: "/projects/poke-guess.png",
            link: "https://pokemon-guess-v1.vercel.app",
            type: "web",
            tags: ["React.JS Class Component", "Pokemon API", "Game Development"]
        },
        {
            title: "Dental Appointment System (Web App)",
            description: "Complete dental clinic management system for scheduling appointments, patient records, and treatment planning.",
            picture: "/projects/dentistry.png",
            link: "https://github.com/Rei-3/PlatTechProject",
            type: "web",
            tags: ["PHP", "MySQL", "Bootstrap"]
        }
    ];

    return (
        <section id="projects" className="mt-5">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                        Sample Works
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of what I can do
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border-0 bg-card">
                                {/* Project Image */}
                                <div className="relative h-48 bg-muted overflow-hidden">
                                    {typeof project.picture === 'string' ? (
                                        <Image
                                            src={project.picture}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="flex h-full">
                                            <div className="flex-1 relative">
                                                <Image
                                                    src={project.picture.pic1}
                                                    alt={`${project.title} - Screen 1`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 relative border-l-2 border-white dark:border-gray-700">
                                                <Image
                                                    src={project.picture.pic2}
                                                    alt={`${project.title} - Screen 2`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Project Type Badge */}
                                    <div className="absolute top-4 left-4">
                                        <Badge variant={project.type === 'mobile' ? 'default' : 'secondary'} className="gap-1">
                                            {project.type === 'mobile' ? <Smartphone size={14} /> : <Monitor size={14} />}
                                            {project.type === 'mobile' ? 'Mobile App' : 'Web App'}
                                        </Badge>
                                    </div>
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                                </div>

                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <Badge 
                                                key={tagIndex}
                                                variant="outline"
                                                className="text-xs"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        {Array.isArray(project.link) ? (
                                            // Multiple links (Frontend & Backend)
                                            <>
                                                <Button asChild className="flex-1 gap-2" variant="default">
                                                    <a href={project.link[0]} target="_blank" rel="noopener noreferrer">
                                                        <Github size={16} />
                                                        Frontend
                                                    </a>
                                                </Button>
                                                <Button asChild className="flex-1 gap-2" variant="outline">
                                                    <a href={project.link[1]} target="_blank" rel="noopener noreferrer">
                                                        <Github size={16} />
                                                        Backend
                                                    </a>
                                                </Button>
                                            </>
                                        ) : (
                                            // Single link
                                            <Button asChild className="flex-1 gap-2" variant="default">
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    {project.link.includes('github.com') ? (
                                                        <>
                                                            <Github size={16} />
                                                            View Code
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ExternalLink size={16} />
                                                            Live Demo
                                                        </>
                                                    )}
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      These are only samples
                    </p>
                </motion.div>
            </div>
        </section>
    );
}