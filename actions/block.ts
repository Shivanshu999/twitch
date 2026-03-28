"use server";

import { getSelf } from "@/lib/auth-service";
import { blockUser, unblockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";
import { RoomServiceClient } from "livekit-server-sdk";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

// Block user
export const onBlock = async (id: string) => {
  const self = await getSelf();

  if (!self) {
    throw new Error("unauthorized");
  }

  const blockedUser = await blockUser(id);

  try {
    await roomService.removeParticipant(self.id, id);
  } catch (error) {
    console.warn("LiveKit removeParticipant failed:", error);
  }

  revalidatePath(`/u/${self.username}/community`);

  return blockedUser;
};

// Unblock user
export const onUnblock = async (id: string) => {
  const self = await getSelf();

  if (!self) {
    throw new Error("Unauthorized");
  }

  const unblockedUser = await unblockUser(id);

  revalidatePath(`/u/${self.username}/community`);

  return unblockedUser; 
};