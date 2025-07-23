'use client'
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 80; // Approximate header height
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.header 
            className={`fixed top-0 w-full z-50 border-b-2 border-red-500 text-white overflow-hidden transition-all duration-300 ${
                isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div 
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(45deg, transparent 45%, rgba(255, 0, 0, 0.1) 50%, transparent 55%),
                            linear-gradient(-45deg, transparent 45%, rgba(0, 255, 0, 0.1) 50%, transparent 55%)
                        `,
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>

            <div className="container mx-auto flex justify-between items-center p-4 relative z-10">
                {/* NERV Logo/Title */}
                <motion.div
                    className="flex items-center space-x-4 cursor-pointer"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onClick={() => scrollToSection('home')}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="text-red-500 text-2xl font-bold">●</div>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold font-mono tracking-wider text-white">
                            NERV_PORTFOLIO
                        </h1>
                        <div className="text-xs text-green-400 font-mono">
                            SPECIAL PURPOSE ENTITY
                        </div>
                    </div>
                </motion.div>

                {/* Navigation */}
                <motion.nav
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <ul className="flex space-x-2 md:space-x-6 text-sm md:text-base">
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
                                onClick={() => scrollToSection('education-experience')}
                                className="hover:text-cyan-400 transition-colors duration-200 font-mono px-2 py-1 border border-transparent hover:border-cyan-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                EXPERIENCE
                            </motion.button>
                        </li>
                         <li>
                            <motion.button 
                                onClick={() => scrollToSection('skills')}
                                className="hover:text-purple-400 transition-colors duration-200 font-mono px-2 py-1 border border-transparent hover:border-purple-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                SKILLS
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
                                onClick={() => scrollToSection('contact')}
                                className="hover:text-orange-400 transition-colors duration-200 font-mono px-2 py-1 border border-transparent hover:border-orange-400"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                CONTACT
                            </motion.button>
                        </li>
                    </ul>
                </motion.nav>
            </div>

            {/* Status indicator */}
            <motion.div 
                className="absolute top-2 right-4 text-green-400 font-mono text-xs hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                ONLINE
            </motion.div>
        </motion.header>
    );
}