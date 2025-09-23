'use client';
export default function Header() {

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Art", href: "/art" },
        { name: "Contact", href: "/" },
    ];

    return (
        <header className="flex justify-center items-center p-3 fixed top-4 
         bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-xl text-white 
         w-fit max-w-[90vw] rounded-2xl mx-auto left-1/2 transform -translate-x-1/2 z-50 
         shadow-lg border border-gray-300/20 dark:border-gray-600/50">
            <nav>
                <ul className="flex space-x-1 sm:space-x-2">
                    {navigation.map((item, index)=>(
                        <li key={index}
                            className="rounded-xl bg-gray-700 hover:bg-gray-600 
                            px-2 sm:px-4 py-2 transition-all duration-300 
                            transform hover:scale-105 shadow-md hover:shadow-lg">
                            <a href={item.href} className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}