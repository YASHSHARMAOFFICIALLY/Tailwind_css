import React from "react";

const Responsive = () =>{
    return(
        <div className="flex flex-col yash:flex-row  md:flex-col items-center gap-10">
            <div className="h-10 w-10 rounded-2xl bg-red-300"></div>
            <div className="h-10 w-10 rounded-2xl bg-amber-300"></div>
            <div className="h-10 w-10 rounded-2xl bg-blue-300"></div>
            
           </div>
    )
}
export default Responsive