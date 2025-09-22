'use client';

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="text-center p-4">
            <p>© {year} My Portfolio</p>
        </footer>
    );
}