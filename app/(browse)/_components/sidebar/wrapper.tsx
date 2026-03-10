"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useEffect, useState } from "react";
import { RecommendedSkeleton } from "./recommended";
import { ToggleSkeleton } from "./toggle";

interface WrapperProps{
    children: React.ReactNode
}
export const Wrapper = ({children,}: WrapperProps) => {

    const {collapsed} = useSidebar((state) => state);
    const [isClient, setIsClient] = useState(false)

    useEffect(()=> {
        setIsClient(true)
    }, [])
    //Error calling `setStates` synchronously with an effect can trigger cascading renders. Effects are intended to synchronize states between React and external systems, such as manually updating the DOM, state management libraries, or other platform APIs in general. The body of an effect should do one or both of the following:  update_external_system with the latest_state from React subscribe for updates from some external systems Calling `setState` is in a callback function when external states change.

    if(!isClient) return (
        <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
            collapsed && "w-17.5"

        )}>
            <ToggleSkeleton />
            <RecommendedSkeleton />
        </aside>
    )

    return (
        <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
            collapsed && "w-17.5"

        )}>
            {children}
        </aside>
    )

}