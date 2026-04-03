import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/u(.*)",
]);

const isUploadthingRoute = createRouteMatcher([
  "/api/uploadthing(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // ✅ Allow UploadThing but KEEP Clerk context
  if (isUploadthingRoute(req)) {
    return; // clerk still runs, just no protect()
  }

  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};