import React from 'react';

export default function Navbar() {
return (
    <header className="bg-blue-900 text-white shadow-md">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        

        <div className="flex items-center space-x-2">
        <span className="text-xl font-bold tracking-tight">New Generation High School</span>
        </div>

        <nav>
        <ul className="flex space-x-6 font-medium text-blue-100">
            <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Dashboard</a>
            </li>
            <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Students</a>
            </li>
            </ul>
        </nav>

    </div>
    </header>
    );
}