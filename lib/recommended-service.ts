import { getSelf } from "./auth-service";
import { db } from "./db";

export const getRecommended = async () => {
  const self = await getSelf();

  const users = await db.user.findMany({
    where: self
      ? {
          id: {
            not: self.id,
          },
        }
      : undefined,
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};