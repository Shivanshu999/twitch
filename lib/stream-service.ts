import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getStreamByUserId = async (userId: string) => {
  const self = await getSelf();

  const stream = await db.stream.findUnique({
    where: { userId },
    include: {
      user: true,
    },
  });

  if (!stream) {
    return null;
  }

  //  Block protection
  if (self) {
    const isBlocked = await db.block.findFirst({
      where: {
        OR: [
          {
            blockerId: userId,
            blockedId: self.id,
          },
          {
            blockerId: self.id,
            blockedId: userId,
          },
        ],
      },
    });

    if (isBlocked) {
      return null; // hide stream
    }
  }

  return stream;
};