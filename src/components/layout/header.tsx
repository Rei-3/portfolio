'use client';
export default function Header() {

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/" },
        { name: "Contact", href: "/" },
    ];

    return (
        <header className="flex justify-center items-center p-2 fixed top-4
         bg-violet-700 text-white w-fit rounded-full m-2 z-50">
            <nav>
                <ul className="flex space-x-4">
                    {navigation.map((item, index)=>(
                        <li key={index}
                            className="rounded-full bg-gray-200 px-4">
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}