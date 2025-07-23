'use client'
import { motion } from "motion/react";

export default function EducationExperience() {
    return (
        <section id="education-experience" className="bg-black text-white py-16 px-4 relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '35px 35px'
                    }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block border-2 border-yellow-500 bg-yellow-500/10 px-6 py-2 mb-4">
                        <h2 className="text-2xl md:text-4xl font-bold font-mono tracking-wider text-yellow-400">
                            PERSONNEL_RECORD
                        </h2>
                    </div>
                    <div className="text-red-400 font-mono text-sm">
                        EDUCATION_&_EXPERIENCE_LOG
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Section */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-900/80 border border-yellow-400 p-6 relative">
                            {/* Corner indicators */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400"></div>

                            <div className="mb-4">
                                <div className="text-yellow-400 font-mono text-sm mb-2">
                                    CATEGORY: ACADEMIC_RECORD
                                </div>
                                <h3 className="text-xl font-bold font-mono text-white">
                                    EDUCATION_HISTORY
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="text-gray-300 font-mono text-sm">
                                    &gt; Loading academic records...<br />
                                    &gt; Scanning educational background...<br />
                                    &gt; [USER_INPUT_REQUIRED] Add your education details here
                                </div>

                                {/* Template for education entries - replace with your actual education */}
                                <div className="border-l-2 border-green-400 pl-4">
                                    <div className="text-green-400 font-mono text-xs">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</div>
                                    <div className="text-white font-mono text-sm">NEGROS ORIENTAL STATE UNIVERSITY (NORSU)</div>
                                    <div className="text-gray-400 font-mono text-xs">2021-2025</div>

                                </div>
                                <div className="border-l-2 border-green-400 pl-4">
                                    <div className="text-green-400 font-mono text-xs">SENIOR HIGH SCHOOL - STEM</div>
                                    <div className="text-white font-mono text-sm">FOUNDATION PREPARATORY ACADEMY</div>
                                    <div className="text-gray-400 font-mono text-xs">2019-2021</div>
                                </div>
                                <div className="border-l-2 border-green-400 pl-4">
                                    <div className="text-green-400 font-mono text-xs">JUNIOR HIGH SCHOOL</div>
                                    <div className="text-white font-mono text-sm">AYUNGON NATIONAL HIGH SCHOOL</div>
                                    <div className="text-gray-400 font-mono text-xs">2015-2019</div>
                                </div>
                                <div className="border-l-2 border-green-400 pl-4">
                                    <div className="text-green-400 font-mono text-xs">ELEMENTARY</div>
                                    <div className="text-white font-mono text-sm">AYUNGON CENTRAL SCHOOL</div>
                                    <div className="text-gray-400 font-mono text-xs">2009-2015</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-900/80 border border-red-400 p-6 relative">
                            {/* Corner indicators */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400"></div>

                            <div className="mb-4">
                                <div className="text-red-400 font-mono text-sm mb-2">
                                    CATEGORY: WORK_EXPERIENCE
                                </div>
                                <h3 className="text-xl font-bold font-mono text-white">
                                    WORK_HISTORY
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div className="text-gray-300 font-mono text-sm">
                                    &gt; Accessing mission logs...<br />
                                    &gt; Loading work experience data...<br />
                                    &gt; [USER_INPUT_REQUIRED] Add your experience details here
                                </div>

                                {/* Template for experience entries - replace with your actual experience */}
                                <div className="border-l-2 border-red-400 pl-4">
                                    <div className="text-red-400 font-mono text-xs">INTERN</div>
                                    <div className="text-white font-mono text-sm">NORSU MIS EDP
                                        & DM Unit</div>
                                    <div className="text-gray-400 font-mono text-xs">JULY 2024 - DECEMBER 2024</div>
                                    <div className="text-gray-300 font-mono text-xs mt-2 space-y-2">
                                        <li>
                                            Assisted staff with day-to-day tasks, easing workload and allowing them to focus on priority
                                            projects.
                                        </li>
                                        <li>
                                            Refactored a legacy information system, modernizing it with up-to-date technologies to
                                            improve performance, maintainability, and design.
                                        </li>
                                        <li>
                                            Redesigned and optimized the database structure by converting it into a fully relational
                                            schema, enhancing data consistency, scalability, and query efficiency.
                                        </li>
                                        <li>
                                            Developed a mobile app for the information system I refactored.
                                        </li>
                                        <li>
                                            Designed digital certificates, edited photos, and created infographics for internal and
                                            public-facing use, contributing to the unit’s visual and communication outputs.
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* System Status */}
                <motion.div
                    className="mt-12 bg-black border border-green-400 p-4 font-mono text-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="text-green-400 mb-2">
                        NERV@PORTFOLIO:~$ personnel --verify-credentials
                    </div>
                    <div className="text-gray-300">
                        Verifying academic credentials...<br />
                        Cross-referencing work history...<br />
                        Background check: PENDING_USER_INPUT<br />
                        Security clearance: AUTHORIZED
                    </div>
                    <div className="text-green-400 mt-2">
                        NERV@PORTFOLIO:~$ <span className="animate-pulse">_</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
