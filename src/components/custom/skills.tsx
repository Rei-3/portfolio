'use client'
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
    Zap
} from "lucide-react";

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
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            },
            { 
                name: "React", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            },
            { 
                name: "Next.js", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            },
            { 
                name: "HTML", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            },
            { 
                name: "CSS", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            },
            { 
                name: "JavaScript", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            },
            { 
                name: "TypeScript", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            },
            { 
                name: "Tailwind", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            },
            { 
                name: "Bootstrap", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            }
        ]
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
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            },
            { 
                name: "Java", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            },
            { 
                name: "PHP", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
            },
            { 
                name: "Spring Boot", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
            },
            { 
                name: "Laravel", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
            }
        ]
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
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg"
            },
            { 
                name: "MySQL", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            },
            { 
                name: "Firebase", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
            },
            { 
                name: "PostgreSQL", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            }
        ]
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
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            },
            { 
                name: "HTTPie", 
                iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/httpie.svg"
            },
            { 
                name: "Vercel", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
            }
        ]
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
                iconUrl: "https://images.sftcdn.net/images/t_app-icon-s/p/f51224f2-96d0-11e6-8c51-00163ec9f5fa/2041745124/adobe-illustrator-icon.png"
            },
            { 
                name: "Photoshop", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
            },
            { 
                name: "GIMP", 
                iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original.svg"
            },
            { 
                name: "Filmora", 
                iconUrl: "https://images.sftcdn.net/images/t_app-icon-s/p/dd0aaa64-9b53-11e6-a286-00163ed833e7/532636150/wondershare-filmora-video-editor-filmora-9-logo.png"
            },
            { 
                name: "Vegas Pro", 
                iconUrl: "https://images.sftcdn.net/images/t_app-icon-s/p/ae2e5944-28e6-469c-aec3-74325e254722/1822791693/vegas-pro-edit-Vegas_Pro_15.0.png"
            }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
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

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block border-2 border-green-500 bg-green-500/10 px-6 py-2 mb-4">
                        <h2 className="text-2xl md:text-4xl font-bold font-mono tracking-wider text-green-400">
                            SKILLS_ARCHIVE
                        </h2>
                    </div>
                    <div className="text-yellow-400 font-mono text-sm">
                        SKILL_MATRIX_DATABASE
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className={`bg-black/80 border ${category.borderColor} p-6 relative`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Corner indicators */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-yellow-400"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-yellow-400"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-yellow-400"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-yellow-400"></div>

                            {/* Category Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <category.icon className={`h-5 w-5 ${category.textColor}`} />
                                    <div className={`${category.textColor} font-mono text-sm`}>
                                        CATEGORY: {category.title}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold font-mono text-white">
                                    {category.title}_STACK
                                </h3>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-3 gap-1">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                       
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            duration: 0.5, 
                                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <div 
                                                className={`w-12 h-12 bg-gray-400 rounded p-1 group-hover:scale-110 transition-transform`}
                                                style={{ 
                                                    filter: `drop-shadow(0 0 5px ${category.color}30)` 
                                                }}
                                            >
                                                <img 
                                                    src={skill.iconUrl} 
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Terminal Output */}
                <motion.div
                    className="mt-12 bg-black border border-green-400 p-4 font-mono text-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-green-400 mb-2">
                        NERV@PORTFOLIO:~$ system --analyze-skills
                    </div>
                    <div className="text-gray-300">
                        Analyzing technical capabilities...<br/>
                        Frontend Technologies: {skillCategories[0].skills.length} loaded<br/>
                        Backend Systems: {skillCategories[1].skills.length} active<br/>
                        Database Connections: {skillCategories[2].skills.length} established<br/>
                        Development Tools: {skillCategories[3].skills.length} configured<br/>
                        Creative Suite: {skillCategories[4].skills.length} ready<br/>
                        Status: FULLY_OPERATIONAL
                    </div>
                    <div className="text-green-400 mt-2">
                        NERV@PORTFOLIO:~$ <span className="animate-pulse">_</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
