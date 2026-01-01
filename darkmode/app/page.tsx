"use client"; // Required for interactivity in Next.js App Router

import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  // On mount, check for saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="relative z-10 h-80 w-60 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-2xl flex flex-col items-center justify-center dark:text-white">
        <p className="font-bold">yash</p>
        
        <button 
          onClick={handleThemeChange}
          className="px-4 py-2 mt-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[12px] hover:opacity-80 transition-all"
        >
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}