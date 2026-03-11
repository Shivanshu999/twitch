import { getSelf } from "./auth-service";
import { db } from "./db";

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
      where: { id },
    });

    if (!otherUser) {
      throw new Error("user not found");
    }

    if (otherUser.id === self.id) {
      return true;
    }

    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self?.id,
        followingId: otherUser.id,
      },
    });
    return !!existingFollow;
  } catch {
    return false;
  }
};
export const followUser = async (id: string) => {
  const self = await getSelf();

  const otheruser = await db.user.findUnique({
    where: { id },
  });

  if (!otheruser) {
    throw new Error("user not found");
  }

  if (otheruser.id === self.id) {
    throw new Error("Cannot follow yourself");
  }

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otheruser.id,
    },
  });
  if (existingFollow) {
    throw new Error("Already following this user");
  }

  const follow = await db.follow.create({
    data: {
      followerId: self.id,
      followingId: otheruser.id,
    },
    include: {
      follower: true,
      following: true,
    },
  });

  return follow;
};
