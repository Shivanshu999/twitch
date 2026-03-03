import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200" ,"300", "400", "500", "600", "700", "800"],
})

export const Logo = () => {
    return(
        <div className="flex flex-col items-center gap-y-4">
            <div>
                <Image src="/spooky.png" alt="Twitch Logo" width={80} height={80}/>
            </div>
            <div className="flex flex-col items-center">
                <p className={cn("text-xl font-semibold", font.className)}>
                    GameHub
                </p>
            </div>
        </div>
    )
}