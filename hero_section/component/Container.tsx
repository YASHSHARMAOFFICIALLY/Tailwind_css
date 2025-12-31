import { cn } from "@/app/lib/utils";
import React from "react";
export const Container = ({
    children,
    className,
}:{
    children:React.ReactNode;
    className?:string;
})=>{
    return <div className ={cn("max-w-6xl mx-auto px-2 relative z-10",className)}>{children}</div>
}