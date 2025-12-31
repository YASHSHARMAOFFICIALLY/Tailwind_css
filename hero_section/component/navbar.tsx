"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";


const links = [
    {
        href:"/Blog",
        title:"Blog"
    },{
        href:"/signup",
        title:"Signup"
    },{
        href:"/signin",
        title:"Signin"
    }
]
export default function Navbar(){
    const[scrolled,setscrolled]=useState(false)
    useEffect(() => {
    const handleScroll = () => {
      setscrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return(
     <nav className= {`fixed top-0 left-0  w-full z-50 flex items-center justify-between px-20 py-4 transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b" : "bg-transparent"}

 `}>
     <Link href="/" className="flex items-center gap-0">
        <Image 
        src = "/logo.svg"
        height={20}
        width={40}
        alt = "logo"
        className="-mr-1"
        />
         
         <span className="text-white font-bold text-xl">Cobalt</span>
        </Link>
       

     <div className="flex items-center gap-8">
            {links.map((link,index)=>{
                return(
                <Link
                href={link.href}
                key = {index}
                className="text-white font-medium hover:text-neutral-600 transition duration-200"
                >
                    {link.title}
                </Link>
                );
            })}
               <button
  className="group relative px-6 py-2 rounded-2xl border border-neutral-700 bg-neutral-900 text-white transition-all duration-300 hover:border-neutral-500 hover:shadow-[0_0_15px_rgba(3,105,161,0.3)] cursor-pointer"
>
  <div className="absolute inset-x-0 -bottom-px h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-sky-500 to-transparent transition-all duration-500 group-hover:w-full"></div>
  <span className="relative z-10">Join the Waitlist</span>
</button>
            </div>
 </nav>
        
)
}
