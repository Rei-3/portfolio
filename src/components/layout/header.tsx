'use client';

import Link from "next/link";

export default function Header() {

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Art", href: "/art" },
        { name: "Contact", href: "/" },
    ];

    return (
        <header className="flex justify-center items-center p-3 fixed top-4 
         bg-gray-200 dark:bg-gray-800/90 backdrop-blur-xl text-gray-800 
         w-fit max-w-[90vw] rounded-2xl mx-auto left-1/2 transform -translate-x-1/2 z-50 
         shadow-lg border border-gray-300/20 dark:border-gray-600/50 transition-colors duration-500">
            <nav>
                <ul className="flex space-x-1 sm:space-x-2">
                    {navigation.map((item, index)=>(
                        <li key={index}
                            className="">
                            <Link href={item.href} className="rounded-xl bg-gray-400/80 hover:bg-gray-600/80 dark:bg-gray-700/80 dark:hover:bg-gray-500/80 
                            px-2 sm:px-4 py-2 transition-all duration-500 
                            transform hover:scale-105 shadow-md hover:shadow-lg text-white font-medium text-xs sm:text-sm whitespace-nowrap">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}