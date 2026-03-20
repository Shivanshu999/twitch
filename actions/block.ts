"use server"

import { getSelf } from "@/lib/auth-service"
import { blockUser, unblockUser } from "@/lib/block-service"
import { revalidatePath } from "next/cache"

//Block user + remove from stream room
export const onBlock = async(id: string) => {
    const self = await getSelf()

    if(!self){
        throw new Error("unauthorized")
    }

    const blockedUser = await blockUser(id)

    try{
            await roomService.removeParticipant(self.id, id)
    }catch(error){
        console.warn("LiveKit removeparticipant failed:", error)
    }

    revalidatePath(`/u/${self.username}/community`)

    return blockedUser;

}

// Unblock user

export const onUnblock = async (id:string) => {
    const self = await getSelf()
    if(!self){
        throw new Error("Unauthorized")
    }
    
    const unblockedUser = await unblockUser(id);
    
    revalidatePath(`/u/${self.username}/community`)

    return unblockUser;


}