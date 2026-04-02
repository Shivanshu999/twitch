import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getStreams = async () => {
  const self = await getSelf();
  const userId = self?.id;

  const streams = await db.stream.findMany({
    where: userId
      ? {
          AND: [
            // Users who blocked me
            {
              user: {
                NOT: {
                  blocking: {
                    some: {
                      blockedId: userId,
                    },
                  },
                },
              },
            },
            // Users I blocked
            {
              user: {
                NOT: {
                  blockedby: {
                    some: {
                      blockerId: userId,
                    },
                  },
                },
              },
            },
          ],
        }
      : undefined,

    select: {
      id: true,
      user: true,
      isLive: true,
      title: true,
      thumbnail: true,
    },

    orderBy: [
      { isLive: "desc" },
      { updatedAt: "desc" },
    ],

    take: 20, 
  });

  return streams;
};