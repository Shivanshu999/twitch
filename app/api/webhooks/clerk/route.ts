import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return new Response("Missing CLERK_WEBHOOK_SECRET", { status: 500 });
  }

  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, username, image_url } = evt.data;

    await db.user.create({
      data: {
      externalUserId: id,
      username: username ?? id,
      imageUrl: image_url,
      stream: {
          create: {
            title: `${payload.data.username}'s stream`,
          },
        },
    },
    });
  }

  if (eventType === "user.updated") {
  const { id, username, image_url } = evt.data;

  await db.user.update({
    where: {
      externalUserId: id,
    },
    data: {
      username: username ?? id,
      imageUrl: image_url,
    },
  });
}

if (eventType === "user.deleted") {
  const { id } = evt.data;

  await db.user.delete({
    where: {
      externalUserId: id,
    },
  });
}

  return new Response("Webhook received", { status: 200 });
}
