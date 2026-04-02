import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getRecommended = async () => {
  let self = null;

  //  Handle auth safely (VERY IMPORTANT)
  try {
    self = await getSelf();
  } catch (error) {
    console.log("AUTH ERROR:", error);
  }

  //  If user is NOT logged in
  if (!self) {
    return await db.user.findMany({
      include: {
        stream: {
          select: {
            isLive: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });
  }

  //  If user is logged in
  const users = await db.user.findMany({
    where: {
      NOT: {
        id: self.id,
      },

      //  exclude users already followed
      followedBy: {
        none: {
          followerId: self.id,
        },
      },

      //  exclude users who blocked me (⚠️ your schema uses blockedby)
      blockedby: {
        none: {
          blockerId: self.id,
        },
      },
    },

    include: {
      stream: {
        select: {
          isLive: true,
        },
      },
    },

    //  show live users first (like Twitch)
    orderBy: [
      {
        stream: {
          isLive: "desc",
        },
      },
      {
        createdAt: "desc",
      },
    ],

    take: 10,
  });

  return users;
};