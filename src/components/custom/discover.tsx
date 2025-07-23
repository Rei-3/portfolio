'use client'
import { motion } from "motion/react";
import Image from "next/image";

export default function Discover() {


function myAge (dob : Date) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth()) {
        age--;
    }
    return age;
}

    return (
        <section id="about" className="bg-gray-800 text-white py-16 px-4 relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
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
                    <div className="inline-block border-2 border-red-500 bg-red-500/10 px-6 py-2 mb-4">
                        <h2 className="text-2xl md:text-4xl font-bold font-mono tracking-wider text-red-400">
                            MORE_ABOUT_ME
                        </h2>
                    </div>
                    <div className="text-green-400 font-mono text-sm">
                        CLASSIFIED_PERSONNEL_ARCHIVE
                    </div>
                </motion.div>

                {/* Main Content with Image and Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Image Section */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-[4/5] max-w-md mx-auto">
                            {/* Technical frame borders */}
                            <div className="absolute -inset-4 border-2 border-red-400 bg-gradient-to-br from-red-400/10 to-transparent"></div>
                            <div className="absolute -inset-2 border border-green-400 bg-gradient-to-tl from-green-400/10 to-transparent"></div>
                            
                            {/* Corner brackets */}
                            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400"></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400"></div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400"></div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400"></div>

                            {/* Scanning line animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b z-10 from-transparent via-green-400/40 to-transparent h-1"
                                initial={{ y: -10 }}
                                animate={{ y: '500px' }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Image container */}
                            <div className="relative w-full h-full bg-black border border-gray-600 overflow-hidden">
                                <Image
                                    src="/me-bw.png" // You can change this to a different image
                                    alt="Christan Endam - About Me"
                                    fill
                                    className="object-cover contrast-125"
                                    priority
                                />
                                
                                {/* Image overlay with details */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                                    <div className="text-green-400 font-mono text-xs">
                                        SUBJECT: CHRISTAN_C_ENDAM
                                    </div>
                                    <div className="text-yellow-400 font-mono text-xs">
                                        CLASSIFICATION: DEVELOPER
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cards Section */}
                    <div className="space-y-8">
                        {/* About Me Card */}
                        <motion.div
                            className="bg-gray-900/80 border border-red-400 p-6 relative group hover:border-red-400 transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Corner indicators */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-yellow-400"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-yellow-400"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-yellow-400"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-yellow-400"></div>

                            {/* Card Header */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-green-400 font-mono text-xs">
                                    PERSONAL_DATA
                                </div>
                                <div className="text-red-400 font-mono text-xs">
                                    STATUS: VERIFIED
                                </div>
                            </div>

                            {/* Card Title */}
                            <h3 className="text-xl font-bold font-mono text-white mb-4 group-hover:text-red-400 transition-colors">
                                WHAT_I_LOVE
                            </h3>

                            {/* Card Description */}
                            <p className="text-gray-300 font-mono text-sm mb-6 leading-relaxed">
                                Did I mention that I am <b className="text-amber-400">{myAge(new Date(2002, 11, 24))} years of age?</b>
                                <br />
                               I also love making art. I enjoy making any type of art but I mainly focus on 
                                <b className="text-amber-400"> traditional drawing and digital art. </b>
                              
                               <a 
                               className="text-blue-400 hover:underline"
                               href="https://www.instagram.com/assookkaa/"> I keep my artworks here.
                               </a>
                               Besides making art, when I am not doing anything I am most likely watching animated shows.
                                 I am really big fan of <b className="text-amber-400">Evangelion </b>
                                 Listening to music is also one of my favorite things to do.
                                 I listen to a wide range of genres, but I have a particular fondness for <b className="text-amber-400">Rock and Metal</b>.
                                <br />
                                <br/>
                                Other hobbies include playing video games, running, and exploring new technologies.
                            </p>

                            {/* Interests Tags */}
                            <div className="flex flex-wrap gap-2">
                                {['ART', 'ANIMATION', 'MUSIC', 'ROCK_&_ROLL'].map((interest) => (
                                    <span
                                        key={interest}
                                        className="text-xs font-mono bg-gray-800 border border-green-400 px-2 py-1 text-green-400"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Mission Statement Card */}
                        <motion.div
                            className="bg-gray-900/80 border border-yellow-400 p-6 relative group hover:border-red-400 transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Corner indicators */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-400"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-400"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-400"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-400"></div>

                            {/* Card Header */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-yellow-400 font-mono text-xs">
                                    MISSION_STATEMENT
                                </div>
                                <div className="text-red-400 font-mono text-xs">
                                    PRIORITY: HIGH
                                </div>
                            </div>

                            {/* Card Title */}
                            <h3 className="text-xl font-bold font-mono text-white mb-4 group-hover:text-red-400 transition-colors">
                                MY_APPROACH
                            </h3>

                            {/* Card Description */}
                            <p className="text-gray-300 font-mono text-sm leading-relaxed">
                                It will never be a phase, it always has been a lifestyle.
                                <br />
                                -Random Emo Kid in 2000s
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Terminal Output */}
                <motion.div
                    className="mt-16 bg-black border border-green-400 p-4 font-mono text-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-green-400 mb-2">
                        NERV@PORTFOLIO:~$ personnel --profile-summary
                    </div>
                    <div className="text-gray-300">
                        Loading personnel profile...<br/>
                        Name: CHRISTAN_C_ENDAM<br/>
                        Role: FULL_STACK_DEVELOPER<br/>
                        Status: ACTIVE_DUTY<br/>
                        Clearance: AUTHORIZED<br/>
                        Mission_Readiness: 100%
                    </div>
                    <div className="text-green-400 mt-2">
                        NERV@PORTFOLIO:~$ <span className="animate-pulse">_</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}