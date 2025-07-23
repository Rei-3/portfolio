'use client'
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();

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
        // Close sidebar after navigation on mobile
        setOpen(false);
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

                {/* Desktop Navigation */}
                <motion.nav
                    className="hidden lg:block"
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

                {/* Mobile Menu using ShadCN Sheet */}
                {isMobile && (
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <motion.button
                                className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 z-50"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.div
                                    className="w-6 h-0.5 bg-red-500"
                                    animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="w-6 h-0.5 bg-red-500"
                                    animate={open ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="w-6 h-0.5 bg-red-500"
                                    animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        </SheetTrigger>
                        <SheetContent 
                            side="right" 
                            className="w-80 bg-black/95 backdrop-blur-md border-l-2 border-red-500 text-white p-0"
                        >
                            <SheetHeader className="sr-only">
                                <SheetTitle>Navigation Menu</SheetTitle>
                                <SheetDescription>Select a section to navigate to</SheetDescription>
                            </SheetHeader>
                            
                            {/* Sidebar background pattern */}
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

                            {/* Sidebar Header */}
                            <div className="p-6 border-b border-red-500/30 relative z-10">
                                <div className="text-red-500 text-sm font-mono tracking-wider">
                                    NAVIGATION MENU
                                </div>
                                <div className="text-xs text-green-400 font-mono mt-1">
                                    SELECT TARGET SECTION
                                </div>
                            </div>

                            {/* Sidebar Navigation */}
                            <nav className="p-6 relative z-10">
                                <ul className="space-y-4">
                                    <li>
                                        <motion.button 
                                            onClick={() => scrollToSection('home')}
                                            className="w-full text-left hover:text-red-400 transition-colors duration-200 font-mono px-4 py-3 border border-transparent hover:border-red-400 hover:bg-red-400/10 rounded-sm"
                                            whileHover={{ x: 8 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-red-500">●</span>
                                                <span>HOME</span>
                                            </div>
                                        </motion.button>
                                    </li>
                                    <li>
                                        <motion.button 
                                            onClick={() => scrollToSection('education-experience')}
                                            className="w-full text-left hover:text-cyan-400 transition-colors duration-200 font-mono px-4 py-3 border border-transparent hover:border-cyan-400 hover:bg-cyan-400/10 rounded-sm"
                                            whileHover={{ x: 8 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-cyan-500">●</span>
                                                <span>EXPERIENCE</span>
                                            </div>
                                        </motion.button>
                                    </li>
                                    <li>
                                        <motion.button 
                                            onClick={() => scrollToSection('skills')}
                                            className="w-full text-left hover:text-purple-400 transition-colors duration-200 font-mono px-4 py-3 border border-transparent hover:border-purple-400 hover:bg-purple-400/10 rounded-sm"
                                            whileHover={{ x: 8 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-purple-500">●</span>
                                                <span>SKILLS</span>
                                            </div>
                                        </motion.button>
                                    </li>
                                    <li>
                                        <motion.button 
                                            onClick={() => scrollToSection('projects')}
                                            className="w-full text-left hover:text-yellow-400 transition-colors duration-200 font-mono px-4 py-3 border border-transparent hover:border-yellow-400 hover:bg-yellow-400/10 rounded-sm"
                                            whileHover={{ x: 8 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-yellow-500">●</span>
                                                <span>PROJECTS</span>
                                            </div>
                                        </motion.button>
                                    </li>
                                    <li>
                                        <motion.button 
                                            onClick={() => scrollToSection('about')}
                                            className="w-full text-left hover:text-green-400 transition-colors duration-200 font-mono px-4 py-3 border border-transparent hover:border-green-400 hover:bg-green-400/10 rounded-sm"
                                            whileHover={{ x: 8 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-green-500">●</span>
                                                <span>ABOUT</span>
                                            </div>
                                        </motion.button>
                                    </li>
                                    <li>
                                        <motion.button 
                                            onClick={() => scrollToSection('contact')}
                                            className="w-full text-left hover:text-orange-400 transition-colors duration-200 font-mono px-4 py-3 border border-transparent hover:border-orange-400 hover:bg-orange-400/10 rounded-sm"
                                            whileHover={{ x: 8 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <span className="text-orange-500">●</span>
                                                <span>CONTACT</span>
                                            </div>
                                        </motion.button>
                                    </li>
                                </ul>
                            </nav>

                            {/* Sidebar Footer */}
                            <div className="absolute bottom-6 left-6 right-6 border-t border-red-500/30 pt-4 text-xs text-green-400 font-mono">
                                <div>CONNECTION: SECURE</div>
                                <div>STATUS: OPERATIONAL</div>
                            </div>
                        </SheetContent>
                    </Sheet>
                )}
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