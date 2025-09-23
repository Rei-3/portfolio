'use client';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>© {year} Christan C Endam. All rights reserved. ☕</p>
                </div>
            </div>
        </footer>
    );
}