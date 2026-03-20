import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getRecommended = async () => {

  const self = await getSelf();

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

  const users = await db.user.findMany({
    where: {
      NOT: {
        id: self.id,
      },
      followedBy: {
        none: {
          followerId: self.id,
        },
      },
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
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });

  return users;
};