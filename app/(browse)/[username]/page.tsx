import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import React from "react";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);
  if (!user) {
    return notFound();
  }
  const { username } = await params;

  return (
    <div className="flex flex-col gap-y-4">
      <p>User: {username}</p>
      <p>user: {user.id}</p>
    </div>
  );
};

export default UserPage;
