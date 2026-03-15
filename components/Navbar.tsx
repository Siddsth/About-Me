"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
}

const Navbar = ({}: NavbarProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex  items-center mt-6 gap-4">

            {/* Button sits outside the nav box */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#66FCF1] text-2xl mb-2"
            >
                ☰
            </button>

            {/* Nav box drops down below the button */}
            <nav className={`
            bg-zinc-800
            shadow-sm
            rounded-2xl
            w-full
            max-w-sm
            overflow-hidden
            transition-all
            duration-300
            ${isOpen ? 'border border-zinc-700 max-h-[200px]' : 'border-0 max-h-0'}
            `}>
                <div className="flex flex-row justify-center items-center">
                    <Link href="/" className="border-r-2 border-zinc-900 px-4 py-4 flex items-center">
                        <span className="text-green-400">HOME</span>
                    </Link>
                    <Link href="/experience" className="border-r-2 border-zinc-900 px-4 py-4 flex items-center">
                        <span className="text-green-400">EXPERIENCE</span>
                    </Link>
                    <Link href="/contact" className="px-4 py-4 flex items-center">
                        <span className="text-green-400">CONTACT</span>
                    </Link>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;