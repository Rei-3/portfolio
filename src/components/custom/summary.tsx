'use client'
import Image from "next/image";
import { motion } from "motion/react";
import Header from "../layout/header";
import { Button } from "../ui/button";
import SocialLinks from "../layout/contact-buttons";

export default function Summary() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 80; // Account for fixed header
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Endam, Christan C-CV-1.pdf';
        link.download = 'Christan_Endam_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* NERV-themed background with grid pattern */}
            <motion.div
                id="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="min-h-screen bg-black relative overflow-hidden"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px),
                        linear-gradient(rgba(0, 255, 0, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 0, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px'
                }}
            >
                {/* Animated red warning stripes */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"
                    initial={{ x: '100%' }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Main content container */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-8 py-8">
                    
                    {/* Text content section */}
                    <motion.div
                        className="w-full lg:max-w-2xl mb-8 lg:mb-0 lg:mr-12"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* NERV Classification Header */}
                        <motion.div
                            className="border-l-4 border-red-500 pl-4 mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                                                        <div className="flex flex-col sm:flex-row sm:items-center text-green-400 font-mono text-xs sm:text-sm mb-2">
                                <span className="mr-4">CLASSIFICATION: PERSONNEL</span>
                                <span className="text-red-400">STATUS: ACTIVE</span>
                            </div>
                            <div className="text-yellow-400 font-mono text-xs sm:text-sm">
                                ID: DEV-001 | CLEARANCE LEVEL: ALPHA
                            </div>
                        </motion.div>

                        {/* Name with NERV styling */}
                        <motion.h1
                            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 text-white font-mono tracking-wider"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ textShadow: '0 0 10px rgba(255, 0, 0, 0.3)' }}
                        >
                            CHRISTAN C. ENDAM
                        </motion.h1>

                        {/* Position title */}
                        <motion.h2
                            className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-red-400 font-mono"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            FULL STACK DEVELOPER
                        </motion.h2>

                        {/* Mission statement */}
                        <motion.div
                            className="bg-gray-900/80 border border-green-400 p-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="text-green-400 font-mono text-xs mb-2">
                                &gt; MISSION DIRECTIVE_
                            </div>
                            <p className="text-gray-200 text-sm sm:text-base font-mono leading-relaxed">
                                Let's develop applications that push the boundaries of technology and enhance human potential. Our mission is to create innovative solutions that empower users and transform industries.
                            </p>
                        </motion.div>

                        {/* Action button */}
                        <motion.div
                            className="mt-8 space-x-3 space-y-3"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={() => scrollToSection('contact')}
                                className="bg-red-600 hover:bg-red-700 text-white font-mono font-bold px-6 py-3 border-2 border-red-500 transition-all duration-200 text-sm sm:text-base"
                                size="lg"
                                style={{ 
                                    boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                                }}
                            >
                                &gt; INITIATE CONTACT_
                            </Button>
                            <Button
                                onClick={downloadCV}
                                className="bg-orange-600 hover:bg-orange-700 text-white font-mono font-bold px-6 py-3 border-2 border-orange-500 transition-all duration-200 text-sm sm:text-base"
                                size="lg"
                                style={{ 
                                    boxShadow: '0 0 20px rgba(255, 165, 0, 0.3)',
                                    textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                                }}
                            >
                                &gt; DOWNLOAD CV_
                            </Button>
                             <SocialLinks />
                        </motion.div>

                    </motion.div>

                    {/* Image section with NERV-style framing */}
                    <motion.div
                        className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg"
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    >
                        {/* Technical frame borders */}
                        <div className="absolute -inset-4 border-2 border-green-400 bg-gradient-to-br from-green-400/10 to-transparent"></div>
                        <div className="absolute -inset-2 border border-red-400 bg-gradient-to-tl from-red-400/10 to-transparent"></div>
                        
                        {/* Corner brackets */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-yellow-400"></div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-yellow-400"></div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-yellow-400"></div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-yellow-400"></div>

                        {/* Scanning line animation */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b z-50 from-transparent via-green-400/30 to-transparent h-1"
                            initial={{ y: -10 }}
                            animate={{ y: '670px' }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Image container */}
                        <div className="relative aspect-[3/4] w-full  border border-gray-600">
                            <Image
                                src="/main-pic.png"
                                alt="Christan Endam - NERV Personnel"
                                fill
                                className="object-cover contrast-125"
                                priority
                            />
                            
                            {/* Image overlay with tech details */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <div className="text-green-400 font-mono text-xs">
                                    PERSONNEL_ID: DEV-02
                                </div>
                                <div className="text-yellow-400 font-mono text-xs">
                                    SYNC_RATIO: 99.9%
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating status indicators */}
                <motion.div
                    className="absolute top-4 right-4 text-green-400 font-mono text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    SYSTEM_STATUS: OPERATIONAL
                </motion.div>
            </motion.div>
        </>
    );
}