import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getSearch = async (term?: string) => {
  const self = await getSelf();
  const userId = self?.id;

  const streams = await db.stream.findMany({
    where: {
      AND: [
        // Exclude self
        userId
          ? {
              user: {
                NOT: {
                  id: userId,
                },
              },
            }
          : {},

        // Search filter
        {
          OR: [
            {
              title: {
                contains: term ?? "",
                mode: "insensitive", // 🔥 better UX
              },
            },
            {
              user: {
                username: {
                  contains: term ?? "",
                  mode: "insensitive",
                },
              },
            },
          ],
        },

        // Block filtering (VERY IMPORTANT)
        userId
          ? {
              user: {
                AND: [
                  {
                    NOT: {
                      blocking: {
                        some: {
                          blockedId: userId,
                        },
                      },
                    },
                  },
                  {
                    NOT: {
                      blockedby: {
                        some: {
                          blockerId: userId,
                        },
                      },
                    },
                  },
                ],
              },
            }
          : {},
      ],
    },

    select: {
      user: true,
      id: true,
      title: true,
      isLive: true,
      thumbnail: true,
      updatedAt: true,
    },

    orderBy: [{ isLive: "desc" }, { updatedAt: "desc" }],

    take: 20,
  });

  return streams;
};
