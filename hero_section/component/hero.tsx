import React from "react";
export const Hero=()=>{
    return(
        <div className=" mt-30 md:mt-40 w-full flex flex-col items-center">
            <h1 className="bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-transparent w-fit text-5xl md:text-7xl font-bold max-w-2xl text-center tracking-tight leading-tight">
                             Unleash the power of intuitive finance
                                </h1>
            <p className="text-neutral-300 text-center  mt-5 md:mt-10 max-w-3xl text-xl selection:bg-white">
                say goodbye to the outdated financial tools.Every small business owner,
                regardless of the background,can now manage their business like a pro 
                simple intuitive And never boring 
            </p>
            <div className="flex justify-center mt-10 md:mt-15 w-full max-w-lg">
                <input type="text"
                 className=" flex-1 border border-neutral-600 mr-4 rounded-xl px-4 py-2 placeholder:text-neutral-500 text-white 
                 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                 placeholder="Enter your email"  />
                <button className="relative px-4 py-2 rounded-2xl border border-neutral-700 cursor-pointer text-white">
                    <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    Join Waitlist</button>
            </div>
        </div>
    )
}