
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2,IconX } from "@tabler/icons-react";

export const Navbar = () => {

    const Links = [
        {name:"contact",href:"/contact"},
        {name:"Home",href:"https://youtube.com"},
        {name:"Signup",href:"/Signup"},
        {name:"Signin",href:"/signin"},
    ]

    const[open,setopen]=useState(false)

    return(
        <div className="relative">
        <div className=" md:rounded-full  flex relative justify-between items-center md:mt-4 max-w-4xl bg-white-500 mx-auto px-2 py-2 md:shadow-yash ">
            <Link href="/">
            <Image 
            src = "https://ui.aceternity.com/logo.png"
           alt = "logo"
            width = {30}
            height = {30}
            className="rounded-full"
            ></Image>
            </Link>


            <div className=" hidden md:flex items-center gap-8 text-xl text-neutral-500 mr-10">
                {Links
                .map((link,index)=>{
                    return <Link 
                    className="hover:text-neutral-900 transition-colors"
                    href = {link.href}
                    key = {index}>
                    {link.name}
                    </Link>
                })}
            </div>


            <button className="md:hidden text-neutral-600"
            onClick={()=>setopen(!open)}>
               {open ? <IconX /> : <IconMenu2 />}
            </button>
            {open   && (<div className="absolute inset-x-0 bg-white rounded-md shadow-yash top-20 mt-2 max-w-[95%] mx-auto ">mig
                      <div className="  flex md:hidden flex-col mx-auto p-4 items-start gap-8 text-xl text-neutral-500 mr-10">
                {Links
                .map((link,index)=>{
                    return <Link 
                    onClick={() => setopen(false)}
                    className="hover:text-neutral-900"
                    href = {link.href} key = {index}>{link.name}</Link>
                })}
            </div>
            </div>
            )}
        </div>
        </div>
    )
}