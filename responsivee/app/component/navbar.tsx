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
        <div className=" md:rounded-full  flex relative justify-between items-center md:mt-4 max-w-4xl bg-white-500 mx-auto p-8 shadow-yash ">
            <Link href="/">
            <Image 
            src = "https://ui.aceternity.com/logo.png"
           alt = "logo"
            width = {50}
            height = {50}
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
            {open   && (<div className="absolute inset-x-0 bg-white rounded-md shadow-yash top-full mt-2 max-w-[95%] ">
                    <div className="  flex md:hidden flex-col mx-auto p-4 items-center gap-8 text-xl text-neutral-500 mr-10">
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
// "use client"
// import React, { useState } from "react";
// import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";

// interface NavbarProps {
//   setCartOpen: (open: boolean) => void;
//   totalItems: number;
//   user: any; 
//   onLoginClick: () => void;
//   onLogout: () => void;
// }

// export default function Navbar({ 
//   setCartOpen, 
//   totalItems, 
//   user, 
//   onLoginClick, 
//   onLogout 
// }: NavbarProps) {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [userMenuOpen, setUserMenuOpen] = useState(false);

//     const navLinks = [
//         { href: "#mission", label: "Mission" },
//         { href: "#shop", label: "Flavours" },
//         { href: "#contact", label: "Contact" }
//     ];

//     return (
//         <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16 sm:h-20">
                   
//                     <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
//                         <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center shadow-md">
//                             <span className="font-serif text-base sm:text-lg font-bold text-orange-700">Bb</span>
//                         </div>
//                         <div className="font-serif text-base sm:text-lg lg:text-xl font-bold text-gray-800">
//                             Betana Bites
//                         </div>
//                     </div>

//                     <nav className="hidden md:flex items-center gap-1 lg:gap-2">
//                         {navLinks.map((link) => (
//                             <a
//                                 key={link.href}
//                                 href={link.href}
//                                 className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 font-medium hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
//                             >
//                                 {link.label}
//                             </a>
//                         ))}
                    
//                         {user ? (
//                             <div className="relative ml-2">
//                                 <button
//                                     onClick={() => setUserMenuOpen(!userMenuOpen)}
//                                     className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
//                                 >
//                                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-semibold">
//                                         {user.name?.[0]?.toUpperCase() || <User size={16} />}
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-700 hidden lg:block">
//                                         {user.name}
//                                     </span>
//                                 </button>
                                
//                                 {userMenuOpen && (
//                                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
//                                         <button
//                                             onClick={() => {
//                                                 onLogout();
//                                                 setUserMenuOpen(false);
//                                             }}
//                                             className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                         >
//                                             <LogOut size={16} />
//                                             Logout
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         ) : (
//                             <button
//                                 onClick={onLoginClick}
//                                 className="ml-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
//                             >
//                                 Login
//                             </button>
//                         )}

//                         <button
//                             onClick={() => setCartOpen(true)}
//                             className="ml-2 relative px-4 lg:px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center gap-2"
//                         >
//                             <ShoppingCart size={18} />
//                             <span className="hidden lg:inline">Cart</span>
//                             {totalItems > 0 && (
//                                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-md">
//                                     {totalItems > 99 ? "99+" : totalItems}
//                                 </span>
//                             )}
//                         </button>
//                     </nav>

//                     <div className="md:hidden flex items-center gap-2">
//                         <button
//                             onClick={() => setCartOpen(true)}
//                             className="relative p-2 rounded-full bg-orange-500 text-white shadow-md"
//                         >
//                             <ShoppingCart size={20} />
//                             {totalItems > 0 && (
//                                 <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
//                                     {totalItems > 9 ? "9+" : totalItems}
//                                 </span>
//                             )}
//                         </button>

//                         <button
//                             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                             className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
//                         >
//                             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {mobileMenuOpen && (
//                 <div className="md:hidden border-t border-gray-200 bg-white">
//                     <nav className="px-4 py-4 space-y-1">
//                         {navLinks.map((link) => (
//                             <a
//                                 key={link.href}
//                                 href={link.href}
//                                 onClick={() => setMobileMenuOpen(false)}
//                                 className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
//                             >
//                                 {link.label}
//                             </a>
//                         ))}
                        
//                         <div className="pt-2 border-t border-gray-200">
//                             {user ? (
//                                 <div className="space-y-1">
//                                     <div className="px-4 py-2 text-sm text-gray-500">
//                                         Logged in as <span className="font-semibold text-gray-700">{user.name}</span>
//                                     </div>
//                                     <button
//                                         onClick={() => {
//                                             onLogout();
//                                             setMobileMenuOpen(false);
//                                         }}
//                                         className="w-full flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
//                                     >
//                                         <LogOut size={18} />
//                                         Logout
//                                     </button>
//                                 </div>
//                             ) : (
//                                 <button
//                                     onClick={() => {
//                                         onLoginClick();
//                                         setMobileMenuOpen(false);
//                                     }}
//                                     className="w-full flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
//                                 >
//                                     <User size={18} />
//                                     Login
//                                 </button>
//                             )}
//                         </div>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// }
