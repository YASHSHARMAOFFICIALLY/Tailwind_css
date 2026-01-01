import React, { Children } from "react";
import { cn } from "../lib/utilis";
export const Grid = ()=>{
    return (
        <div className="max-w-5xl  py-20 mx-auto  border-x border-neutral-200 min-h-screen bg-gray-400">
            <div className="grid grid-col-2">
                <Card>
                    <CardHeader>

                        <BrainIcon></BrainIcon>
                        <CardTitile>LLM model Selector </CardTitile>
                    </CardHeader>
                    <CardDescription>
                        Track real life data 
                    </CardDescription>
                </Card>

            </div>
        </div>
    )
}
const CardSkelton = ()=>{
    
}
const Card = ({className,children}:{
    className?:string,
   children:React.ReactNode

})=>{
    return (
        <div>
            <div className={cn("bg-white p-4",className)}>{children}</div>
        </div>
    )
}
const CardHeader = ({children}:{
    children:React.ReactNode
}) =>{
    return <div className="flex items-center gap-2">{children}</div>
}
const CardTitile = ({
    children,
    className
}:{
    children:React.ReactNode
    className?:string
}) =>{
    return <h2 className={cn("font-medium text-lg tracking-tight",className)}>{children}</h2>
}

const CardDescription = ({
    Children,
    className
}:{
    children:React.ReactNode
    className?:string
})=>{
    return
}