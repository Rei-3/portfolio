'use client'
import { motion } from "motion/react";
import ContactButtons from "./contact-buttons";

export default function Footer() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <motion.footer 
            id="contact"
            className="pt-12 bg-black border-t-2 border-red-500 text-white relative overflow-hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        > <motion.div
                    className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            {/* Warning stripes */}
            {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div> */}
            
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-5">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px'
                    }}
                />
            </div>
            

            
            {/* Contact Section */}
            <div className="container mx-auto py-8 px-4 relative z-10">
                
                {/* Contact Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block border-2 border-green-500 bg-green-500/10 px-6 py-2 mb-4">
                        <h2 className="text-xl md:text-2xl font-bold font-mono tracking-wider text-green-400">
                            INITIATE_CONTACT
                        </h2>
                    </div>
                    <div className="text-yellow-400 font-mono text-sm">
                        COMMUNICATION_PROTOCOLS_ACTIVE
                    </div>
                </motion.div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Email Me Button */}
                    <motion.div
                        className="bg-gray-900/80 border border-green-400 p-6 flex flex-col items-center justify-center gap-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-green-400 font-mono text-sm mb-4 text-center">DIRECT_COMMUNICATION</div>
                        <motion.a
                            href="mailto:christan.endam@norsu.edu.ph?subject=Portfolio%20Contact&body=Hello%20Christan,%0D%0A%0D%0A"
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-mono text-lg py-4 px-6 border border-red-500 transition-all duration-200 text-center block"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ boxShadow: '0 0 15px rgba(255, 0, 0, 0.4)' }}
                        >
                            &gt; EMAIL_ME
                            
                        </motion.a>
                        
                        <div className="text-gray-400 font-mono text-xs mb-3 text-center">
                            Opens your default email client
                        </div>
                        <ContactButtons />
                    </motion.div>
                    

                    {/* Contact Information Cards */}
                    <div className="space-y-4">
                        <motion.div
                            className="bg-gray-900/80 border border-green-400 p-4 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-green-400 font-mono text-xs mb-2">EMAIL_PROTOCOL</div>
                            <div className="text-white font-mono text-sm">christan.endam@norsu.edu.ph</div>
                        </motion.div>

                        <motion.div
                            className="bg-gray-900/80 border border-yellow-400 p-4 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-yellow-400 font-mono text-xs mb-2">RESPONSE_TIME</div>
                            <div className="text-white font-mono text-sm">24_HOURS_MAX</div>
                        </motion.div>

                        <motion.div
                            className="bg-gray-900/80 border border-red-400 p-4 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-red-400 font-mono text-xs mb-2">AVAILABILITY</div>
                            <div className="text-white font-mono text-sm">ALWAYS_ONLINE</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 relative z-10 border-t border-gray-700">
                {/* NERV Footer Logo */}
                <motion.div
                    className="flex items-center space-x-4 mb-4 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="text-red-500 text-lg">●</div>
                    <div>
                        <h1 className="text-sm md:text-base font-bold font-mono tracking-wider text-white">
                            NERV_DEV_PORTFOLIO
                        </h1>
                        <div className="text-xs text-green-400 font-mono">
                            © 2025 - CLASSIFIED PROJECT
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Links */}
                {/* <motion.nav
                    className="mb-4 md:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <ul className="flex flex-wrap justify-center space-x-2 md:space-x-6 text-xs md:text-sm">
                        <li>
                            <motion.button 
                                onClick={() => scrollToSection('home')}
                                className="hover:text-red-400 transition-colors duration-200 font-mono px-2 py-1 border border-transparent hover:border-red-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                HOME
                            </motion.button>
                        </li>
                        <li>
                            <motion.button 
                                onClick={() => scrollToSection('about')}
                                className="hover:text-green-400 transition-colors duration-200 font-mono px-2 py-1 border border-transparent hover:border-green-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ABOUT
                            </motion.button>
                        </li>
                        <li>
                            <motion.button 
                                onClick={() => scrollToSection('projects')}
                                className="hover:text-yellow-400 transition-colors duration-200 font-mono px-2 py-1 border border-transparent hover:border-yellow-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                PROJECTS
                            </motion.button>
                        </li>
                    </ul>
                </motion.nav> */}

                {/* System Status */}
                <motion.div
                    className="text-center md:text-right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="text-xs font-mono text-gray-400 mb-1">
                        SYSTEM STATUS
                    </div>
                    <motion.div 
                        className="text-green-400 font-mono text-xs"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        ALL_SYSTEMS_OPERATIONAL
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom status bar */}
            <div className="bg-gray-900 px-4 py-2 border-t border-gray-700">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500">
                    <div>SECURITY_LEVEL: UNRESTRICTED</div>
                    <div className="text-green-400 mt-1 sm:mt-0">
                        TIMESTAMP: {new Date().toISOString().slice(0, 19)}Z
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}