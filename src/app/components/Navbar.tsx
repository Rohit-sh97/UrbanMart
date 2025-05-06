"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon you like

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black w-full shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">

          <ul className="hidden md:flex gap-22 font-semibold">
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Stories</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>


          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 py-4 font-semibold">
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Stories</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
