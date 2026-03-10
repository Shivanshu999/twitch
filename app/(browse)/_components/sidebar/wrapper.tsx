"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useEffect, useState } from "react";
import { RecommendedSkeleton } from "./recommended";
import { ToggleSkeleton } from "./toggle";
import { useIsClient } from "usehooks-ts";

interface WrapperProps{
    children: React.ReactNode
}
export const Wrapper = ({children,}: WrapperProps) => {

    const {collapsed} = useSidebar((state) => state);

    const  isClient = useIsClient()
    
    
    if(!isClient) {
        return (
        <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
            collapsed && "w-17.5"

        )}>
            <ToggleSkeleton />
            <RecommendedSkeleton />
        </aside>
    )
}
    return (
        <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
            collapsed && "w-17.5"

        )}>
            {children}
        </aside>
    )

}