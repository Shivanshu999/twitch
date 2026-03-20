import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

/**
 * Check if current user is blocked by another user
 */
export const isBlockedByUser = async (id: string) => {
  const self = await getSelf();

  // If not logged in → cannot be blocked
  if (!self) return false;

  // Cannot block yourself
  if (self.id === id) return false;

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: id,
        blockedId: self.id,
      },
    },
  });

  return !!existingBlock;
};

/**
 * Block a user
 */
export const blockUser = async (id: string) => {
  const self = await getSelf();

  if (!self) {
    throw new Error("Unauthorized");
  }

  if (self.id === id) {
    throw new Error("You cannot block yourself");
  }

  const otherUser = await db.user.findUnique({
    where: { id },
  });

  if (!otherUser) {
    throw new Error("User not found");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: otherUser.id,
      },
    },
  });

  if (existingBlock) {
    throw new Error("Already blocked");
  }

  const block = await db.block.create({
    data: {
      blockerId: self.id,
      blockedId: otherUser.id,
    },
    include: {
      blocked: true,
    },
  });

  return block;
};

/**
 * Unblock a user
 */
export const unblockUser = async (id: string) => {
  const self = await getSelf();

  if (!self) {
    throw new Error("Unauthorized");
  }

  if (self.id === id) {
    throw new Error("Cannot unblock yourself");
  }

  const existingBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: id,
      },
    },
  });

  if (!existingBlock) {
    throw new Error("User is not blocked");
  }

  const unblock = await db.block.delete({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: id,
      },
    },
    include: {
      blocked: true,
    },
  });

  return unblock;
};

/**
 * Get all blocked users for current user
 */
export const getBlockedUsers = async () => {
  const self = await getSelf();

  if (!self) {
    throw new Error("Unauthorized");
  }

  const blockedUsers = await db.block.findMany({
    where: {
      blockerId: self.id,
    },
    include: {
      blocked: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return blockedUsers;
};