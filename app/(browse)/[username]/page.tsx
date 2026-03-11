import {  isFollowingUser} from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import React from "react";

interface UserPageProps {
  params: Promise<{
    username: string;
  }>;
}

const UserPage = async ({ params }: UserPageProps) => {
  const { username } = await params;

  const user = await getUserByUsername(username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id)

  return (
    <div className="flex flex-col gap-y-4">
      <p>User: {username}</p>
      <p>user id: {user.id}</p>
      <p>is following: {`${isFollowing}`}</p>
    </div>
  );
};

export default UserPage;
