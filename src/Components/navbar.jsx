import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#355E3B] shadow-md">
      <div className="relative flex justify-between items-center py-5 px-6 md:px-20">

        {/* Logo */}
        <a>
          <img src={logo} alt="Turlway Logo" className="w-16" />
        </a>

        {/* Desktop Menu (Centered) */}
        <ul className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 font-semibold text-base">

          {/* Home */}
          <li className="relative group px-3 py-2 cursor-pointer text-white">
            <span className="inline-block">Home</span>

            {/* Animated Footsteps */}
            <span className="absolute left-0 right-0 -bottom-1 text-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block animate-step1">🥾</span>
              <span className="inline-block animate-step2">🥾</span>
              <span className="inline-block animate-step3">🥾</span>
            </span>
          </li>

          {/* Trails */}
          <li className="relative group px-3 py-2 cursor-pointer text-white">
            <span className="inline-block">Trails</span>

            {/* Animated Footsteps */}
            <span className="absolute left-0 right-0 -bottom-1 text-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block animate-step1">🥾</span>
              <span className="inline-block animate-step2">🥾</span>
              <span className="inline-block animate-step3">🥾</span>
            </span>
          </li>

          {/* Community */}
          <li className="relative group px-3 py-2 cursor-pointer text-white">
            <span className="inline-block">Community</span>

            {/* Animated Footsteps */}
            <span className="absolute left-0 right-0 -bottom-1 text-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block animate-step1">🥾</span>
              <span className="inline-block animate-step2">🥾</span>
              <span className="inline-block animate-step3">🥾</span>
            </span>
          </li>

          {/* Shop */}
          <li className="relative group px-3 py-2 cursor-pointer text-white">
            <span className="inline-block">Shop</span>

            {/* Animated Footsteps */}
            <span className="absolute left-0 right-0 -bottom-1 text-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block animate-step1">🥾</span>
              <span className="inline-block animate-step2">🥾</span>
              <span className="inline-block animate-step3">🥾</span>
            </span>
          </li>

        </ul>

        {/* Hamburger Icon */}
        <button
          className="xl:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="xl:hidden bg-white/90 backdrop-blur-md shadow-md flex flex-col gap-2 px-6 py-4 text-lg font-medium">
          <li className="py-2 hover:text-sky-500 transition">Home</li>
          <li className="py-2 hover:text-sky-500 transition">Trails</li>
          <li className="py-2 hover:text-sky-500 transition">Community</li>
          <li className="py-2 hover:text-sky-500 transition">Shop</li>
        </ul>
      )}
    </header>
  );
}
