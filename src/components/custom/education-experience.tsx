"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationExperience() {
    const education = [
        // {
        //     institution: "Ayungon Central School",
        //     degree: "Elementary Education",
        //     year: "2009 - 2015"
        // },
        {
            institution: "Ayungon National High School",
            degree: "Junior High School",
            year: "2015 - 2018",
        },
        {
            institution: "Foundation Preparatory Academy",
            degree: "Senior High School - STEM",
            year: "2018 - 2021"
        },
        {
            institution: "Negros Oriental State University",
            degree: "Bachelor of Science in Information Technology",
            year: "2021 - 2025"
        }
    ];

    const experience = [
        {
            company: "Negros Oriental State University",
            location: "Dumaguete City, Philippines",
            position: "Intern",
            role: "Software Developer",
            duration: "July 2024 - December 2024"
        },
        
    ];

    // Don't reverse the original arrays to maintain proper order
    const displayedEducation = [...education].reverse();
    const displayedExperience = [...experience].reverse();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-100/40 dark:bg-gray-800/40 w-full max-w-6xl mx-auto px-4 py-4 md:py-4"
        >
            {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Christan's Life
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Timeline of my education and experience
          </p>
        </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-0 shadow-xl backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Education
                            </CardTitle>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {displayedEducation.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-6 pb-6 border-l-2 border-blue-200 dark:border-blue-800 last:border-l-0 last:pb-0"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                                    
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                                            {edu.degree}
                                        </p>
                                        <Badge 
                                            variant="secondary" 
                                            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-medium"
                                        >
                                            {edu.year}
                                        </Badge>
                                    </div>
                                </motion.div>
                            ))}
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-0 shadow-xl backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                                Experience
                            </CardTitle>
                            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {displayedExperience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-6 pb-6 border-l-2 border-green-200 dark:border-green-800 last:border-l-0 last:pb-0"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                                    
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {exp.company}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {exp.location}
                                            </p>
                                        </div>
                                        
                                        <div className="space-y-1">
                                            <Badge 
                                                className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 font-medium"
                                            >
                                                {exp.position}
                                            </Badge>
                                            <p className="text-gray-700 dark:text-gray-300 font-medium">
                                                {exp.role}
                                            </p>
                                        </div>
                                        
                                        <Badge 
                                            variant="secondary" 
                                            className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 font-medium"
                                        >
                                            {exp.duration}
                                        </Badge>
                                    </div>
                                </motion.div>
                            ))}
                            
                            {/* Empty state for future experiences */}
                            {displayedExperience.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="text-center py-8"
                                >
                                    <div className="text-gray-400 dark:text-gray-600 text-lg">
                                        More experiences coming soon...
                                    </div>
                                </motion.div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}