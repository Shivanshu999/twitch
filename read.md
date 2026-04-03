├── app/ (15400 tokens)
    ├── favicon.ico
    ├── (auth)/ (500 tokens)
    │   ├── sign-in/ (100 tokens)
    │   │   └── [[...sign-in]]/ (100 tokens)
    │   │   │   └── page.tsx
    │   ├── sign-up/ (100 tokens)
    │   │   └── [[...sign-up]]/ (100 tokens)
    │   │   │   └── page.tsx
    │   ├── layout.tsx
    │   └── _components/ (200 tokens)
    │   │   └── logo.tsx (200 tokens)
    ├── api/ (1100 tokens)
    │   ├── uploadthing/ (300 tokens)
    │   │   ├── route.ts
    │   │   └── core.ts (200 tokens)
    │   └── webhooks/ (800 tokens)
    │   │   ├── livekit/ (300 tokens)
    │   │       └── route.ts (300 tokens)
    │   │   └── clerk/ (500 tokens)
    │   │       └── route.ts (500 tokens)
    ├── (dashboard)/ (6800 tokens)
    │   └── u/ (6800 tokens)
    │   │   └── [username]/ (6800 tokens)
    │   │       ├── _components/ (2200 tokens)
    │   │           ├── sidebar/ (1400 tokens)
    │   │           │   ├── index.tsx
    │   │           │   ├── wrapper.tsx (200 tokens)
    │   │           │   ├── toggle.tsx (300 tokens)
    │   │           │   ├── navigation.tsx (400 tokens)
    │   │           │   └── nav-item.tsx (400 tokens)
    │   │           ├── navbar/ (600 tokens)
    │   │           │   ├── index.tsx
    │   │           │   ├── actions.tsx (200 tokens)
    │   │           │   └── logo.tsx (300 tokens)
    │   │           └── container.tsx (200 tokens)
    │   │       ├── chat/ (800 tokens)
    │   │           ├── loading.tsx
    │   │           ├── page.tsx (300 tokens)
    │   │           └── _components/ (400 tokens)
    │   │           │   └── toggle-card.tsx (400 tokens)
    │   │       ├── keys/ (1600 tokens)
    │   │           ├── _components/ (1400 tokens)
    │   │           │   ├── url-card.tsx (200 tokens)
    │   │           │   ├── copy-button.tsx (200 tokens)
    │   │           │   ├── key-card.tsx (300 tokens)
    │   │           │   └── connect-modal.tsx (700 tokens)
    │   │           └── page.tsx (200 tokens)
    │   │       ├── (home)/ (200 tokens)
    │   │           └── page.tsx (200 tokens)
    │   │       ├── layout.tsx (200 tokens)
    │   │       └── community/ (1800 tokens)
    │   │           ├── page.tsx (200 tokens)
    │   │           └── _components/ (1600 tokens)
    │   │               ├── unblock-button.tsx (200 tokens)
    │   │               ├── columns.tsx (400 tokens)
    │   │               └── data-table.tsx (1000 tokens)
    ├── (browse)/ (6000 tokens)
    │   ├── (home)/ (800 tokens)
    │   │   ├── page.tsx
    │   │   └── _components/ (700 tokens)
    │   │   │   ├── results.tsx (300 tokens)
    │   │   │   └── result-card.tsx (400 tokens)
    │   ├── _components/ (3300 tokens)
    │   │   ├── navbar/ (1100 tokens)
    │   │   │   ├── index.tsx
    │   │   │   ├── actions.tsx (300 tokens)
    │   │   │   ├── logo.tsx (300 tokens)
    │   │   │   └── search.tsx (400 tokens)
    │   │   ├── container.tsx (200 tokens)
    │   │   └── sidebar/ (2000 tokens)
    │   │   │   ├── index.tsx (300 tokens)
    │   │   │   ├── wrapper.tsx (300 tokens)
    │   │   │   ├── recommended.tsx (300 tokens)
    │   │   │   ├── following.tsx (300 tokens)
    │   │   │   ├── toggle.tsx (400 tokens)
    │   │   │   └── user-item.tsx (400 tokens)
    │   ├── layout.tsx (200 tokens)
    │   ├── search/ (1000 tokens)
    │   │   ├── page.tsx (200 tokens)
    │   │   └── _components/ (800 tokens)
    │   │   │   ├── result.tsx (300 tokens)
    │   │   │   └── result-card.tsx (500 tokens)
    │   └── [username]/ (700 tokens)
    │   │   ├── page.tsx (300 tokens)
    │   │   └── _components/ (400 tokens)
    │   │       └── actions.tsx (400 tokens)
    ├── error.tsx
    ├── not-found.tsx (200 tokens)
    ├── globals.css (300 tokens)
    └── layout.tsx (300 tokens)
├── public/ (900 tokens)
    ├── spooky.png
    ├── vercel.svg
    ├── window.svg
    ├── file.svg
    ├── globe.svg (200 tokens)
    └── next.svg (300 tokens)
├── postcss.config.js
├── postcss.config.mjs
├── prisma/ (1700 tokens)
    ├── migrations/ (1100 tokens)
    │   ├── migration_lock.toml
    │   ├── 20260304104614/ (200 tokens)
    │   │   └── migration.sql (200 tokens)
    │   ├── 20260310145240_follow_schema/ (300 tokens)
    │   │   └── migration.sql (300 tokens)
    │   └── 20260316125243_block_and_stream_schema/ (500 tokens)
    │   │   └── migration.sql (500 tokens)
    └── schema.prisma (600 tokens)
├── next.config.ts
├── tailwind.config.js
├── lib/ (3800 tokens)
    ├── db.ts
    ├── utils.ts
    ├── uploadthing.ts
    ├── stream-service.ts (200 tokens)
    ├── user-service.ts (300 tokens)
    ├── feed-service.ts (300 tokens)
    ├── auth-service.ts (300 tokens)
    ├── recommended-service.ts (400 tokens)
    ├── search-service.ts (500 tokens)
    ├── block-service.ts (700 tokens)
    └── follow-service.ts (800 tokens)
├── components/ (19900 tokens)
    ├── verified-mark.tsx
    ├── ui/ (8100 tokens)
    │   ├── skeleton.tsx
    │   ├── label.tsx (200 tokens)
    │   ├── separator.tsx (200 tokens)
    │   ├── textarea.tsx (200 tokens)
    │   ├── hint.tsx (200 tokens)
    │   ├── input.tsx (300 tokens)
    │   ├── switch.tsx (400 tokens)
    │   ├── scroll-area.tsx (400 tokens)
    │   ├── alert.tsx (400 tokens)
    │   ├── tooltip.tsx (500 tokens)
    │   ├── slider.tsx (500 tokens)
    │   ├── button.tsx (600 tokens)
    │   ├── table.tsx (700 tokens)
    │   ├── avatar.tsx (800 tokens)
    │   ├── dialog.tsx (1100 tokens)
    │   └── select.tsx (1500 tokens)
    ├── theme-provider.tsx
    ├── live-badge.tsx
    ├── stream-player/ (10500 tokens)
    │   ├── loading-video.tsx
    │   ├── offline-video.tsx
    │   ├── fullscreen-control.tsx (200 tokens)
    │   ├── cheat-header.tsx (200 tokens)
    │   ├── chat-message.tsx (200 tokens)
    │   ├── chat-toggle.tsx (300 tokens)
    │   ├── variant-toggle.tsx (300 tokens)
    │   ├── chat-list.tsx (300 tokens)
    │   ├── volume-control.tsx (300 tokens)
    │   ├── about-card.tsx (300 tokens)
    │   ├── video.tsx (400 tokens)
    │   ├── chat-info.tsx (400 tokens)
    │   ├── community-item.tsx (500 tokens)
    │   ├── info-card.tsx (500 tokens)
    │   ├── actions.tsx (500 tokens)
    │   ├── bio-modal.tsx (500 tokens)
    │   ├── chat-community.tsx (600 tokens)
    │   ├── chat-form.tsx (600 tokens)
    │   ├── header.tsx (700 tokens)
    │   ├── chat.tsx (700 tokens)
    │   ├── live-video.tsx (800 tokens)
    │   ├── index.tsx (900 tokens)
    │   └── info-modal.tsx (1100 tokens)
    ├── hint.tsx (200 tokens)
    ├── user-avatar.tsx (400 tokens)
    └── thumbnail.tsx (400 tokens)
├── store/ (400 tokens)
    ├── use-sidebar.ts
    ├── use-creator-sidebar.ts
    └── use-chat-sidebar.ts (200 tokens)
├── proxy.ts
├── prisma.config.ts
├── eslint.config.mjs
├── components.json (200 tokens)
├── actions/ (2000 tokens)
    ├── user.ts (200 tokens)
    ├── follow.ts (200 tokens)
    ├── block.ts (300 tokens)
    ├── stream.ts (300 tokens)
    ├── token.ts (300 tokens)
    └── ingress.ts (700 tokens)
├── .gitignore (200 tokens)
├── tsconfig.json (200 tokens)
├── hooks/ (300 tokens)
    └── use-viewer-token.ts (300 tokens)
├── README.md (400 tokens)
└── package.json (400 tokens)





--------------------------------------------------------------------------------
/postcss.config.js:
--------------------------------------------------------------------------------
1 | export default {
2 |   plugins: {
3 |     "@tailwindcss/postcss": {},
4 |   },
5 | };




--------------------------------------------------------------------------------
/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | const config = {
2 |   plugins: {
3 |     "@tailwindcss/postcss": {},
4 |     autoprefixer: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 


--------------------------------------------------------------------------------
/app/(auth)/sign-in/[[...sign-in]]/page.tsx:
--------------------------------------------------------------------------------
1 | "use client"
2 | import { SignIn } from '@clerk/nextjs'
3 | 
4 | export default function Page() {
5 |   return <SignIn />
6 | }


--------------------------------------------------------------------------------
/app/(auth)/sign-up/[[...sign-up]]/page.tsx:
--------------------------------------------------------------------------------
1 | "use client"
2 | import { SignUp } from '@clerk/nextjs'
3 | 
4 | export default function Page() {
5 |   return <SignUp />
6 | }
7 | 


--------------------------------------------------------------------------------
/prisma/migrations/migration_lock.toml:
--------------------------------------------------------------------------------
1 | # Please do not edit this file manually
2 | # It should be added in your version-control system (e.g., Git)
3 | provider = "postgresql"
4 | 


--------------------------------------------------------------------------------
/next.config.ts:
--------------------------------------------------------------------------------
1 | import type { NextConfig } from "next";
2 | 
3 | const nextConfig: NextConfig = {
4 |   turbopack: {
5 |     root: __dirname,
6 |   },
7 | };
8 | 
9 | export default nextConfig;


--------------------------------------------------------------------------------
/tailwind.config.js:
--------------------------------------------------------------------------------
 1 | /** @type {import('tailwindcss').Config} */
 2 | module.exports = {
 3 |   content: [],
 4 |   theme: {
 5 |     extend: {},
 6 |   },
 7 |   plugins: [],
 8 | }
 9 | 
10 | 


--------------------------------------------------------------------------------
/app/api/uploadthing/route.ts:
--------------------------------------------------------------------------------
1 | import { createRouteHandler } from "uploadthing/next";
2 | 
3 | import { ourFileRouter } from "./core";
4 | 
5 | // Export routes for Next App Router
6 | export const { GET, POST } = createRouteHandler({
7 |   router: ourFileRouter,
8 | });


--------------------------------------------------------------------------------
/lib/db.ts:
--------------------------------------------------------------------------------
 1 | import { PrismaClient } from "@prisma/client";
 2 | 
 3 | declare global {
 4 |   var prisma: PrismaClient | undefined;
 5 | }
 6 | 
 7 | export const db = globalThis.prisma ?? new PrismaClient();
 8 | 
 9 | if (process.env.NODE_ENV !== "production") {
10 |   globalThis.prisma = db;
11 | }


--------------------------------------------------------------------------------
/components/verified-mark.tsx:
--------------------------------------------------------------------------------
 1 | import { Check } from "lucide-react";
 2 | 
 3 | export const VerifiedMark = () => {
 4 |   return (
 5 |     <div className="p-0.5 flex items-center justify-center h-4 w-4 rounded-full bg-blue-600">
 6 |       <Check className="h-2.5 w-2.5 text-primary stroke-[4px]" />
 7 |     </div>
 8 |   );
 9 | };
10 | 


--------------------------------------------------------------------------------
/lib/utils.ts:
--------------------------------------------------------------------------------
 1 | import { clsx, type ClassValue } from "clsx"
 2 | import { twMerge } from "tailwind-merge"
 3 | import stc from "string-to-color";
 4 | export function cn(...inputs: ClassValue[]) {
 5 |   return twMerge(clsx(inputs))
 6 | }
 7 | 
 8 | export const stringToColor = (str: string) => {
 9 |   return stc(str);
10 | };
11 | 
12 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/sidebar/index.tsx:
--------------------------------------------------------------------------------
 1 | import { Wrapper } from "./wrapper";
 2 | import { Navigation } from "./navigation";
 3 | import { Toggle } from "./toggle";
 4 | 
 5 | export const Sidebar = () => {
 6 |   return (
 7 |     <Wrapper>
 8 |       <Toggle />
 9 |       <Navigation />
10 |     </Wrapper>
11 |   );
12 | };


--------------------------------------------------------------------------------
/lib/uploadthing.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   generateUploadButton,
 3 |   generateUploadDropzone,
 4 | } from "@uploadthing/react";
 5 | 
 6 | import type { OurFileRouter } from "../app/api/uploadthing/core";
 7 | 
 8 | export const UploadButton = generateUploadButton<OurFileRouter>();
 9 | export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
10 | 


--------------------------------------------------------------------------------
/components/ui/skeleton.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils"
 2 | 
 3 | function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
 4 |   return (
 5 |     <div
 6 |       data-slot="skeleton"
 7 |       className={cn("animate-pulse rounded-md bg-accent", className)}
 8 |       {...props}
 9 |     />
10 |   )
11 | }
12 | 
13 | export { Skeleton }
14 | 


--------------------------------------------------------------------------------
/components/theme-provider.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { ThemeProvider as NextThemesProvider } from "next-themes"
 5 | 
 6 | export function ThemeProvider({
 7 |   children,
 8 |   ...props
 9 | }: React.ComponentProps<typeof NextThemesProvider>) {
10 |   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
11 | }


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/navbar/index.tsx:
--------------------------------------------------------------------------------
 1 | import { Actions } from "./actions";
 2 | import { Logo } from "./logo";
 3 | 
 4 | export const Navbar = () => {
 5 |   return (
 6 |     <nav className="fixed top-0 w-full h-20 z-50 bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
 7 |       <Logo />
 8 |       <Actions />
 9 |     </nav>
10 |   );
11 | };


--------------------------------------------------------------------------------
/app/(browse)/(home)/page.tsx:
--------------------------------------------------------------------------------
 1 | import { Suspense } from "react";
 2 | 
 3 | import { Results, ResultsSkeleton } from "./_components/results";
 4 | 
 5 | export default function Page() {
 6 |   return (
 7 |     <div className="h-full p-8 max-w-screen-2xl mx-auto">
 8 |       <Suspense fallback={<ResultsSkeleton />}>
 9 |         <Results />
10 |       </Suspense>
11 |     </div>
12 |   );
13 | }
14 | 





--------------------------------------------------------------------------------
/store/use-sidebar.ts:
--------------------------------------------------------------------------------
 1 | import {create} from "zustand";
 2 | 
 3 | interface SidebarStore{
 4 |     collapsed: boolean;
 5 |     onExpand: () => void;
 6 |     onCollapse: () => void;
 7 | }
 8 | 
 9 | export const useSidebar = create<SidebarStore>((set) => ({
10 |     collapsed: false,
11 |     onExpand: () => set( () => ({collapsed: false})),
12 |     onCollapse: () => set( () => ({collapsed: true}))
13 | }))


--------------------------------------------------------------------------------
/app/(browse)/_components/navbar/index.tsx:
--------------------------------------------------------------------------------
 1 | import { Actions } from "./actions";
 2 | import { Logo } from "./logo";
 3 | import { Search } from "./search";
 4 | 
 5 | export const Navbar = () => {
 6 |   return (
 7 |     <nav className="fixed top-0 w-full h-20 z-50 bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
 8 |       <Logo />
 9 |       <Search />
10 |       <Actions />
11 |     </nav>
12 |   );
13 | };


--------------------------------------------------------------------------------
/app/(auth)/layout.tsx:
--------------------------------------------------------------------------------
 1 | import { Logo } from "./_components/logo";
 2 | 
 3 | 
 4 | const AuthLayout = ({
 5 |   children,
 6 | }: { children: React.ReactNode }) => {
 7 |   return (
 8 |      
 9 |     
10 |       <div
11 |         className="h-full flex flex-col items-center justify-center"
12 |       >
13 |         <Logo/>
14 |         {children}
15 |       </div>
16 |     
17 |     
18 |   );
19 | }
20 | export default AuthLayout;
21 | 


--------------------------------------------------------------------------------
/store/use-creator-sidebar.ts:
--------------------------------------------------------------------------------
 1 | import {create} from "zustand";
 2 | 
 3 | interface CreatorSidebarStore{
 4 |     collapsed: boolean;
 5 |     onExpand: () => void;
 6 |     onCollapse: () => void;
 7 | }
 8 | 
 9 | export const useCreatorSidebar = create<CreatorSidebarStore>((set) => ({
10 |     collapsed: false,
11 |     onExpand: () => set( () => ({collapsed: false})),
12 |     onCollapse: () => set( () => ({collapsed: true}))
13 | }))


--------------------------------------------------------------------------------
/proxy.ts:
--------------------------------------------------------------------------------
 1 | import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
 2 | 
 3 | const isProtectedRoute = createRouteMatcher([
 4 |   "/u(.*)", // ✅ only protect dashboard routes
 5 | ]);
 6 | 
 7 | export default clerkMiddleware(async (auth, req) => {
 8 |   if (isProtectedRoute(req)) {
 9 |     await auth.protect();
10 |   }
11 | });
12 | 
13 | export const config = {
14 |   matcher: [
15 |     "/((?!_next|.*\\..*).*)",
16 |     "/(api|trpc)(.*)",
17 |   ],
18 | };


--------------------------------------------------------------------------------
/prisma.config.ts:
--------------------------------------------------------------------------------
 1 | 
 2 | // This file was generated by Prisma and assumes you have installed the following:
 3 | // npm install --save-dev prisma dotenv
 4 | import "dotenv/config";
 5 | import { defineConfig, env } from "prisma/config";
 6 | 
 7 | export default defineConfig({
 8 |   schema: "prisma/schema.prisma",
 9 |   migrations: {
10 |     path: "prisma/migrations",
11 |   },
12 |   engine: "classic",
13 |   datasource: {
14 |     url: env("DATABASE_URL"),
15 |   },
16 | });
17 | 


--------------------------------------------------------------------------------
/components/live-badge.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils";
 2 | 
 3 | interface LiveBadgeProps {
 4 |   className?: string;
 5 | }
 6 | 
 7 | export const LiveBadge = ({ className }: LiveBadgeProps) => {
 8 |   return (
 9 |     <div
10 |       className={cn(
11 |         "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide",
12 |         className
13 |       )}
14 |     >
15 |       Live
16 |     </div>
17 |   );
18 | };
19 | 


--------------------------------------------------------------------------------
/components/stream-player/loading-video.tsx:
--------------------------------------------------------------------------------
 1 | import { Loader } from "lucide-react";
 2 | 
 3 | interface LoadingVideoProps {
 4 |   label: string;
 5 | }
 6 | 
 7 | export const LoadingVideo = ({ label }: LoadingVideoProps) => {
 8 |   return (
 9 |     <div className="h-full flex flex-col space-y-4 justify-center items-center">
10 |       <Loader className="h-10 w-10 text-muted-foreground animate-spin" />
11 |       <p className="text-muted-foreground capitalize">{label}</p>
12 |     </div>
13 |   );
14 | };
15 | 


--------------------------------------------------------------------------------
/components/stream-player/offline-video.tsx:
--------------------------------------------------------------------------------
 1 | import { WifiOff } from "lucide-react";
 2 | 
 3 | interface OfflineVideoProps {
 4 |   username: string;
 5 | }
 6 | 
 7 | export const OfflineVideo = ({ username }: OfflineVideoProps) => {
 8 |   return (
 9 |     <div className="h-full flex flex-col space-y-4 justify-center items-center">
10 |       <WifiOff className="h-10 w-10 text-muted-foreground" />
11 |       <p className="text-muted-foreground">{username} is offline</p>
12 |     </div>
13 |   );
14 | };
15 | 


--------------------------------------------------------------------------------
/app/error.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import Link from "next/link";
 4 | 
 5 | import { Button } from "@/components/ui/button";
 6 | 
 7 | const ErrorPage = () => {
 8 |   return (
 9 |     <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
10 |       <p>Something went wrong</p>
11 |       <Button variant="secondary" asChild>
12 |         <Link href="/">Go back home</Link>
13 |       </Button>
14 |     </div>
15 |   );
16 | };
17 | 
18 | export default ErrorPage;
19 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/chat/loading.tsx:
--------------------------------------------------------------------------------
 1 | import { Skeleton } from "@/components/ui/skeleton";
 2 | 
 3 | import { ToggleCardSkeleton } from "./_components/toggle-card";
 4 | 
 5 | const ChatLoading = () => {
 6 |   return (
 7 |     <div className="p-6 space-y-4">
 8 |       <Skeleton className="h-10 w-50" />
 9 |       <div className="space-y-4">
10 |         <ToggleCardSkeleton />
11 |         <ToggleCardSkeleton />
12 |         <ToggleCardSkeleton />
13 |       </div>
14 |     </div>
15 |   );
16 | };
17 | 
18 | export default ChatLoading;
19 | 


--------------------------------------------------------------------------------
/eslint.config.mjs:
--------------------------------------------------------------------------------
 1 | import { defineConfig, globalIgnores } from "eslint/config";
 2 | import nextVitals from "eslint-config-next/core-web-vitals";
 3 | import nextTs from "eslint-config-next/typescript";
 4 | 
 5 | const eslintConfig = defineConfig([
 6 |   ...nextVitals,
 7 |   ...nextTs,
 8 |   // Override default ignores of eslint-config-next.
 9 |   globalIgnores([
10 |     // Default ignores of eslint-config-next:
11 |     ".next/**",
12 |     "out/**",
13 |     "build/**",
14 |     "next-env.d.ts",
15 |   ]),
16 | ]);
17 | 
18 | export default eslintConfig;
19 | 


--------------------------------------------------------------------------------
/app/not-found.tsx:
--------------------------------------------------------------------------------
 1 | import Link from "next/link";
 2 | 
 3 | import { Button } from "@/components/ui/button";
 4 | 
 5 | const NotFoundPage = () => {
 6 |   return (
 7 |     <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
 8 |       <h1 className="text-4xl">404</h1>
 9 |       <p>We couldn&apos;t find the user you were looking for.</p>
10 |       <Button variant="secondary" asChild>
11 |         <Link href="/">Go back home</Link>
12 |       </Button>
13 |     </div>
14 |   );
15 | };
16 | 
17 | export default NotFoundPage;
18 | 


--------------------------------------------------------------------------------
/components.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema.json",
 3 |   "style": "new-york",
 4 |   "rsc": true,
 5 |   "tsx": true,
 6 |   "tailwind": {
 7 |     "config": "",
 8 |     "css": "app/globals.css",
 9 |     "baseColor": "neutral",
10 |     "cssVariables": true,
11 |     "prefix": ""
12 |   },
13 |   "iconLibrary": "lucide",
14 |   "rtl": false,
15 |   "aliases": {
16 |     "components": "@/components",
17 |     "utils": "@/lib/utils",
18 |     "ui": "@/components/ui",
19 |     "lib": "@/lib",
20 |     "hooks": "@/hooks"
21 |   },
22 |   "registries": {}
23 | }
24 | 


--------------------------------------------------------------------------------
/prisma/migrations/20260304104614/migration.sql:
--------------------------------------------------------------------------------
 1 | -- CreateTable
 2 | CREATE TABLE "User" (
 3 |     "id" TEXT NOT NULL,
 4 |     "username" TEXT NOT NULL,
 5 |     "imageUrl" TEXT NOT NULL,
 6 |     "externalUserId" TEXT NOT NULL,
 7 |     "bio" TEXT,
 8 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 9 |     "updatedAt" TIMESTAMP(3) NOT NULL,
10 | 
11 |     CONSTRAINT "User_pkey" PRIMARY KEY ("id")
12 | );
13 | 
14 | -- CreateIndex
15 | CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
16 | 
17 | -- CreateIndex
18 | CREATE UNIQUE INDEX "User_externalUserId_key" ON "User"("externalUserId");
19 | 
20 | 


--------------------------------------------------------------------------------
/app/(browse)/layout.tsx:
--------------------------------------------------------------------------------
 1 | import { Suspense } from "react";
 2 | import { Container } from "./_components/container";
 3 | import { Navbar } from "./_components/navbar";
 4 | import { Sidebar, SidebarSkeleton } from "./_components/sidebar";
 5 | 
 6 | const BrowserLayout = ({ children }: { children: React.ReactNode }) => {
 7 |   return (
 8 |     <>
 9 |       <Navbar />
10 |       <div className="flex h-full pt-20">
11 |         <Suspense fallback={<SidebarSkeleton />}>
12 |         <Sidebar />
13 |         </Suspense>
14 |         <Container>{children}</Container>
15 |       </div>
16 |     </>
17 |   );
18 | };
19 | 
20 | export default BrowserLayout;
21 | 


--------------------------------------------------------------------------------
/actions/user.ts:
--------------------------------------------------------------------------------
 1 | "use server";
 2 | 
 3 | import { User } from "@prisma/client";
 4 | import { revalidatePath } from "next/cache";
 5 | 
 6 | import { db } from "@/lib/db";
 7 | import { getSelf } from "@/lib/auth-service";
 8 | 
 9 | export const updateUser = async (values: Partial<User>) => {
10 |   const self = await getSelf();
11 | 
12 |   if(!self) return false
13 | 
14 |   const validData = {
15 |     bio: values.bio,
16 |   };
17 | 
18 |   const user = await db.user.update({
19 |     where: { id: self.id },
20 |     data: { ...validData },
21 |   });
22 | 
23 |   revalidatePath(`/${self.username}`);
24 |   revalidatePath(`/u/${self.username}`);
25 | 
26 |   return user;
27 | };
28 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/sidebar/wrapper.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { cn } from "@/lib/utils";
 4 | import { useCreatorSidebar } from "@/store/use-creator-sidebar";
 5 | 
 6 | interface WrapperProps {
 7 |   children: React.ReactNode;
 8 | }
 9 | 
10 | export const Wrapper = ({ children }: WrapperProps) => {
11 |   const { collapsed } = useCreatorSidebar((state) => state);
12 | 
13 |   return (
14 |     <aside
15 |       className={cn(
16 |         "fixed left-0 flex flex-col w-17.5 lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
17 |         collapsed && "lg:w-17.5"
18 |       )}
19 |     >
20 |       {children}
21 |     </aside>
22 |   );
23 | };
24 | 


--------------------------------------------------------------------------------
/store/use-chat-sidebar.ts:
--------------------------------------------------------------------------------
 1 | import { create } from "zustand";
 2 | 
 3 | export enum ChatVariant {
 4 |   CHAT = "CHAT",
 5 |   COMMUNITY = "COMMUNITY",
 6 | }
 7 | 
 8 | interface ChatSidebarStore {
 9 |   collapsed: boolean;
10 |   variant: ChatVariant;
11 |   onExpand: () => void;
12 |   onCollapse: () => void;
13 |   onChangeVariant: (variant: ChatVariant) => void;
14 | }
15 | 
16 | export const useChatSidebar = create<ChatSidebarStore>((set) => ({
17 |   collapsed: false,
18 |   variant: ChatVariant.CHAT,
19 |   onExpand: () => set(() => ({ collapsed: false })),
20 |   onCollapse: () => set(() => ({ collapsed: true })),
21 |   onChangeVariant: (variant: ChatVariant) => set(() => ({ variant })),
22 | }));
23 | 


--------------------------------------------------------------------------------
/app/(browse)/search/page.tsx:
--------------------------------------------------------------------------------
 1 | import { Suspense } from "react";
 2 | import { redirect } from "next/navigation";
 3 | 
 4 | import { Results, ResultsSkeleton } from "./_components/result";
 5 | 
 6 | interface SearchPageProps {
 7 |   searchParams: Promise<{
 8 |     term?: string;
 9 |   }>;
10 | }
11 | 
12 | const SearchPage = async ({ searchParams }: SearchPageProps) => {
13 |   const { term } = await searchParams;
14 | 
15 |   if (!term) {
16 |     redirect("/");
17 |   }
18 | 
19 |   return (
20 |     <div className="h-full p-8 max-w-screen-2xl mx-auto">
21 |       <Suspense fallback={<ResultsSkeleton />}>
22 |         <Results term={term} />
23 |       </Suspense>
24 |     </div>
25 |   );
26 | };
27 | 
28 | export default SearchPage;


--------------------------------------------------------------------------------
/components/ui/label.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { Label as LabelPrimitive } from "radix-ui"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Label({
 9 |   className,
10 |   ...props
11 | }: React.ComponentProps<typeof LabelPrimitive.Root>) {
12 |   return (
13 |     <LabelPrimitive.Root
14 |       data-slot="label"
15 |       className={cn(
16 |         "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
17 |         className
18 |       )}
19 |       {...props}
20 |     />
21 |   )
22 | }
23 | 
24 | export { Label }
25 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/navbar/actions.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/components/ui/button";
 2 | import { SignInButton, UserButton } from "@clerk/nextjs";
 3 | import { currentUser } from "@clerk/nextjs/server";
 4 | import { Clapperboard, LogOut } from "lucide-react";
 5 | import Link from "next/link";
 6 | 
 7 | export const Actions = async () => {
 8 | 
 9 |   return (
10 |     <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
11 |      <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
12 |       <Link href="/">
13 |         <LogOut className="h-5 w-5 mr-2"/>
14 |         Exit
15 |       </Link>
16 |      </Button>
17 |      <UserButton  afterSignOutUrl="/"/>
18 |     </div>
19 |   );
20 | };


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | /node_modules
 5 | /.pnp
 6 | .pnp.*
 7 | .yarn/*
 8 | !.yarn/patches
 9 | !.yarn/plugins
10 | !.yarn/releases
11 | !.yarn/versions
12 | 
13 | # testing
14 | /coverage
15 | 
16 | # next.js
17 | /.next/
18 | /out/
19 | 
20 | # production
21 | /build
22 | 
23 | # misc
24 | .DS_Store
25 | *.pem
26 | 
27 | # debug
28 | npm-debug.log*
29 | yarn-debug.log*
30 | yarn-error.log*
31 | .pnpm-debug.log*
32 | 
33 | # env files (can opt-in for committing if needed)
34 | .env*
35 | 
36 | # vercel
37 | .vercel
38 | 
39 | # typescript
40 | *.tsbuildinfo
41 | next-env.d.ts
42 | 
43 | # clerk configuration (can include secrets)
44 | /.clerk/
45 | 
46 | /generated/prisma
47 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/keys/_components/url-card.tsx:
--------------------------------------------------------------------------------
 1 | import { Input } from "@/components/ui/input";
 2 | 
 3 | import { CopyButton } from "./copy-button";
 4 | 
 5 | interface UrlCardProps {
 6 |   value: string | null;
 7 | }
 8 | 
 9 | export const UrlCard = ({ value }: UrlCardProps) => {
10 |   return (
11 |     <div className="rounded-xl bg-muted p-6">
12 |       <div className="flex items-center gap-x-10">
13 |         <p className="font-semibold shrink-0">Server URL</p>
14 |         <div className="space-y-2 w-full">
15 |           <div className="w-full flex items-center gap-x-2">
16 |             <Input value={value || ""} disabled placeholder="Server URL" />
17 |             <CopyButton value={value || ""} />
18 |           </div>
19 |         </div>
20 |       </div>
21 |     </div>
22 |   );
23 | };
24 | 


--------------------------------------------------------------------------------
/components/ui/separator.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { Separator as SeparatorPrimitive } from "radix-ui"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Separator({
 9 |   className,
10 |   orientation = "horizontal",
11 |   decorative = true,
12 |   ...props
13 | }: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
14 |   return (
15 |     <SeparatorPrimitive.Root
16 |       data-slot="separator"
17 |       decorative={decorative}
18 |       orientation={orientation}
19 |       className={cn(
20 |         "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
21 |         className
22 |       )}
23 |       {...props}
24 |     />
25 |   )
26 | }
27 | 
28 | export { Separator }
29 | 


--------------------------------------------------------------------------------
/components/ui/textarea.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | import { cn } from "@/lib/utils"
 4 | 
 5 | function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
 6 |   return (
 7 |     <textarea
 8 |       data-slot="textarea"
 9 |       className={cn(
10 |         "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
11 |         className
12 |       )}
13 |       {...props}
14 |     />
15 |   )
16 | }
17 | 
18 | export { Textarea }
19 | 


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2023",
 4 |     "lib": ["dom", "dom.iterable", "esnext"],
 5 |     "allowJs": true,
 6 |     "skipLibCheck": true,
 7 |     "strict": true,
 8 |     "noEmit": true,
 9 |     "esModuleInterop": true,
10 |     "module": "esnext",
11 |     "moduleResolution": "bundler",
12 |     "resolveJsonModule": true,
13 |     "isolatedModules": true,
14 |     "jsx": "react-jsx",
15 |     "incremental": true,
16 |     "ignoreDeprecations": "6.0",
17 |     "plugins": [
18 |       {
19 |         "name": "next"
20 |       }
21 |     ],
22 |     "paths": {
23 |       "@/*": ["./*"]
24 |     }
25 |   },
26 |   "include": [
27 |     "next-env.d.ts",
28 |     "**/*.ts",
29 |     "**/*.tsx",
30 |     ".next/types/**/*.ts",
31 |     ".next/dev/types/**/*.ts",
32 |     "**/*.mts"
33 |   ],
34 |   "exclude": ["node_modules"]
35 | }
36 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/(home)/page.tsx:
--------------------------------------------------------------------------------
 1 | import { currentUser } from "@clerk/nextjs/server";
 2 | 
 3 | import { getUserByUsername } from "@/lib/user-service";
 4 | import { StreamPlayer } from "@/components/stream-player";
 5 | 
 6 | interface CreatorPageProps {
 7 |   params: Promise<{
 8 |     username: string;
 9 |   }>;
10 | }
11 | 
12 | const CreatorPage = async ({ params }: CreatorPageProps) => {
13 |   const { username } = await params;
14 | 
15 |   const externalUser = await currentUser();
16 |   const user = await getUserByUsername(username);
17 | 
18 |   if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
19 |     throw new Error("Unauthorized");
20 |   }
21 | 
22 |   return (
23 |     <div className="h-full">
24 |       <StreamPlayer user={user} stream={user.stream} isFollowing />
25 |     </div>
26 |   );
27 | };
28 | 
29 | export default CreatorPage;


--------------------------------------------------------------------------------
/components/hint.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   Tooltip,
 3 |   TooltipContent,
 4 |   TooltipProvider,
 5 |   TooltipTrigger,
 6 | } from "@/components/ui/tooltip";
 7 | 
 8 | interface HintProps {
 9 |   label: string;
10 |   children: React.ReactNode;
11 |   asChild?: boolean;
12 |   side?: "top" | "bottom" | "left" | "right";
13 |   align?: "start" | "center" | "end";
14 | }
15 | 
16 | export const Hint = ({ label, children, asChild, side, align }: HintProps) => {
17 |   return (
18 |     <TooltipProvider>
19 |       <Tooltip delayDuration={0}>
20 |         <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
21 |         <TooltipContent
22 |           className="text-black bg-white"
23 |           side={side}
24 |           align={align}
25 |         >
26 |           <p className="font-semibold">{label}</p>
27 |         </TooltipContent>
28 |       </Tooltip>
29 |     </TooltipProvider>
30 |   );
31 | };
32 | 


--------------------------------------------------------------------------------
/components/ui/hint.tsx:
--------------------------------------------------------------------------------
 1 | import {
 2 |   Tooltip,
 3 |   TooltipContent,
 4 |   TooltipProvider,
 5 |   TooltipTrigger,
 6 | } from "@/components/ui/tooltip";
 7 | 
 8 | interface HintProps {
 9 |   label: string;
10 |   children: React.ReactNode;
11 |   asChild?: boolean;
12 |   side?: "top" | "bottom" | "left" | "right";
13 |   align?: "start" | "center" | "end";
14 | }
15 | 
16 | export const Hint = ({ label, children, asChild, side, align }: HintProps) => {
17 |   return (
18 |     <TooltipProvider>
19 |       <Tooltip delayDuration={0}>
20 |         <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
21 |         <TooltipContent
22 |           className="text-black bg-white"
23 |           side={side}
24 |           align={align}
25 |         >
26 |           <p className="font-semibold">{label}</p>
27 |         </TooltipContent>
28 |       </Tooltip>
29 |     </TooltipProvider>
30 |   );
31 | };
32 | 


--------------------------------------------------------------------------------
/app/(browse)/_components/container.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useEffect } from "react";
 4 | import { useMediaQuery } from "usehooks-ts";
 5 | 
 6 | import { cn } from "@/lib/utils";
 7 | import { useSidebar } from "@/store/use-sidebar";
 8 | 
 9 | interface ContainerProps {
10 |   children: React.ReactNode;
11 | }
12 | 
13 | export const Container = ({ children }: ContainerProps) => {
14 |   const matches = useMediaQuery("(max-width: 1024px)");
15 |   const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
16 | 
17 |   useEffect(() => {
18 |     if (matches) {
19 |       onCollapse();
20 |     } else {
21 |       onExpand();
22 |     }
23 |   }, [matches, onCollapse, onExpand]);
24 | 
25 |   return (
26 |     <div
27 |       className={cn(
28 |         "flex-1",
29 |         collapsed ? "ml-17.5" : "ml-17.5 lg:ml-60"
30 |       )}
31 |     >
32 |       {children}
33 |     </div>
34 |   );
35 | };


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/layout.tsx:
--------------------------------------------------------------------------------
 1 | import { getSelfByUsername } from "@/lib/auth-service";
 2 | import { redirect } from "next/navigation";
 3 | import { Navbar } from "./_components/navbar";
 4 | import { Sidebar } from "./_components/sidebar";
 5 | import { Container } from "./_components/container";
 6 | 
 7 | interface CreatorLayoutProps {
 8 |   params: { username: string };
 9 |   children: React.ReactNode;
10 | }
11 | const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
12 |   const { username } = await params; 
13 | 
14 |   const self = await getSelfByUsername(username);
15 | 
16 |   if (!self) {
17 |     redirect("/");
18 |   }
19 | 
20 |   return (
21 |     <>
22 |       <Navbar />
23 |       <div className="flex h-full pt-20">
24 |         <Sidebar />
25 |         <Container>{children}</Container>
26 |       </div>
27 |     </>
28 |   );
29 | };
30 | 
31 | export default CreatorLayout;
32 | 


--------------------------------------------------------------------------------
/components/stream-player/fullscreen-control.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { Maximize, Minimize } from "lucide-react";
 4 | 
 5 | import { Hint } from "@/components/hint";
 6 | 
 7 | interface FullscreenControlProps {
 8 |   isFullscreen: boolean;
 9 |   onToggle: () => void;
10 | }
11 | 
12 | export const FullscreenControl = ({
13 |   isFullscreen,
14 |   onToggle,
15 | }: FullscreenControlProps) => {
16 |   const Icon = isFullscreen ? Minimize : Maximize;
17 | 
18 |   const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";
19 | 
20 |   return (
21 |     <div className="flex items-center justify-center gap-4">
22 |       <Hint label={label} asChild>
23 |         <button
24 |           onClick={onToggle}
25 |           className="text-white p-1.5 hover:bg-white/10 rounded-lg"
26 |         >
27 |           <Icon className="h-5 w-5" />
28 |         </button>
29 |       </Hint>
30 |     </div>
31 |   );
32 | };
33 | 


--------------------------------------------------------------------------------
/lib/stream-service.ts:
--------------------------------------------------------------------------------
 1 | import { db } from "@/lib/db";
 2 | import { getSelf } from "@/lib/auth-service";
 3 | 
 4 | export const getStreamByUserId = async (userId: string) => {
 5 |   const self = await getSelf();
 6 | 
 7 |   const stream = await db.stream.findUnique({
 8 |     where: { userId },
 9 |     include: {
10 |       user: true,
11 |     },
12 |   });
13 | 
14 |   if (!stream) {
15 |     return null;
16 |   }
17 | 
18 |   //  Block protection
19 |   if (self) {
20 |     const isBlocked = await db.block.findFirst({
21 |       where: {
22 |         OR: [
23 |           {
24 |             blockerId: userId,
25 |             blockedId: self.id,
26 |           },
27 |           {
28 |             blockerId: self.id,
29 |             blockedId: userId,
30 |           },
31 |         ],
32 |       },
33 |     });
34 | 
35 |     if (isBlocked) {
36 |       return null; // hide stream
37 |     }
38 |   }
39 | 
40 |   return stream;
41 | };


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/container.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useEffect } from "react";
 4 | import { useMediaQuery } from "usehooks-ts";
 5 | 
 6 | import { cn } from "@/lib/utils";
 7 | import { useCreatorSidebar } from "@/store/use-creator-sidebar";
 8 | 
 9 | interface ContainerProps {
10 |   children: React.ReactNode;
11 | }
12 | 
13 | export const Container = ({ children }: ContainerProps) => {
14 |   const { collapsed, onCollapse, onExpand } = useCreatorSidebar(
15 |     (state) => state
16 |   );
17 |   const matches = useMediaQuery(`(max-width: 1024px)`);
18 | 
19 |   useEffect(() => {
20 |     if (matches) {
21 |       onCollapse();
22 |     } else {
23 |       onExpand();
24 |     }
25 |   }, [matches, onCollapse, onExpand]);
26 | 
27 |   return (
28 |     <div
29 |       className={cn("flex-1", collapsed ? "ml-17.5" : "ml-17.5 lg:ml-60")}
30 |     >
31 |       {children}
32 |     </div>
33 |   );
34 | };
35 | 


--------------------------------------------------------------------------------
/components/stream-player/cheat-header.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { Skeleton } from "@/components/ui/skeleton";
 4 | 
 5 | import { ChatToggle } from "./chat-toggle";
 6 | import { VariantToggle } from "./variant-toggle";
 7 | 
 8 | export const ChatHeader = () => {
 9 |   return (
10 |     <div className="relative p-3 border-b">
11 |       <div className="absolute left-2 top-2 hidden lg:block">
12 |         <ChatToggle />
13 |       </div>
14 |       <p className="font-semibold text-priamry text-center">Stream Chat</p>
15 |       <div className="absolute right-2 top-2">
16 |         <VariantToggle />
17 |       </div>
18 |     </div>
19 |   );
20 | };
21 | 
22 | export const ChatHeaderSkeleton = () => {
23 |   return (
24 |     <div className="relative p-3 border-b hidden md:block">
25 |       <Skeleton className="absolute h-6 w-6 left-3 top-3" />
26 |       <Skeleton className="w-28 h-6 mx-auto" />
27 |     </div>
28 |   );
29 | };
30 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/keys/_components/copy-button.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useState } from "react";
 4 | import { CheckCheck, Copy } from "lucide-react";
 5 | 
 6 | import { Button } from "@/components/ui/button";
 7 | 
 8 | interface CopyButtonProps {
 9 |   value?: string;
10 | }
11 | 
12 | export const CopyButton = ({ value }: CopyButtonProps) => {
13 |   const [isCopied, setIsCopied] = useState(false);
14 | 
15 |   const onCopy = () => {
16 |     if (!value) return;
17 | 
18 |     setIsCopied(true);
19 |     navigator.clipboard.writeText(value);
20 |     setTimeout(() => {
21 |       setIsCopied(false);
22 |     }, 1000);
23 |   };
24 | 
25 |   const Icon = isCopied ? CheckCheck : Copy;
26 | 
27 |   return (
28 |     <Button
29 |       onClick={onCopy}
30 |       disabled={!value || isCopied}
31 |       variant="ghost"
32 |       size="sm"
33 |     >
34 |       <Icon className="h-4 w-4" />
35 |     </Button>
36 |   );
37 | };
38 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/community/page.tsx:
--------------------------------------------------------------------------------
 1 | import moment from "moment";
 2 | 
 3 | import { getBlockedUsers } from "@/lib/block-service";
 4 | 
 5 | import { DataTable } from "./_components/data-table";
 6 | import { columns } from "./_components/columns";
 7 | 
 8 | const CommunityPage = async () => {
 9 |   const blockedUsers = await getBlockedUsers();
10 | 
11 |   const formattedData = blockedUsers.map((block) => ({
12 |     ...block,
13 |     userId: block.blocked.id,
14 |     imageUrl: block.blocked.imageUrl,
15 |     username: block.blocked.username,
16 |     createdAt: moment(block.blocked.createdAt).format("DD/MM/yyyy"),
17 |   }));
18 | 
19 |   return (
20 |     <div className="p-6">
21 |       <div className="mb-4">
22 |         <h1 className="text-2xl font-bold">Community Settings</h1>
23 |       </div>
24 |       <DataTable columns={columns} data={formattedData} />
25 |     </div>
26 |   );
27 | };
28 | 
29 | export default CommunityPage;
30 | 


--------------------------------------------------------------------------------
/app/(auth)/_components/logo.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils";
 2 | import { Poppins } from "next/font/google";
 3 | import Image from "next/image";
 4 | 
 5 | const font = Poppins({
 6 |     subsets: ["latin"],
 7 |     weight: ["200" ,"300", "400", "500", "600", "700", "800"],
 8 | })
 9 | 
10 | export const Logo = () => {
11 |     return(
12 |         <div className="flex flex-col items-center gap-y-4">
13 |             <div>
14 |                 <Image src="/spooky.png" alt="Twitch Logo" width={80} height={80}/>
15 |             </div>
16 |             <div className={cn("flex flex-col items-center", font.className)}>
17 |                 <p className="text-xl font-semibold">
18 |                     GameHub
19 |                 </p>
20 |                 <p className=
21 |                     "text-sm text-muted-foreground"
22 |                 >
23 |                     Let&apos;s play
24 |                 </p>
25 |             </div>
26 |         </div>
27 |     )
28 | }


--------------------------------------------------------------------------------
/actions/follow.ts:
--------------------------------------------------------------------------------
 1 | "use server"
 2 | 
 3 | import { followUser, unfollowUser } from "@/lib/follow-service";
 4 | import { revalidatePath } from "next/cache";
 5 | 
 6 | export const onFollow = async (id: string) => {
 7 | 
 8 |   try {
 9 | 
10 |     const followedUser = await followUser(id);
11 | 
12 |     revalidatePath("/");
13 | 
14 |     if (followedUser) {
15 |       revalidatePath(`/${followedUser.following.username}`);
16 |     }
17 | 
18 |     return followedUser;
19 | 
20 |   } catch (error) {
21 |     console.error(error);
22 |     throw new Error("Failed to follow user");
23 |   }
24 | };
25 | 
26 | export const onUnfollow = async (id: string) => {
27 |   try{
28 |         const unfollowedUser = await unfollowUser(id);
29 | 
30 |         revalidatePath("/")
31 | 
32 |         if(unfollowedUser) {
33 |           revalidatePath(`/${unfollowedUser.following.username}`)
34 |         }
35 |         return unfollowedUser;
36 |   }catch(error){
37 |       throw new Error("Internal Error")
38 |   }
39 | }


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/keys/page.tsx:
--------------------------------------------------------------------------------
 1 | import { getSelf } from "@/lib/auth-service";
 2 | import { getStreamByUserId } from "@/lib/stream-service";
 3 | 
 4 | import { UrlCard } from "./_components/url-card";
 5 | import { KeyCard } from "./_components/key-card";
 6 | import { ConnectModal } from "./_components/connect-modal";
 7 | 
 8 | const KeysPage = async () => {
 9 |   const self = await getSelf();
10 |   if(!self) return false;
11 |   const stream = await getStreamByUserId(self.id);
12 | 
13 |   if (!stream) {
14 |   return <div>No stream found</div>;
15 | }
16 | 
17 |   return (
18 |     <div className="p-6">
19 |       <div className="flex items-center justify-between mb-4">
20 |         <h1 className="text-2xl font-bold">Keys & URLs</h1>
21 |         <ConnectModal />
22 |       </div>
23 |       <div className="space-y-4">
24 |         <UrlCard value={stream.serverUrl} />
25 |         <KeyCard value={stream.streamKey} />
26 |       </div>
27 |     </div>
28 |   );
29 | };
30 | 
31 | export default KeysPage;
32 | 


--------------------------------------------------------------------------------
/app/api/uploadthing/core.ts:
--------------------------------------------------------------------------------
 1 | import { createUploadthing, type FileRouter } from "uploadthing/next";
 2 | 
 3 | import { db } from "@/lib/db";
 4 | import { getSelf } from "@/lib/auth-service";
 5 | 
 6 | const f = createUploadthing();
 7 | 
 8 | export const ourFileRouter = {
 9 |   thumbnailUploader: f({
10 |     image: {
11 |       maxFileSize: "4MB",
12 |       maxFileCount: 1,
13 |     },
14 |   })
15 |     .middleware(async () => {
16 |       const self = await getSelf();
17 | 
18 |       if (!self) {
19 |         throw new Error("Unauthorized");
20 |       }
21 | 
22 |       return { user: self };
23 |     })
24 |     .onUploadComplete(async ({ metadata, file }) => {
25 |       await db.stream.update({
26 |         where: {
27 |           userId: metadata.user.id, 
28 |         },
29 |         data: {
30 |           thumbnail: file.url,
31 |         },
32 |       });
33 | 
34 |       return { fileUrl: file.url };
35 |     }),
36 | } satisfies FileRouter;
37 | 
38 | export type OurFileRouter = typeof ourFileRouter;
39 | 


--------------------------------------------------------------------------------
/components/stream-player/chat-message.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import moment from "moment"
 4 | import { ReceivedChatMessage } from "@livekit/components-react";
 5 | 
 6 | import { stringToColor } from "@/lib/utils";
 7 | 
 8 | interface ChatMessageProps {
 9 |   data: ReceivedChatMessage;
10 | }
11 | 
12 | export const ChatMessage = ({ data }: ChatMessageProps) => {
13 |   const color = stringToColor(data.from?.name || "");
14 | 
15 |   return (
16 |     <div className="flex gap-2 p-2 rounded-md hover:bg-white/5">
17 |       <p className="text-sm text-white/40">{moment(data.timestamp).format("HH:mm")}</p>
18 |       <div className="flex flex-wrap items-baseline gap-1 grow">
19 |         <p className="text-sm font-semibold whitespace-nowrap">
20 |           <span className="truncate" style={{ color: color }}>
21 |             {data.from?.name}
22 |           </span>
23 |           :
24 |         </p>
25 |         <p className="text-sm break-all">{data.message}</p>
26 |       </div>
27 |     </div>
28 |   );
29 | };
30 | 


--------------------------------------------------------------------------------
/public/globe.svg:
--------------------------------------------------------------------------------
1 | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/community/_components/unblock-button.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { toast } from "sonner";
 4 | import { useTransition } from "react";
 5 | 
 6 | import { onUnblock } from "@/actions/block";
 7 | import { Button } from "@/components/ui/button";
 8 | 
 9 | interface UnblockButtonProps {
10 |   userId: string;
11 | }
12 | 
13 | export const UnblockButton = ({ userId }: UnblockButtonProps) => {
14 |   const [isPending, startTransition] = useTransition();
15 | 
16 |   const onClick = () => {
17 |     startTransition(() => {
18 |       onUnblock(userId)
19 |         .then((result) =>
20 |           toast.success(`User ${result.blocked.username} unblocked`)
21 |         )
22 |         .catch(() => toast.error("Something went wrong"));
23 |     });
24 |   };
25 | 
26 | 
27 | 
28 |   return (
29 |     <Button
30 |       disabled={isPending}
31 |       onClick={onClick}
32 |       variant="link"
33 |       size="sm"
34 |       className="text-blue-500 w-full"
35 |     >
36 |       Unblock
37 |     </Button>
38 |   );
39 | };
40 | 


--------------------------------------------------------------------------------
/lib/user-service.ts:
--------------------------------------------------------------------------------
 1 | import { db } from "@/lib/db";
 2 | 
 3 | export const getUserByUsername = async (username: string) => {
 4 |   const user = await db.user.findUnique({
 5 |     where: {
 6 |       username,
 7 |     },
 8 |     select: {
 9 |       id: true,
10 |       externalUserId: true,
11 |       username: true,
12 |       bio: true,
13 |       imageUrl: true,
14 |       stream: {
15 |         select: {
16 |           id: true,
17 |           isLive: true,
18 |           isChatDelayed: true,
19 |           isChatEnabled: true,
20 |           isChatFollowersOnly: true,
21 |           thumbnail: true,
22 |           title: true,
23 |         },
24 |       },
25 |       _count: {
26 |         select: {
27 |           followedBy: true,
28 |         },
29 |       },
30 |     },
31 |   });
32 | 
33 |   return user;
34 | };
35 | 
36 | export const getUserById = async (id: string) => {
37 |   const user = await db.user.findUnique({
38 |     where: { id },
39 |     include: {
40 |       stream: true,
41 |     },
42 |   });
43 | 
44 |   return user;
45 | };
46 | 


--------------------------------------------------------------------------------
/prisma/migrations/20260310145240_follow_schema/migration.sql:
--------------------------------------------------------------------------------
 1 | -- CreateTable
 2 | CREATE TABLE "Follow" (
 3 |     "id" TEXT NOT NULL,
 4 |     "followerId" TEXT NOT NULL,
 5 |     "followingId" TEXT NOT NULL,
 6 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 7 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 8 | 
 9 |     CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
10 | );
11 | 
12 | -- CreateIndex
13 | CREATE INDEX "Follow_followerId_idx" ON "Follow"("followerId");
14 | 
15 | -- CreateIndex
16 | CREATE INDEX "Follow_followingId_idx" ON "Follow"("followingId");
17 | 
18 | -- CreateIndex
19 | CREATE UNIQUE INDEX "Follow_followerId_followingId_key" ON "Follow"("followerId", "followingId");
20 | 
21 | -- AddForeignKey
22 | ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
23 | 
24 | -- AddForeignKey
25 | ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
26 | 


--------------------------------------------------------------------------------
/app/globals.css:
--------------------------------------------------------------------------------
 1 | @import "tailwindcss";
 2 | 
 3 | /* layout */
 4 | html,
 5 | body,
 6 | :root {
 7 |   height: 100%;
 8 | }
 9 | 
10 | /* theme variables */
11 | :root {
12 |   --background: 222 47% 11%;
13 |   --foreground: 210 40% 98%;
14 | 
15 |   --primary: 262 83% 58%;
16 |   --primary-foreground: 210 40% 98%;
17 | 
18 |   --secondary: 217 33% 17%;
19 |   --secondary-foreground: 210 40% 98%;
20 | 
21 |   --border: 217 33% 20%;
22 | }
23 | 
24 | /* Tailwind v4 theme mapping */
25 | @theme {
26 |   --color-background: hsl(var(--background));
27 |   --color-foreground: hsl(var(--foreground));
28 | 
29 |   --color-primary: hsl(var(--primary));
30 |   --color-primary-foreground: hsl(var(--primary-foreground));
31 | 
32 |   --color-secondary: hsl(var(--secondary));
33 |   --color-secondary-foreground: hsl(var(--secondary-foreground));
34 | 
35 |   --color-border: hsl(var(--border));
36 | }
37 | 
38 | /* base styles */
39 | @layer base {
40 |   body {
41 |     @apply bg-background text-foreground;
42 |   }
43 | 
44 |   * {
45 |     @apply border-border;
46 |   }
47 | }


--------------------------------------------------------------------------------
/components/stream-player/chat-toggle.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
 4 | 
 5 | import { Hint } from "@/components/hint";
 6 | import { Button } from "@/components/ui/button";
 7 | import { useChatSidebar } from "@/store/use-chat-sidebar";
 8 | 
 9 | export const ChatToggle = () => {
10 |   const { collapsed, onExpand, onCollapse } = useChatSidebar((state) => state);
11 | 
12 |   const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;
13 | 
14 |   const onToggle = () => {
15 |     if (collapsed) {
16 |       onExpand();
17 |     } else {
18 |       onCollapse();
19 |     }
20 |   };
21 | 
22 |   const label = collapsed ? "Expand" : "Collapse";
23 | 
24 |   return (
25 |     <Hint label={label} side="left" asChild>
26 |       <Button
27 |         onClick={onToggle}
28 |         variant="ghost"
29 |         className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
30 |       >
31 |         <Icon className="h-4 w-4" />
32 |       </Button>
33 |     </Hint>
34 |   );
35 | };
36 | 


--------------------------------------------------------------------------------
/components/ui/input.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | 
 3 | import { cn } from "@/lib/utils"
 4 | 
 5 | function Input({ className, type, ...props }: React.ComponentProps<"input">) {
 6 |   return (
 7 |     <input
 8 |       type={type}
 9 |       data-slot="input"
10 |       className={cn(
11 |         "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
12 |         "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
13 |         "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
14 |         className
15 |       )}
16 |       {...props}
17 |     />
18 |   )
19 | }
20 | 
21 | export { Input }
22 | 


--------------------------------------------------------------------------------
/components/stream-player/variant-toggle.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { MessageSquare, Users } from "lucide-react";
 4 | 
 5 | import { Hint } from "@/components/hint";
 6 | import { Button } from "@/components/ui/button";
 7 | import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";
 8 | 
 9 | export const VariantToggle = () => {
10 |   const { variant, onChangeVariant } = useChatSidebar((state) => state);
11 | 
12 |   const isChat = variant === ChatVariant.CHAT;
13 | 
14 |   const Icon = isChat ? Users : MessageSquare;
15 | 
16 |   const onToggle = () => {
17 |     const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
18 |     onChangeVariant(newVariant);
19 |   };
20 | 
21 |   const label = isChat ? "Community" : "Go back to chat";
22 | 
23 |   return (
24 |     <Hint label={label} side="left" asChild>
25 |       <Button
26 |         onClick={onToggle}
27 |         variant="ghost"
28 |         className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
29 |       >
30 |         <Icon className="h-4 w-4" />
31 |       </Button>
32 |     </Hint>
33 |   );
34 | };
35 | 


--------------------------------------------------------------------------------
/app/(browse)/_components/sidebar/index.tsx:
--------------------------------------------------------------------------------
 1 | import React from 'react'
 2 | import { Wrapper } from './wrapper'
 3 | import {Toggle, ToggleSkeleton} from './toggle'
 4 | import  { RecommendedSkeleton, Recommended, } from './recommended' 
 5 | import { getRecommended } from '@/lib/recommended-service'
 6 | import { getFollowedUsers } from '@/lib/follow-service'
 7 | import { Following, FollowingSkeleton } from './following'
 8 | 
 9 | 
10 | export const Sidebar = async () => {
11 |   const recommended = await getRecommended();
12 |   const follows = await getFollowedUsers()
13 |   return (
14 |     <Wrapper>
15 |       <Toggle />
16 |       <div className='space-y-4 pt-4 lg:pt-0'>
17 | 
18 |           <Following data={follows} />
19 |           <Recommended data={recommended}  />
20 |       </div>
21 |     </Wrapper>
22 |   )
23 | }
24 |  
25 | export const SidebarSkeleton = () => {
26 |   return (
27 |     <aside className="fixed left-0 flex flex-col w-17.5 lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
28 |       <ToggleSkeleton />
29 |       <FollowingSkeleton />
30 |       <RecommendedSkeleton />
31 |     </aside>
32 |   );
33 | };
34 |  
35 |  


--------------------------------------------------------------------------------
/app/(browse)/_components/navbar/actions.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/components/ui/button";
 2 | import { SignInButton, UserButton } from "@clerk/nextjs";
 3 | import { currentUser } from "@clerk/nextjs/server";
 4 | import { Clapperboard } from "lucide-react";
 5 | import Link from "next/link";
 6 | 
 7 | export const Actions = async () => {
 8 |   const user = await currentUser();
 9 | 
10 |   return (
11 |     <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
12 |       {!user && (
13 |         <SignInButton mode="modal">
14 |           <Button size="sm" variant="primary">
15 |             Login
16 |           </Button>
17 |         </SignInButton>
18 |       )}
19 | 
20 |       {!!user && (
21 |         <div className="flex items-center gap-x-4">
22 |           <Button asChild size="sm" variant="ghost">
23 |             <Link href={`/u/${user.username}`}>
24 |               <Clapperboard className="h-5 w-5 lg:mr-2" />
25 |               <span className="hidden lg:block">Dashboard</span>
26 |             </Link>
27 |           </Button>
28 | 
29 |           <UserButton afterSignOutUrl="/" />
30 |         </div>
31 |       )}
32 |     </div>
33 |   );
34 | };


--------------------------------------------------------------------------------
/app/(browse)/[username]/page.tsx:
--------------------------------------------------------------------------------
 1 | import { isFollowingUser } from "@/lib/follow-service";
 2 | import { getUserByUsername } from "@/lib/user-service";
 3 | import { notFound } from "next/navigation";
 4 | import { Actions } from "./_components/actions";
 5 | import { isBlockedByUser } from "@/lib/block-service";
 6 | 
 7 | interface UserPageProps {
 8 |   params: Promise<{
 9 |     username: string;
10 |   }>;
11 | }
12 | 
13 | const UserPage = async ({ params }: UserPageProps) => {
14 | 
15 |   const { username } = await params;
16 | 
17 |   const user = await getUserByUsername(username);
18 | 
19 |   if (!user) {
20 |     notFound();
21 |   }
22 | 
23 |   const isFollowing = await isFollowingUser(user.id);
24 |   const isBlocked = await isBlockedByUser(user.id)
25 | 
26 |   if(isBlocked){
27 |     notFound()
28 |   }
29 | 
30 |   return (
31 |     <div className="flex flex-col gap-y-4">
32 |       <p>User: {username}</p>
33 |       <p>User id: {user.id}</p>
34 |       <p>Is following: {`${isFollowing}`}</p>
35 |       <p>is blocked by this user: {`${isBlocked}`}</p>
36 |       <Actions userId={user.id} isFollowing={isFollowing} />
37 |     </div>
38 |   );
39 | };
40 | 
41 | export default UserPage;


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/chat/page.tsx:
--------------------------------------------------------------------------------
 1 | import { getSelf } from "@/lib/auth-service";
 2 | import { getStreamByUserId } from "@/lib/stream-service";
 3 | import { ToggleCard } from "./_components/toggle-card";
 4 | 
 5 | const ChatPage = async () => {
 6 |   const self = await getSelf();
 7 |   if(!self) return false;
 8 |   const stream = await getStreamByUserId(self.id);
 9 |   
10 | 
11 |   if (!stream) {
12 |   return <div>No stream found</div>;
13 | }
14 | 
15 |   return (
16 |     <div className="p-6">
17 |       <div className="mb-4">
18 |         <h1 className="text-2xl font-semibold">Chat</h1>
19 |       </div>
20 |       <div className="space-y-4">
21 |         <ToggleCard
22 |           field="isChatEnabled"
23 |           value={stream.isChatEnabled}
24 |           lable="Enable Chat"
25 |         />
26 |         <ToggleCard
27 |           field="isChatDelayed"
28 |           value={stream.isChatDelayed}
29 |           lable="Delay Chat"
30 |         />
31 |         <ToggleCard
32 |           field="isChatFollowersOnly"
33 |           value={stream.isChatFollowersOnly}
34 |           lable="Followrs Only Chat"
35 |         />
36 |       </div>
37 |     </div>
38 |   );
39 | };
40 | 
41 | export default ChatPage;
42 | 


--------------------------------------------------------------------------------
/components/stream-player/chat-list.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { ReceivedChatMessage } from "@livekit/components-react";
 4 | 
 5 | import { Skeleton } from "@/components/ui/skeleton";
 6 | 
 7 | import { ChatMessage } from "./chat-message";
 8 | 
 9 | interface ChatListProps {
10 |   messages: ReceivedChatMessage[];
11 |   isHidden: boolean;
12 | }
13 | 
14 | export const ChatList = ({ messages, isHidden }: ChatListProps) => {
15 |   if (isHidden || !messages || messages.length === 0) {
16 |     return (
17 |       <div className="flex flex-1 items-center justify-center">
18 |         <p className="text-sm text-muted-foreground">
19 |           {isHidden ? "Chat is disabled" : "Welcome to the chat!"}
20 |         </p>
21 |       </div>
22 |     );
23 |   }
24 | 
25 |   return (
26 |     <div className="flex flex-1 flex-col-reverse overflow-y-auto p-3 h-full">
27 |       {messages.map((message) => (
28 |         <ChatMessage key={message.timestamp} data={message} />
29 |       ))}
30 |     </div>
31 |   );
32 | };
33 | 
34 | export const ChatListSkeleton = () => {
35 |   return (
36 |     <div className="flex h-full items-center justify-center">
37 |       <Skeleton className="w-1/2 h-6" />
38 |     </div>
39 |   );
40 | };
41 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/keys/_components/key-card.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useState } from "react";
 4 | 
 5 | import { Input } from "@/components/ui/input";
 6 | import { Button } from "@/components/ui/button";
 7 | 
 8 | import { CopyButton } from "./copy-button";
 9 | 
10 | interface KeyCardProps {
11 |   value: string | null;
12 | }
13 | 
14 | export const KeyCard = ({ value }: KeyCardProps) => {
15 |   const [show, setShow] = useState(false);
16 | 
17 |   return (
18 |     <div className="rounded-xl bg-muted p-6">
19 |       <div className="flex items-start gap-x-10">
20 |         <p className="font-semibold shrink-0">Stream Key</p>
21 |         <div className="space-y-2 w-full">
22 |           <div className="w-full flex items-center gap-x-2">
23 |             <Input
24 |               value={value || ""}
25 |               type={show ? "text" : "password"}
26 |               disabled
27 |               placeholder="Stream key"
28 |             />
29 |             <CopyButton value={value || ""} />
30 |           </div>
31 |           <Button onClick={() => setShow(!show)} size="sm" variant="link">
32 |             {show ? "Hide" : "Show"}
33 |           </Button>
34 |         </div>
35 |       </div>
36 |     </div>
37 |   );
38 | };
39 | 


--------------------------------------------------------------------------------
/app/(browse)/(home)/_components/results.tsx:
--------------------------------------------------------------------------------
 1 | import { getStreams } from "@/lib/feed-service";
 2 | import { Skeleton } from "@/components/ui/skeleton";
 3 | 
 4 | import { ResultCard, ResultCardSkeleton } from "./result-card";
 5 | 
 6 | export const Results = async () => {
 7 |   const data = await getStreams();
 8 | 
 9 |   return (
10 |     <div>
11 |       <h2 className="text-lg font-semibold mb-4">
12 |         Streams we think you&apos;ll like
13 |       </h2>
14 |       {data.length === 0 && (
15 |         <div className="text-muted-foreground text-sm">No streams found.</div>
16 |       )}
17 |       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
18 |         {data.map((result) => (
19 |           <ResultCard key={result.id} data={result} />
20 |         ))}
21 |       </div>
22 |     </div>
23 |   );
24 | };
25 | 
26 | export const ResultsSkeleton = () => {
27 |   return (
28 |     <div>
29 |       <Skeleton className="h-8 w-72.5 mb-4" />
30 |       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
31 |         {[...Array(4)].map((_, i) => (
32 |           <ResultCardSkeleton key={i} />
33 |         ))}
34 |       </div>
35 |     </div>
36 |   );
37 | };
38 | 


--------------------------------------------------------------------------------
/app/api/webhooks/livekit/route.ts:
--------------------------------------------------------------------------------
 1 | import { headers } from "next/headers";
 2 | import { WebhookReceiver } from "livekit-server-sdk";
 3 | 
 4 | import { db } from "@/lib/db";
 5 | 
 6 | const receiver = new WebhookReceiver(
 7 |   process.env.LIVEKIT_API_KEY!,
 8 |   process.env.LIVEKIT_API_SECRET!
 9 | );
10 | 
11 | export async function POST(req: Request) {
12 |   const body = await req.text();
13 | 
14 |   
15 |   const headerPayload = await headers();
16 |   const authorization = headerPayload.get("Authorization");
17 | 
18 |   if (!authorization) {
19 |     return new Response("No authorization header", { status: 400 });
20 |   }
21 | 
22 |   const event = await receiver.receive(body, authorization);
23 | 
24 |   if (event.event === "ingress_started") {
25 |     await db.stream.update({
26 |       where: {
27 |         ingressId: event.ingressInfo?.ingressId,
28 |       },
29 |       data: {
30 |         isLive: true,
31 |       },
32 |     });
33 |   }
34 | 
35 |   if (event.event === "ingress_ended") {
36 |     await db.stream.update({
37 |       where: {
38 |         ingressId: event.ingressInfo?.ingressId,
39 |       },
40 |       data: {
41 |         isLive: false,
42 |       },
43 |     });
44 |   }
45 | 
46 |   return new Response("ok", { status: 200 });
47 | }


--------------------------------------------------------------------------------
/app/(browse)/search/_components/result.tsx:
--------------------------------------------------------------------------------
 1 | import { getSearch } from "@/lib/search-service";
 2 | import { Skeleton } from "@/components/ui/skeleton";
 3 | 
 4 | import { ResultCard, ResultCardSkeleton } from "./result-card";
 5 | 
 6 | interface ResultsProps {
 7 |   term?: string;
 8 | }
 9 | 
10 | export const Results = async ({ term }: ResultsProps) => {
11 |   const data = await getSearch(term);
12 | 
13 |   return (
14 |     <div>
15 |       <h2 className="text-lg font-semibold mb-4">
16 |         Results for term &quot;{term}&quot;
17 |       </h2>
18 |       {data.length === 0 && (
19 |         <p className="text-muted-foreground text-sm">
20 |           No results found. Try searching for something else
21 |         </p>
22 |       )}
23 |       <div className="flex flex-col gap-y-4">
24 |         {data.map((result) => (
25 |           <ResultCard data={result} key={result.id} />
26 |         ))}
27 |       </div>
28 |     </div>
29 |   );
30 | };
31 | 
32 | export const ResultsSkeleton = () => {
33 |   return (
34 |     <div>
35 |       <Skeleton className="h-8 w-[290px] mb-4" />
36 |       <div className="flex flex-col gap-y-4">
37 |         {[...Array(4)].map((_, i) => (
38 |           <ResultCardSkeleton key={i} />
39 |         ))}
40 |       </div>
41 |     </div>
42 |   );
43 | };
44 | 


--------------------------------------------------------------------------------
/actions/block.ts:
--------------------------------------------------------------------------------
 1 | "use server";
 2 | 
 3 | import { getSelf } from "@/lib/auth-service";
 4 | import { blockUser, unblockUser } from "@/lib/block-service";
 5 | import { revalidatePath } from "next/cache";
 6 | import { RoomServiceClient } from "livekit-server-sdk";
 7 | 
 8 | const roomService = new RoomServiceClient(
 9 |   process.env.LIVEKIT_API_URL!,
10 |   process.env.LIVEKIT_API_KEY!,
11 |   process.env.LIVEKIT_API_SECRET!
12 | );
13 | 
14 | // Block user
15 | export const onBlock = async (id: string) => {
16 |   const self = await getSelf();
17 | 
18 |   if (!self) {
19 |     throw new Error("unauthorized");
20 |   }
21 | 
22 |   const blockedUser = await blockUser(id);
23 | 
24 |   try {
25 |     await roomService.removeParticipant(self.id, id);
26 |   } catch (error) {
27 |     console.warn("LiveKit removeParticipant failed:", error);
28 |   }
29 | 
30 |   revalidatePath(`/u/${self.username}/community`);
31 | 
32 |   return blockedUser;
33 | };
34 | 
35 | // Unblock user
36 | export const onUnblock = async (id: string) => {
37 |   const self = await getSelf();
38 | 
39 |   if (!self) {
40 |     throw new Error("Unauthorized");
41 |   }
42 | 
43 |   const unblockedUser = await unblockUser(id);
44 | 
45 |   revalidatePath(`/u/${self.username}/community`);
46 | 
47 |   return unblockedUser; 
48 | };


--------------------------------------------------------------------------------
/app/(browse)/_components/sidebar/wrapper.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | import { cn } from "@/lib/utils";
 3 | import { useSidebar } from "@/store/use-sidebar";
 4 | import { useEffect, useState } from "react";
 5 | import { RecommendedSkeleton } from "./recommended";
 6 | import { ToggleSkeleton } from "./toggle";
 7 | import { useIsClient } from "usehooks-ts";
 8 | import { FollowingSkeleton } from "./following";
 9 | 
10 | interface WrapperProps{
11 |     children: React.ReactNode
12 | }
13 | export const Wrapper = ({children,}: WrapperProps) => {
14 | 
15 |     const {collapsed} = useSidebar((state) => state);
16 | 
17 |     const  isClient = useIsClient()
18 |     
19 |     
20 |     if(!isClient) {
21 |         return (
22 |         <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
23 |             collapsed && "w-17.5"
24 | 
25 |         )}>
26 |             <ToggleSkeleton />
27 |             <FollowingSkeleton />
28 |             <RecommendedSkeleton />
29 |         </aside>
30 |     )
31 | }
32 |     return (
33 |         <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
34 |             collapsed && "w-17.5"
35 | 
36 |         )}>
37 |             {children}
38 |         </aside>
39 |     )
40 | 
41 | }


--------------------------------------------------------------------------------
/app/(browse)/_components/navbar/logo.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils";
 2 | import { Poppins } from "next/font/google";
 3 | import Image from "next/image";
 4 | import Link from "next/link";
 5 | 
 6 | 
 7 | const font = Poppins({
 8 |     subsets: ["latin"],
 9 |     weight: ["200" ,"300", "400", "500", "600", "700", "800"],
10 | })
11 | 
12 | export const Logo = () => {
13 |     return(
14 |         <Link href="/">
15 |             <div className="flex items-center gap-x-4 hover:opacity-75 transition">
16 |                 <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
17 |                         <Image  
18 |                                src="/spooky.png"
19 |                                alt="Twitch Logo"
20 |                                width={32}
21 |                                height={32}
22 |                         />
23 |                 </div>
24 |                 <div  className={cn( "hidden lg:block",font.className)}>
25 |                     <p className="text-lg font-semibold">
26 |                         GameHub
27 |                     </p>
28 |                     <p className="text-sm text-muted-foreground">
29 |                         Let&apos;s play
30 |                     </p>
31 |                 </div>
32 |             </div>
33 |         </Link>
34 |     )
35 | }


--------------------------------------------------------------------------------
/actions/stream.ts:
--------------------------------------------------------------------------------
 1 | "use server";
 2 | 
 3 | import { Stream } from "@prisma/client";
 4 | import { revalidatePath } from "next/cache";
 5 | 
 6 | import { db } from "@/lib/db";
 7 | import { getSelf } from "@/lib/auth-service";
 8 | 
 9 | export const updateStream = async (values: Partial<Stream>) => {
10 |   try {
11 |     const self = await getSelf();
12 |     if(!self) return false;
13 |     
14 |     const selfStream = await db.stream.findUnique({
15 |       where: {
16 |         userId: self.id,
17 |       },
18 |     });
19 | 
20 |     if (!selfStream) {
21 |       throw new Error("Stream not found");
22 |     }
23 | 
24 |     const validData = {
25 |       thumbnail: values.thumbnail,
26 |       title: values.title,
27 |       isChatEnabled: values.isChatEnabled,
28 |       isChatFollowersOnly: values.isChatFollowersOnly,
29 |       isChatDelayed: values.isChatDelayed,
30 |     };
31 | 
32 |     const stream = await db.stream.update({
33 |       where: {
34 |         id: selfStream.id,
35 |       },
36 |       data: {
37 |         ...validData,
38 |       },
39 |     });
40 | 
41 |     revalidatePath(`/u/${self.username}/chat`);
42 |     revalidatePath(`/u/${self.username}`);
43 |     revalidatePath(`/${self.username}`);
44 | 
45 |     return stream;
46 |   } catch {
47 |     throw new Error("Internal Error");
48 |   }
49 | };
50 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/navbar/logo.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils";
 2 | import { Poppins } from "next/font/google";
 3 | import Image from "next/image";
 4 | import Link from "next/link";
 5 | 
 6 | 
 7 | const font = Poppins({
 8 |     subsets: ["latin"],
 9 |     weight: ["200" ,"300", "400", "500", "600", "700", "800"],
10 | })
11 | 
12 | export const Logo = () => {
13 |     return(
14 |         <Link href="/">
15 |             <div className="flex items-center gap-x-4 hover:opacity-75 transition">
16 |                 <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
17 |                         <Image  
18 |                                src="/spooky.png"
19 |                                alt="Twitch Logo"
20 |                                width={32}
21 |                                height={32}
22 |                         />
23 |                 </div>
24 |                 <div  className={cn( "hidden lg:block",font.className)}>
25 |                     <p className="text-lg font-semibold">
26 |                         GameHub
27 |                     </p>
28 |                     <p className="text-sm text-muted-foreground">
29 |                         Creator Dashboard 
30 |                     </p>
31 |                 </div>
32 |             </div>
33 |         </Link>
34 |     )
35 | }


--------------------------------------------------------------------------------
/app/(browse)/_components/sidebar/recommended.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { User } from "@prisma/client";
 4 | 
 5 | import { useSidebar } from "@/store/use-sidebar";
 6 | 
 7 | import { UserItem, UserItemSkeleton } from "./user-item";
 8 | 
 9 | interface RecommendedProps {
10 |   data: (User & {
11 |     stream: { isLive: boolean } | null;
12 |   })[];
13 | }
14 | 
15 | export const Recommended = ({ data }: RecommendedProps) => {
16 |   const { collapsed } = useSidebar((state) => state);
17 | 
18 |   const showLabel = !collapsed && data.length > 0;
19 | 
20 |   return (
21 |     <div>
22 |       {showLabel && (
23 |         <div className="pl-6 mb-4">
24 |           <p className="text-sm text-muted-foreground">Recommended</p>
25 |         </div>
26 |       )}
27 | 
28 |       <ul className="space-y-2 px-2">
29 |         {data.map((user) => (
30 |           <UserItem
31 |             key={user.id}
32 |             username={user.username}
33 |             imageUrl={user.imageUrl}
34 |             isLive={user.stream?.isLive ?? false} 
35 |           />
36 |         ))}
37 |       </ul>
38 |     </div>
39 |   );
40 | };
41 | 
42 | export const RecommendedSkeleton = () => {
43 |   return (
44 |     <ul className="px-2">
45 |       {[...Array(3)].map((_, i) => (
46 |         <UserItemSkeleton key={i} />
47 |       ))}
48 |     </ul>
49 |   );
50 | };
51 | 


--------------------------------------------------------------------------------
/hooks/use-viewer-token.ts:
--------------------------------------------------------------------------------
 1 | import { toast } from "sonner";
 2 | import { useEffect, useState } from "react";
 3 | import { JwtPayload, jwtDecode } from "jwt-decode";
 4 | import { createViewerToken } from "@/actions/token";
 5 | 
 6 | export const useViewerToken = (hostIdentity: string) => {
 7 |   const [token, setToken] = useState("");
 8 |   const [name, setName] = useState("");
 9 |   const [identity, setIdentity] = useState("");
10 | 
11 |   useEffect(() => {
12 |     const createToken = async () => {
13 |       try {
14 |         const viewerToken = await createViewerToken(hostIdentity);
15 | 
16 |         if (!viewerToken) {
17 |           toast.error("Failed to create token");
18 |           return;
19 |         }
20 | 
21 |         setToken(viewerToken);
22 | 
23 |         const decodedToken = jwtDecode(viewerToken) as JwtPayload & {
24 |           name?: string;
25 |         };
26 | 
27 |         const decodedName = decodedToken?.name;
28 |         const decodedIdentity = decodedToken?.jti;
29 | 
30 |         if (decodedIdentity) setIdentity(decodedIdentity);
31 |         if (decodedName) setName(decodedName);
32 | 
33 |       } catch (e) {
34 |         console.log(e);
35 |         toast.error("Failed to create token");
36 |       }
37 |     };
38 | 
39 |     createToken();
40 |   }, [hostIdentity]);
41 | 
42 |   return { token, name, identity };
43 | };


--------------------------------------------------------------------------------
/public/next.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>


--------------------------------------------------------------------------------
/actions/token.ts:
--------------------------------------------------------------------------------
 1 | "use server";
 2 | 
 3 | import { v4 } from "uuid";
 4 | import { AccessToken } from "livekit-server-sdk";
 5 | 
 6 | import { getSelf } from "@/lib/auth-service";
 7 | import { getUserById } from "@/lib/user-service";
 8 | import { isBlockedByUser } from "@/lib/block-service";
 9 | 
10 | export const createViewerToken = async (hostIdentity: string) => {
11 |   let self;
12 | 
13 |   try {
14 |     self = await getSelf();
15 |   } catch {
16 |     self = null;
17 |   }
18 | 
19 |   if (!self) {
20 |     const id = v4();
21 |     const username = `guest-${Math.floor(Math.random() * 100000)}`;
22 |     self = { id, username };
23 |   }
24 | 
25 |   const host = await getUserById(hostIdentity);
26 |   if (!host) {
27 |     throw new Error("Host not found");
28 |   }
29 | 
30 |   const isBlocked = await isBlockedByUser(host.id);
31 |   if (isBlocked) {
32 |     throw new Error("User is blocked");
33 |   }
34 | 
35 |   const isHost = self.id === host.id;
36 | 
37 |   const token = new AccessToken(
38 |     process.env.LIVEKIT_API_KEY!,
39 |     process.env.LIVEKIT_API_SECRET!,
40 |     {
41 |       identity: isHost ? `Host-${self.id}` : self.id,
42 |       name: self.username,
43 |     }
44 |   );
45 | 
46 |   token.addGrant({
47 |     room: host.id,
48 |     roomJoin: true,
49 |     canPublish: false,
50 |     canPublishData: true,
51 |   });
52 | 
53 |   return token.toJwt();
54 | };


--------------------------------------------------------------------------------
/lib/feed-service.ts:
--------------------------------------------------------------------------------
 1 | import { db } from "@/lib/db";
 2 | import { getSelf } from "@/lib/auth-service";
 3 | 
 4 | export const getStreams = async () => {
 5 |   const self = await getSelf();
 6 |   const userId = self?.id;
 7 | 
 8 |   const streams = await db.stream.findMany({
 9 |     where: userId
10 |       ? {
11 |           AND: [
12 |             // Users who blocked me
13 |             {
14 |               user: {
15 |                 NOT: {
16 |                   blocking: {
17 |                     some: {
18 |                       blockedId: userId,
19 |                     },
20 |                   },
21 |                 },
22 |               },
23 |             },
24 |             // Users I blocked
25 |             {
26 |               user: {
27 |                 NOT: {
28 |                   blockedby: {
29 |                     some: {
30 |                       blockerId: userId,
31 |                     },
32 |                   },
33 |                 },
34 |               },
35 |             },
36 |           ],
37 |         }
38 |       : undefined,
39 | 
40 |     select: {
41 |       id: true,
42 |       user: true,
43 |       isLive: true,
44 |       title: true,
45 |       thumbnail: true,
46 |     },
47 | 
48 |     orderBy: [
49 |       { isLive: "desc" },
50 |       { updatedAt: "desc" },
51 |     ],
52 | 
53 |     take: 20, 
54 |   });
55 | 
56 |   return streams;
57 | };


--------------------------------------------------------------------------------
/lib/auth-service.ts:
--------------------------------------------------------------------------------
 1 | import { currentUser } from "@clerk/nextjs/server";
 2 | import { db } from "./db";
 3 | 
 4 | export const getSelf = async () => {
 5 |   const self = await currentUser();
 6 | 
 7 |   if (!self) {
 8 |     return null;
 9 |   }
10 | 
11 |   let user = await db.user.findUnique({
12 |     where: {
13 |       externalUserId: self.id,
14 |     },
15 |   });
16 | 
17 |   if (!user) {
18 |   const username =
19 |     self.username ??
20 |     `user_${self.id.slice(0, 8)}`; 
21 | 
22 |   user = await db.user.create({
23 |     data: {
24 |       externalUserId: self.id,
25 |       username,
26 |       imageUrl: self.imageUrl,
27 |       stream: {
28 |         create: {
29 |           title: `${username}'s stream`,
30 |         },
31 |       },
32 |     },
33 |     include: {
34 |       stream: true,
35 |     },
36 |   });
37 | }
38 | 
39 |   return user;
40 | };
41 | 
42 | export const getSelfByUsername = async (username: string) => {
43 |   const self = await currentUser();
44 | 
45 |   if (!self || !self.username) {
46 |     throw new Error("Unauthorized");
47 |   }
48 | 
49 |   const user = await db.user.findUnique({
50 |     where: {
51 |       username,
52 |     },
53 |   });
54 | 
55 |   if(!user){
56 |     throw new Error("User not found");
57 |   }
58 | 
59 |   if (self.username !== user?.username) {
60 |     throw new Error("User not found");
61 |   }
62 | 
63 |   return user;
64 | };
65 | 


--------------------------------------------------------------------------------
/app/(browse)/_components/sidebar/following.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useSidebar } from "@/store/use-sidebar";
 4 | import { Follow, User } from "@prisma/client";
 5 | import { UserItem, UserItemSkeleton } from "./user-item";
 6 | 
 7 | interface FollowingProps {
 8 |   data: (Follow & {
 9 |     following: User & {
10 |       stream: {isLive : boolean} | null;
11 |     };
12 |   })[];
13 | }
14 | 
15 | export const Following = ({ data }: FollowingProps) => {
16 |   const { collapsed } = useSidebar((state) => state);
17 | 
18 |   if (!data.length) {
19 |     return null;
20 |   }
21 |   return (
22 |     <div>
23 |       {!collapsed && (
24 |         <div className="pl-6 mb-4">
25 |           <p className="text-sm text-muted-foreground">Following</p>
26 |         </div>
27 |       )}
28 | 
29 |       <ul className="space-y-2 px-2">
30 |         {data.map((follow) => (
31 |           <UserItem
32 |             key={follow.following.id}
33 |             username={follow.following.username}
34 |             imageUrl={follow.following.imageUrl}
35 |             isLive={follow.following.stream?.isLive ?? false}
36 |           />
37 |         ))}
38 |       </ul>
39 |     </div>
40 |   );
41 | };
42 | 
43 | export const FollowingSkeleton = () => {
44 |   return (
45 |     <ul className="px-2 pt-2 lg:pt-0">
46 |       {[...Array(3).map((_, i) => <UserItemSkeleton key={i} />)]}
47 |     </ul>
48 |   );
49 | };
50 | 


--------------------------------------------------------------------------------
/components/stream-player/volume-control.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { Volume1, Volume2, VolumeX } from "lucide-react";
 4 | 
 5 | import { Hint } from "@/components/hint";
 6 | import { Slider } from "@/components/ui/slider";
 7 | 
 8 | interface VolumeControlProps {
 9 |   onToggle: () => void;
10 |   onChange: (value: number) => void;
11 |   value: number;
12 | }
13 | 
14 | export const VolumeControl = ({
15 |   onToggle,
16 |   onChange,
17 |   value,
18 | }: VolumeControlProps) => {
19 |   const isMuted = value === 0;
20 |   const isAboveHalf = value > 50;
21 | 
22 |   let Icon = Volume1;
23 | 
24 |   if (isMuted) {
25 |     Icon = VolumeX;
26 |   } else if (isAboveHalf) {
27 |     Icon = Volume2;
28 |   }
29 | 
30 |   const label = isMuted ? "Unmute" : "Mute";
31 | 
32 |   const handleChange = (value: number[]) => {
33 |     onChange(value[0]);
34 |   };
35 | 
36 |   return (
37 |     <div className="flex items-center gap-2">
38 |       <Hint label={label} asChild>
39 |         <button
40 |           onClick={onToggle}
41 |           className="text-white hover:bg-white/10 p-1.5 rounded-lg"
42 |         >
43 |           <Icon className="h-6 w-6" />
44 |         </button>
45 |       </Hint>
46 |       <Slider
47 |         className="w-32 cursor-pointer"
48 |         onValueChange={handleChange}
49 |         value={[value]}
50 |         max={100}
51 |         step={1}
52 |       />
53 |     </div>
54 |   );
55 | };
56 | 


--------------------------------------------------------------------------------
/app/layout.tsx:
--------------------------------------------------------------------------------
 1 | import type { Metadata } from "next";
 2 | import { Geist, Geist_Mono } from "next/font/google";
 3 | import "./globals.css";
 4 | import { ClerkProvider } from "@clerk/nextjs";
 5 | import { ThemeProvider } from "@/components/theme-provider";
 6 | import { dark } from "@clerk/themes";
 7 | import {Toaster} from "sonner"
 8 | 
 9 | 
10 | const geistSans = Geist({
11 |   variable: "--font-geist-sans",
12 |   subsets: ["latin"],
13 | });
14 | 
15 | const geistMono = Geist_Mono({
16 |   variable: "--font-geist-mono",
17 |   subsets: ["latin"],
18 | });
19 | 
20 | export const metadata: Metadata = {
21 |   title: "Create Next App",
22 |   description: "Generated by create next app",
23 | };
24 | 
25 | export default function RootLayout({
26 |   children,
27 | }: Readonly<{
28 |   children: React.ReactNode;
29 | }>) {
30 |   return (
31 |     <ClerkProvider appearance={{baseTheme: dark}}>
32 |     <html lang="en" className="dark" suppressHydrationWarning>
33 |       <body
34 |         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
35 |       >
36 |          <ThemeProvider
37 |             attribute="class"
38 |             defaultTheme="dark"
39 |             storageKey="gamehub-theme"
40 |           >
41 |         <Toaster theme="light" position="bottom-center"/>
42 |         
43 |         {children}
44 |         </ThemeProvider>
45 |       </body>
46 |     </html>
47 |     </ClerkProvider>
48 |   ); 
49 | }
50 | 


--------------------------------------------------------------------------------
/components/stream-player/about-card.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { VerifiedMark } from "@/components/verified-mark";
 4 | 
 5 | import { BioModal } from "./bio-modal";
 6 | 
 7 | interface AboutCardProps {
 8 |   hostName: string;
 9 |   hostIdentity: string;
10 |   viewerIdentity: string;
11 |   bio: string | null;
12 |   followedByCount: number;
13 | }
14 | 
15 | export const AboutCard = ({
16 |   hostName,
17 |   hostIdentity,
18 |   viewerIdentity,
19 |   bio,
20 |   followedByCount,
21 | }: AboutCardProps) => {
22 |   const hostAsViewer = `Host-${hostIdentity}`;
23 |   const isHost = viewerIdentity === hostAsViewer;
24 | 
25 |   const followedByLabel = followedByCount === 1 ? "follower" : "followers";
26 | 
27 |   return (
28 |     <div className="px-4">
29 |       <div className="group rounded-xl bg-background p-6 lg:p-10 flex flex-col gap-y-3">
30 |         <div className="flex items-center justify-between">
31 |           <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-2xl">
32 |             About {hostName}
33 |             <VerifiedMark />
34 |           </div>
35 |           {isHost && <BioModal initialValue={bio} />}
36 |         </div>
37 |         <div className="text-sm text-muted-foreground">
38 |           <span className="font-semibold text-primary">{followedByCount}</span>{" "}
39 |           {followedByLabel}
40 |         </div>
41 |         <p className="text-sm">{bio || "This user has not set a bio yet."}</p>
42 |       </div>
43 |     </div>
44 |   );
45 | };
46 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/sidebar/toggle.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
 4 | 
 5 | import { Hint } from "@/components/hint";
 6 | import { Button } from "@/components/ui/button";
 7 | import { useCreatorSidebar } from "@/store/use-creator-sidebar";
 8 | 
 9 | export const Toggle = () => {
10 |   const { collapsed, onExpand, onCollapse } = useCreatorSidebar(
11 |     (state) => state
12 |   );
13 | 
14 |   const label = collapsed ? "Expand" : "Collapse";
15 | 
16 |   return (
17 |     <>
18 |       {collapsed && (
19 |         <div className="w-full hidden lg:flex items-center justify-center pt-4 mb-4">
20 |           <Hint label={label} side="right" asChild>
21 |             <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
22 |               <ArrowRightFromLine className="h-4 w-4" />
23 |             </Button>
24 |           </Hint>
25 |         </div>
26 |       )}
27 |       {!collapsed && (
28 |         <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
29 |           <p className="font-semibold text-primary">Dashboard</p>
30 |           <Hint label={label} side="right" asChild>
31 |             <Button
32 |               onClick={onCollapse}
33 |               variant="ghost"
34 |               className="h-auto p-2 ml-auto"
35 |             >
36 |               <ArrowLeftFromLine className="h-4 w-4" />
37 |             </Button>
38 |           </Hint>
39 |         </div>
40 |       )}
41 |     </>
42 |   );
43 | };
44 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/sidebar/navigation.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useUser } from "@clerk/nextjs";
 4 | import { usePathname } from "next/navigation";
 5 | import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react";
 6 | 
 7 | import { NavItem, NavItemSkeleton } from "./nav-item";
 8 | 
 9 | export const Navigation = () => {
10 |   const pathname = usePathname();
11 |   const { user } = useUser();
12 | 
13 |   const routes = [
14 |     {
15 |       label: "Stream",
16 |       href: `/u/${user?.username}`,
17 |       icon: Fullscreen,
18 |     },
19 |     {
20 |       label: "Keys",
21 |       href: `/u/${user?.username}/keys`,
22 |       icon: KeyRound,
23 |     },
24 |     {
25 |       label: "Chat",
26 |       href: `/u/${user?.username}/chat`,
27 |       icon: MessageSquare,
28 |     },
29 |     {
30 |       label: "Community",
31 |       href: `/u/${user?.username}/community`,
32 |       icon: Users,
33 |     },
34 |   ];
35 | 
36 |   if (!user?.username) {
37 |     return (
38 |       <ul className="space-y-2">
39 |         {[...Array(4)].map((_, i) => (
40 |           <NavItemSkeleton key={i} />
41 |         ))}
42 |       </ul>
43 |     );
44 |   }
45 | 
46 |   return (
47 |     <ul className="space-y-2 px-2 pt-4 lg:pt-0">
48 |       {routes.map((route) => (
49 |         <NavItem
50 |           key={route.href}
51 |           label={route.label}
52 |           icon={route.icon}
53 |           href={route.href}
54 |           isActive={pathname === route.href}
55 |         />
56 |       ))}
57 |     </ul>
58 |   );
59 | };
60 | 


--------------------------------------------------------------------------------
/components/ui/switch.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { Switch as SwitchPrimitive } from "radix-ui"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Switch({
 9 |   className,
10 |   size = "default",
11 |   ...props
12 | }: React.ComponentProps<typeof SwitchPrimitive.Root> & {
13 |   size?: "sm" | "default"
14 | }) {
15 |   return (
16 |     <SwitchPrimitive.Root
17 |       data-slot="switch"
18 |       data-size={size}
19 |       className={cn(
20 |         "peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
21 |         className
22 |       )}
23 |       {...props}
24 |     >
25 |       <SwitchPrimitive.Thumb
26 |         data-slot="switch-thumb"
27 |         className={cn(
28 |           "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground"
29 |         )}
30 |       />
31 |     </SwitchPrimitive.Root>
32 |   )
33 | }
34 | 
35 | export { Switch }
36 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/_components/sidebar/nav-item.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import Link from "next/link";
 4 | import { LucideIcon } from "lucide-react";
 5 | 
 6 | import { cn } from "@/lib/utils";
 7 | import { Button } from "@/components/ui/button";
 8 | import { Skeleton } from "@/components/ui/skeleton";
 9 | import { useCreatorSidebar } from "@/store/use-creator-sidebar";
10 | 
11 | interface NavItemProps {
12 |   icon: LucideIcon;
13 |   label: string;
14 |   href: string;
15 |   isActive: boolean;
16 | }
17 | 
18 | export const NavItem = ({
19 |   icon: Icon,
20 |   label,
21 |   href,
22 |   isActive,
23 | }: NavItemProps) => {
24 |   const { collapsed } = useCreatorSidebar((state) => state);
25 | 
26 |   return (
27 |     <Button
28 |       asChild
29 |       variant="ghost"
30 |       className={cn(
31 |         "w-full h-12",
32 |         collapsed ? "justify-center" : "justify-start",
33 |         isActive && "bg-accent"
34 |       )}
35 |     >
36 |       <Link href={href}>
37 |         <div className="flex items-center gap-x-4">
38 |           <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
39 |           {!collapsed && <span>{label}</span>}
40 |         </div>
41 |       </Link>
42 |     </Button>
43 |   );
44 | };
45 | 
46 | export const NavItemSkeleton = () => {
47 |   return (
48 |     <li className="flex items-center gap-x-4 px-3 py-2">
49 |       <Skeleton className="min-h-12 min-w-12 rounded-md" />
50 |       <div className="flex-1 hidden lg:block">
51 |         <Skeleton className="h-6" />
52 |       </div>
53 |     </li>
54 |   );
55 | };
56 | 


--------------------------------------------------------------------------------
/components/stream-player/video.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { ConnectionState, Track } from "livekit-client";
 4 | import {
 5 |   useConnectionState,
 6 |   useRemoteParticipant,
 7 |   useTracks,
 8 | } from "@livekit/components-react";
 9 | 
10 | import { Skeleton } from "@/components/ui/skeleton";
11 | 
12 | import { OfflineVideo } from "./offline-video";
13 | import { LoadingVideo } from "./loading-video";
14 | import { LiveVideo } from "./live-video";
15 | 
16 | interface VideoProps {
17 |   hostName: string;
18 |   hostIdentity: string;
19 | }
20 | 
21 | export const Video = ({ hostName, hostIdentity }: VideoProps) => {
22 |   const connectionState = useConnectionState();
23 |   const participant = useRemoteParticipant(hostIdentity);
24 |   const tracks = useTracks([
25 |     Track.Source.Camera,
26 |     Track.Source.Microphone,
27 |   ]).filter((track) => track.participant.identity === hostIdentity);
28 | 
29 |   let content;
30 | 
31 |   if (!participant && connectionState === ConnectionState.Connected) {
32 |     content = <OfflineVideo username={hostName} />;
33 |   } else if (!participant || tracks.length === 0) {
34 |     content = <LoadingVideo label={connectionState} />;
35 |   } else {
36 |     content = <LiveVideo participant={participant} />;
37 |   }
38 | 
39 |   return <div className="aspect-video border-b group relative">{content}</div>;
40 | };
41 | 
42 | export const VideoSkeleton = () => {
43 |   return (
44 |     <div className="aspect-video border-x border-background">
45 |       <Skeleton className="h-full w-full rounded-none" />
46 |     </div>
47 |   );
48 | };
49 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
 2 | 
 3 | ## Getting Started
 4 | 
 5 | First, run the development server:
 6 | 
 7 | ```bash
 8 | npm run dev
 9 | # or
10 | yarn dev
11 | # or
12 | pnpm dev
13 | # or
14 | bun dev
15 | ```
16 | 
17 | Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
18 | 
19 | You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
20 | 
21 | This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
22 | 
23 | ## Learn More
24 | 
25 | To learn more about Next.js, take a look at the following resources:
26 | 
27 | - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
28 | - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
29 | 
30 | You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
31 | 
32 | ## Deploy on Vercel
33 | 
34 | The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
35 | 
36 | Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
37 | 


--------------------------------------------------------------------------------
/app/(browse)/_components/navbar/search.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | import qs from "query-string";
 3 | import { useRouter } from "next/navigation";
 4 | import { useState } from "react";
 5 | import { Input } from "@/components/ui/input";
 6 | import { Button } from "@/components/ui/button";
 7 | import  {SearchIcon, X} from "lucide-react"
 8 | 
 9 | 
10 | 
11 | export  const Search = () => {
12 |   const [value, setValue] = useState("");
13 |   // const [value, setValue] = useState("");
14 | const router = useRouter();
15 | 
16 | const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
17 |   e.preventDefault();
18 | 
19 |   if(!value) return;
20 |   const url = qs.stringifyUrl({
21 |     url: "/search",
22 |     query: {term: value},
23 |   }, {skipEmptyString: true})
24 | 
25 |   router.push(url);
26 |   
27 | } 
28 | 
29 | const onClear = () => {
30 |   setValue("");
31 | }
32 |   return (
33 |     <form 
34 |     onSubmit={onSubmit}
35 |     className="relative w-full lg:w-100 flex items-center">
36 |       <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="search" className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"/>
37 |       {value && (
38 |         <X
39 |           className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
40 |           onClick={onClear}
41 |         />
42 |       )}
43 |       <Button type="submit"  className="rounded-l-none">
44 |         <SearchIcon className="h-5 w-5 text-muted-foreground"/>
45 |       </Button>
46 |     </form>
47 |   )
48 | }
49 | 
50 | 
51 | 


--------------------------------------------------------------------------------
/components/stream-player/chat-info.tsx:
--------------------------------------------------------------------------------
 1 | import { useMemo } from "react";
 2 | import { Info } from "lucide-react";
 3 | 
 4 | import { Hint } from "@/components/hint";
 5 | 
 6 | interface ChatInfoProps {
 7 |   isDelayed: boolean;
 8 |   isFollowersOnly: boolean;
 9 | }
10 | 
11 | export const ChatInfo = ({ isDelayed, isFollowersOnly }: ChatInfoProps) => {
12 |   const hint = useMemo(() => {
13 |     if (isFollowersOnly && !isDelayed) {
14 |       return "Only followers can chat";
15 |     }
16 | 
17 |     if (isDelayed && !isFollowersOnly) {
18 |       return "Messages are delayed by 3 seconds";
19 |     }
20 | 
21 |     if (isDelayed && isFollowersOnly) {
22 |       return "Only followers can chat. Messages are delayed by 3 seconds";
23 |     }
24 | 
25 |     return "";
26 |   }, [isDelayed, isFollowersOnly]);
27 | 
28 |   const label = useMemo(() => {
29 |     if (isFollowersOnly && !isDelayed) {
30 |       return "Followers only";
31 |     }
32 | 
33 |     if (isDelayed && !isFollowersOnly) {
34 |       return "Slow mode";
35 |     }
36 | 
37 |     if (isDelayed && isFollowersOnly) {
38 |       return "Followers only and slow mode";
39 |     }
40 | 
41 |     return "";
42 |   }, [isDelayed, isFollowersOnly]);
43 | 
44 |   if (!isDelayed && !isFollowersOnly) {
45 |     return null;
46 |   }
47 | 
48 |   return (
49 |     <div className="p-2 text-muted-foreground bg-white/5 border border-white/10 w-full rounded-t-md flex items-center gap-x-2">
50 |       <Hint label={hint}>
51 |         <Info className="h-4 w-4" />
52 |       </Hint>
53 |       <p className="text-xs font-semibold">{label}</p>
54 |     </div>
55 |   );
56 | };
57 | 


--------------------------------------------------------------------------------
/lib/recommended-service.ts:
--------------------------------------------------------------------------------
 1 | import { db } from "@/lib/db";
 2 | import { getSelf } from "@/lib/auth-service";
 3 | 
 4 | export const getRecommended = async () => {
 5 |   let self = null;
 6 | 
 7 |   //  Handle auth safely (VERY IMPORTANT)
 8 |   try {
 9 |     self = await getSelf();
10 |   } catch (error) {
11 |     console.log("AUTH ERROR:", error);
12 |   }
13 | 
14 |   //  If user is NOT logged in
15 |   if (!self) {
16 |     return await db.user.findMany({
17 |       include: {
18 |         stream: {
19 |           select: {
20 |             isLive: true,
21 |           },
22 |         },
23 |       },
24 |       orderBy: {
25 |         createdAt: "desc",
26 |       },
27 |       take: 10,
28 |     });
29 |   }
30 | 
31 |   //  If user is logged in
32 |   const users = await db.user.findMany({
33 |     where: {
34 |       NOT: {
35 |         id: self.id,
36 |       },
37 | 
38 |       //  exclude users already followed
39 |       followedBy: {
40 |         none: {
41 |           followerId: self.id,
42 |         },
43 |       },
44 | 
45 |       //  exclude users who blocked me (⚠️ your schema uses blockedby)
46 |       blockedby: {
47 |         none: {
48 |           blockerId: self.id,
49 |         },
50 |       },
51 |     },
52 | 
53 |     include: {
54 |       stream: {
55 |         select: {
56 |           isLive: true,
57 |         },
58 |       },
59 |     },
60 | 
61 |     //  show live users first (like Twitch)
62 |     orderBy: [
63 |       {
64 |         stream: {
65 |           isLive: "desc",
66 |         },
67 |       },
68 |       {
69 |         createdAt: "desc",
70 |       },
71 |     ],
72 | 
73 |     take: 10,
74 |   });
75 | 
76 |   return users;
77 | };


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/community/_components/columns.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { ArrowUpDown } from "lucide-react";
 4 | import { ColumnDef } from "@tanstack/react-table";
 5 | 
 6 | import { Button } from "@/components/ui/button";
 7 | import { UserAvatar } from "@/components/user-avatar";
 8 | 
 9 | import { UnblockButton } from "./unblock-button";
10 | 
11 | export type BlockedUser = {
12 |   id: string;
13 |   userId: string;
14 |   imageUrl: string;
15 |   username: string;
16 |   createdAt: string;
17 | };
18 | 
19 | export const columns: ColumnDef<BlockedUser>[] = [
20 |   {
21 |     accessorKey: "username",
22 |     header: ({ column }) => (
23 |       <Button
24 |         variant="ghost"
25 |         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
26 |       >
27 |         Username
28 |         <ArrowUpDown className="ml-2 h-4 w-4" />
29 |       </Button>
30 |     ),
31 |     cell: ({ row }) => (
32 |       <div className="flex items-center gap-x-4">
33 |         <UserAvatar
34 |           username={row.original.username}
35 |           imageUrl={row.original.imageUrl}
36 |         />
37 |         <span>{row.original.username}</span>
38 |       </div>
39 |     ),
40 |   },
41 |   {
42 |     accessorKey: "createdAt",
43 |     header: ({ column }) => (
44 |       <Button
45 |         variant="ghost"
46 |         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
47 |       >
48 |         Date blocked
49 |         <ArrowUpDown className="ml-2 h-4 w-4" />
50 |       </Button>
51 |     ),
52 |   },
53 |   {
54 |     id: "actions",
55 |     cell: ({ row }) => <UnblockButton userId={row.original.userId} />,
56 |   },
57 | ];
58 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/chat/_components/toggle-card.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { toast } from "sonner";
 4 | import { useTransition } from "react";
 5 | 
 6 | import { Switch } from "@/components/ui/switch";
 7 | import { updateStream } from "@/actions/stream";
 8 | import { Skeleton } from "@/components/ui/skeleton";
 9 | 
10 | type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";
11 | 
12 | interface ToggleCardProps {
13 |   field: FieldTypes;
14 |   value: boolean;
15 |   lable: string;
16 | }
17 | 
18 | export const ToggleCard = ({
19 |   lable,
20 |   field,
21 |   value = false,
22 | }: ToggleCardProps) => {
23 |   const [isPending, startTransition] = useTransition();
24 |   const onChange = async () => {
25 |     startTransition(() => {
26 |       updateStream({
27 |         [field]: !value,
28 |       })
29 |         .then(() => {
30 |           toast.success(`Chat Settings Updated!`);
31 |         })
32 |         .catch(() => {
33 |           toast.error("Failed to update chat");
34 |         });
35 |     });
36 |   };
37 |   return (
38 |     <div className="rounded-xl bg-muted p-6">
39 |       <div className="flex justify-between items-center">
40 |         <p className="shrink-0 font-semibold">{lable}</p>
41 |         <div className="space-y-4">
42 |           <Switch
43 |             disabled={isPending}
44 |             onCheckedChange={onChange}
45 |             checked={value}
46 |           >
47 |             {value ? "On" : "Off"}
48 |           </Switch>
49 |         </div>
50 |       </div>
51 |     </div>
52 |   );
53 | };
54 | 
55 | export const ToggleCardSkeleton = () => {
56 |   return <Skeleton className="rounded-xl p-10 w-full" />;
57 | };
58 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "twitch",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "dev": "next dev",
 7 |     "build": "next build",
 8 |     "start": "next start",
 9 |     "lint": "eslint"
10 |   },
11 |   "dependencies": {
12 |     "@clerk/nextjs": "^6.38.1",
13 |     "@clerk/themes": "^2.4.57",
14 |     "@livekit/components-react": "^2.9.20",
15 |     "@prisma/adapter-pg": "^7.4.2",
16 |     "@prisma/client": "^6.19.2",
17 |     "@tanstack/react-table": "^8.21.3",
18 |     "@uploadthing/react": "^7.3.3",
19 |     "class-variance-authority": "^0.7.1",
20 |     "clsx": "^2.1.1",
21 |     "dotenv": "^17.3.1",
22 |     "jwt-decode": "^4.0.0",
23 |     "livekit-client": "^2.18.0",
24 |     "livekit-server-sdk": "^2.15.0",
25 |     "lucide-react": "^0.575.0",
26 |     "moment": "^2.30.1",
27 |     "next": "16.1.6",
28 |     "next-themes": "^0.4.6",
29 |     "pg": "^8.19.0",
30 |     "query-string": "^9.3.1",
31 |     "radix-ui": "^1.4.3",
32 |     "react": "19.2.3",
33 |     "react-dom": "19.2.3",
34 |     "sonner": "^2.0.7",
35 |     "string-to-color": "^2.2.2",
36 |     "svix": "^1.86.0",
37 |     "tailwind-merge": "^3.5.0",
38 |     "tailwindcss": "^4.2.2",
39 |     "uploadthing": "^7.7.4",
40 |     "usehooks-ts": "^3.1.1",
41 |     "uuid": "^13.0.0",
42 |     "zustand": "^5.0.11"
43 |   },
44 |   "devDependencies": {
45 |     "@tailwindcss/postcss": "^4.2.2",
46 |     "@types/node": "^20",
47 |     "@types/pg": "^8.18.0",
48 |     "@types/react": "^19",
49 |     "@types/react-dom": "^19",
50 |     "@types/uuid": "^10.0.0",
51 |     "eslint": "^9",
52 |     "eslint-config-next": "16.1.6",
53 |     "prisma": "^6.19.2",
54 |     "shadcn": "^3.8.5",
55 |     "tw-animate-css": "^1.4.0",
56 |     "typescript": "^5"
57 |   }
58 | }
59 | 


--------------------------------------------------------------------------------
/components/user-avatar.tsx:
--------------------------------------------------------------------------------
 1 | import { cva, type VariantProps } from "class-variance-authority";
 2 | 
 3 | import { cn } from "@/lib/utils";
 4 | import { Skeleton } from "@/components/ui/skeleton";
 5 | import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
 6 | import { LiveBadge } from "@/components/live-badge";
 7 | 
 8 | const avatarSizes = cva("", {
 9 |   variants: {
10 |     size: {
11 |       default: "h-8 w-8",
12 |       lg: "h-14 w-14",
13 |     },
14 |   },
15 |   defaultVariants: {
16 |     size: "default",
17 |   },
18 | });
19 | 
20 | interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
21 |   username: string;
22 |   imageUrl: string;
23 |   isLive?: boolean;
24 |   showBadge?: boolean;
25 | }
26 | 
27 | export const UserAvatar = ({
28 |   username,
29 |   imageUrl,
30 |   isLive,
31 |   showBadge,
32 |   size,
33 | }: UserAvatarProps) => {
34 |   const canShowBadge = showBadge && isLive;
35 | 
36 |   return (
37 |     <div className="relative">
38 |       <Avatar
39 |         className={cn(
40 |           isLive && "ring-2 ring-rose-500 border border-background",
41 |           avatarSizes({ size })
42 |         )}
43 |       >
44 |         <AvatarImage src={imageUrl} className="object-cover" />
45 |         <AvatarFallback>
46 |           {username.slice(0, 2).toUpperCase()}
47 |         </AvatarFallback>
48 |       </Avatar>
49 | 
50 |       {canShowBadge && (
51 |         <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 transform">
52 |           <LiveBadge />
53 |         </div>
54 |       )}
55 |     </div>
56 |   );
57 | };
58 | 
59 | type UserAvatarSkeletonProps = VariantProps<typeof avatarSizes>;
60 | 
61 | export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
62 |   return (
63 |     <Skeleton
64 |       className={cn("rounded-full", avatarSizes({ size }))}
65 |     />
66 |   );
67 | };


--------------------------------------------------------------------------------
/app/(browse)/_components/sidebar/toggle.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | import { Button } from '@/components/ui/button';
 3 | import { Hint } from '@/components/ui/hint';
 4 | import { Skeleton } from '@/components/ui/skeleton';
 5 | import { useSidebar } from '@/store/use-sidebar'
 6 | import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
 7 | import React from 'react'
 8 | 
 9 | 
10 | export const Toggle = () => {
11 | 
12 |     const {collapsed, onExpand, onCollapse} = useSidebar((state) => state)
13 | 
14 |     const label = collapsed ? "Expand" : "Collapse";
15 |   return (
16 |     <>
17 |     {collapsed && (
18 |         <div className='hidden lg:flex w-full items-center justify-center pt-4 mb-4'>
19 |             <Hint label={label} side="right" asChild >
20 |             <Button variant="ghost" className='h-auto p-2' onClick={onExpand}>
21 |                 <ArrowRightFromLine className='w-4 h-4' />
22 |             </Button>
23 |             </Hint>
24 |         </div>
25 |     ) }
26 | 
27 |       {!collapsed && (
28 |         <div className='p-3 pl-6 mb-2 flex items-center w-full'>
29 |             <p className='font-semibold text-primary'>
30 |             For you
31 |             </p> 
32 |                 <Hint label={label} side="right" asChild>
33 |                 <Button className='h-auto p-2 ml-auto' variant="ghost"
34 |                     onClick={onCollapse}
35 |                 >
36 |                     <ArrowLeftFromLine className='w-4 h-4'  />
37 |                 </Button>
38 |                 </Hint>
39 |             
40 |         </div>
41 |       )}
42 |     </>
43 |   )
44 | }
45 | 
46 | export const ToggleSkeleton = () => {
47 |   return (
48 |     <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
49 |       <Skeleton className="h-6 w-25" />
50 |       <Skeleton className="h-6 w-6" />
51 |     </div>
52 |   );
53 | };


--------------------------------------------------------------------------------
/components/ui/scroll-area.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { ScrollArea as ScrollAreaPrimitive } from "radix-ui"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function ScrollArea({
 9 |   className,
10 |   children,
11 |   ...props
12 | }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
13 |   return (
14 |     <ScrollAreaPrimitive.Root
15 |       data-slot="scroll-area"
16 |       className={cn("relative", className)}
17 |       {...props}
18 |     >
19 |       <ScrollAreaPrimitive.Viewport
20 |         data-slot="scroll-area-viewport"
21 |         className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
22 |       >
23 |         {children}
24 |       </ScrollAreaPrimitive.Viewport>
25 |       <ScrollBar />
26 |       <ScrollAreaPrimitive.Corner />
27 |     </ScrollAreaPrimitive.Root>
28 |   )
29 | }
30 | 
31 | function ScrollBar({
32 |   className,
33 |   orientation = "vertical",
34 |   ...props
35 | }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
36 |   return (
37 |     <ScrollAreaPrimitive.ScrollAreaScrollbar
38 |       data-slot="scroll-area-scrollbar"
39 |       orientation={orientation}
40 |       className={cn(
41 |         "flex touch-none p-px transition-colors select-none",
42 |         orientation === "vertical" &&
43 |           "h-full w-2.5 border-l border-l-transparent",
44 |         orientation === "horizontal" &&
45 |           "h-2.5 flex-col border-t border-t-transparent",
46 |         className
47 |       )}
48 |       {...props}
49 |     >
50 |       <ScrollAreaPrimitive.ScrollAreaThumb
51 |         data-slot="scroll-area-thumb"
52 |         className="relative flex-1 rounded-full bg-border"
53 |       />
54 |     </ScrollAreaPrimitive.ScrollAreaScrollbar>
55 |   )
56 | }
57 | 
58 | export { ScrollArea, ScrollBar }
59 | 


--------------------------------------------------------------------------------
/components/ui/alert.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | import { cva, type VariantProps } from "class-variance-authority"
 3 | 
 4 | import { cn } from "@/lib/utils"
 5 | 
 6 | const alertVariants = cva(
 7 |   "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
 8 |   {
 9 |     variants: {
10 |       variant: {
11 |         default: "bg-card text-card-foreground",
12 |         destructive:
13 |           "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current",
14 |       },
15 |     },
16 |     defaultVariants: {
17 |       variant: "default",
18 |     },
19 |   }
20 | )
21 | 
22 | function Alert({
23 |   className,
24 |   variant,
25 |   ...props
26 | }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
27 |   return (
28 |     <div
29 |       data-slot="alert"
30 |       role="alert"
31 |       className={cn(alertVariants({ variant }), className)}
32 |       {...props}
33 |     />
34 |   )
35 | }
36 | 
37 | function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
38 |   return (
39 |     <div
40 |       data-slot="alert-title"
41 |       className={cn(
42 |         "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
43 |         className
44 |       )}
45 |       {...props}
46 |     />
47 |   )
48 | }
49 | 
50 | function AlertDescription({
51 |   className,
52 |   ...props
53 | }: React.ComponentProps<"div">) {
54 |   return (
55 |     <div
56 |       data-slot="alert-description"
57 |       className={cn(
58 |         "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
59 |         className
60 |       )}
61 |       {...props}
62 |     />
63 |   )
64 | }
65 | 
66 | export { Alert, AlertTitle, AlertDescription }
67 | 


--------------------------------------------------------------------------------
/app/(browse)/[username]/_components/actions.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | import { onFollow } from '@/actions/follow'
 3 | import { Button } from '@/components/ui/button'
 4 | import {useTransition } from 'react'
 5 | import { toast } from 'sonner';
 6 | import { onUnfollow } from '@/actions/follow';
 7 | import { onBlock } from '@/actions/block';
 8 | 
 9 | interface ActionsProps {
10 |     isFollowing: boolean;
11 |     userId: string
12 | }
13 | 
14 | export  const Actions = ({isFollowing, userId}: ActionsProps) => {
15 |     const [isPending, startTransition] = useTransition(); 
16 |     
17 |     const handleUnFollow = async () => {
18 |             startTransition(() => {
19 |         onUnfollow(userId)
20 |              .then((data) => toast.success(`You are now Unfollowed ${data.following.username}`))  
21 |              .catch(()=> toast.error("something went wrong")) 
22 |             })
23 |     }
24 |     const handleFollow = async () => {
25 |             startTransition(() => {
26 |         onFollow(userId)
27 |              .then((data) => toast.success(`You are now following ${data.following.username}`))  
28 |              .catch(()=> toast.error("something went wrong")) 
29 |             })
30 |     }
31 | 
32 |     const onClick = () => {
33 |       if (isFollowing){
34 |         handleUnFollow()
35 |       } else{
36 |         handleFollow()
37 |       }
38 |     }
39 | 
40 |     const handleBlock = () => {
41 |       startTransition(() => {
42 |         onBlock(userId)
43 |         .then((data) => toast.success(`Blocked the user ${data.blocked.username}`))
44 |         .catch(() => toast.error("Something went wrong"))
45 |       })
46 |     }
47 |     
48 | 
49 | 
50 |   return (
51 |     <>
52 |     <Button  variant="primary" onClick={onClick} disabled={isPending} >
53 |       {isFollowing ? "Unfollow" : "Follow"}
54 |     </Button>
55 |     <Button onClick={handleBlock} disabled={isPending}>
56 |       Block
57 |     </Button>
58 |     </>
59 |   )
60 | }
61 | 
62 |   


--------------------------------------------------------------------------------
/app/(browse)/(home)/_components/result-card.tsx:
--------------------------------------------------------------------------------
 1 | import Link from "next/link";
 2 | import { Stream, User } from "@prisma/client";
 3 | 
 4 | import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
 5 | import { Skeleton } from "@/components/ui/skeleton";
 6 | import { LiveBadge } from "@/components/live-badge";
 7 | import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
 8 | 
 9 | interface ResultCardProps {
10 |   data: {
11 |     user: User;
12 |     isLive: boolean;
13 |     title: string;
14 |     thumbnail: string | null;
15 |   };
16 | }
17 | 
18 | export const ResultCard = ({ data }: ResultCardProps) => {
19 |   return (
20 |     <Link href={`/${data.user.username}`}>
21 |       <div className="h-full w-full space-y-4">
22 |         <Thumbnail
23 |           src={data.thumbnail}
24 |           fallback={data.user.imageUrl}
25 |           isLive={data.isLive}
26 |           username={data.user.username}
27 |         />
28 |         <div className="flex gap-x-3">
29 |           <UserAvatar
30 |             username={data.user.username}
31 |             imageUrl={data.user.imageUrl}
32 |             isLive={data.isLive}
33 |           />
34 |           <div className="flex flex-col text-sm overflow-hidden">
35 |             <p className="truncate font-semibold hover:text-blue-500">
36 |               {data.title}
37 |             </p>
38 |             <p className="text-muted-foreground">{data.user.username}</p>
39 |           </div>
40 |         </div>
41 |       </div>
42 |     </Link>
43 |   );
44 | };
45 | 
46 | export const ResultCardSkeleton = () => {
47 |   return (
48 |     <div className="h-full w-full space-y-4">
49 |       <ThumbnailSkeleton />
50 |       <div className="flex gap-x-3">
51 |         <UserAvatarSkeleton />
52 |         <div className="flex flex-col gap-y-1">
53 |           <Skeleton className="h-4 w-32" />
54 |           <Skeleton className="h-3 w-24" />
55 |         </div>
56 |       </div>
57 |     </div>
58 |   );
59 | };
60 | 


--------------------------------------------------------------------------------
/components/thumbnail.tsx:
--------------------------------------------------------------------------------
 1 | import Image from "next/image";
 2 | 
 3 | import { Skeleton } from "@/components/ui/skeleton";
 4 | import { LiveBadge } from "@/components/live-badge";
 5 | import { UserAvatar } from "@/components/user-avatar";
 6 | 
 7 | interface ThumbnailProps {
 8 |   src: string | null;
 9 |   fallback: string;
10 |   isLive: boolean;
11 |   username: string;
12 | }
13 | 
14 | export const Thumbnail = ({
15 |   src,
16 |   fallback,
17 |   isLive,
18 |   username,
19 | }: ThumbnailProps) => {
20 |   let content;
21 | 
22 |   if (!src) {
23 |     content = (
24 |       <div className="bg-background flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
25 |         <UserAvatar
26 |           size="lg"
27 |           showBadge
28 |           username={username}
29 |           imageUrl={fallback}
30 |           isLive={isLive}
31 |         />
32 |       </div>
33 |     );
34 |   } else {
35 |     content = (
36 |       <Image
37 |         src={src}
38 |         fill
39 |         alt="Thumbnail"
40 |         className="object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md"
41 |       />
42 |     );
43 |   }
44 | 
45 |   return (
46 |     <div className="group aspect-video relative rounded-md cursor-pointer">
47 |       <div className="rounded-md absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
48 |       {content}
49 |       {isLive && src && (
50 |         <div className="absolute top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
51 |           <LiveBadge />
52 |         </div>
53 |       )}
54 |     </div>
55 |   );
56 | };
57 | 
58 | export const ThumbnailSkeleton = () => {
59 |   return (
60 |     <div className="group aspect-video relative rounded-xl cursor-pointer">
61 |       <Skeleton className="h-full w-full" />
62 |     </div>
63 |   );
64 | };
65 | 


--------------------------------------------------------------------------------
/app/(browse)/_components/sidebar/user-item.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { usePathname } from "next/navigation";
 4 | import { cn } from "@/lib/utils";
 5 | import { Button } from "@/components/ui/button";
 6 | import { useSidebar } from "@/store/use-sidebar";
 7 | import { Skeleton } from "@/components/ui/skeleton";
 8 | import Link from "next/link";
 9 | import { UserAvatar } from "@/components/user-avatar";
10 | import { LiveBadge } from "@/components/live-badge";
11 | 
12 | interface UserItemProps {
13 |   username: string;
14 |   imageUrl: string;
15 |   isLive: boolean;
16 | }
17 | export const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
18 |   const pathname = usePathname();
19 |   const { collapsed } = useSidebar((state) => state);
20 |   const href = `/${username}`;
21 |   const isActive = pathname === href;
22 | 
23 |   return (
24 |     <Button
25 |       asChild
26 |       variant="ghost"
27 |       className={cn(
28 |         "w-full h-12",
29 |         collapsed ? "justify-center" : "justify-start",
30 |         isActive && "bg-accent text-accent-foreground",
31 |       )}
32 |     >
33 |       <Link href={href}>
34 |         <div
35 |           className={cn(
36 |             "flex items-center w-full gap-x-4",
37 |             collapsed && "justify-center",
38 |           )}
39 |         >
40 |           <UserAvatar
41 |             imageUrl={imageUrl}
42 |             username={username}
43 |             isLive={isLive}
44 |           />
45 |           {!collapsed && <p className="truncate">{username}</p>}
46 |           {!collapsed && isLive && <LiveBadge className="ml-auto" />}
47 | 
48 |         </div>
49 |       </Link>
50 |     </Button>
51 |   );
52 | };
53 | 
54 | export const UserItemSkeleton = () => {
55 |   return (
56 |     <li className="flex items-center gap-x-4 px-3 py-2">
57 |       <Skeleton className="min-h-8 min-w-8 rounded-full" />
58 |       <div className="flex-1">
59 |         <Skeleton className="h-6" />
60 |       </div>
61 |     </li>
62 |   );
63 | };
64 | 


--------------------------------------------------------------------------------
/prisma/migrations/20260316125243_block_and_stream_schema/migration.sql:
--------------------------------------------------------------------------------
 1 | -- CreateTable
 2 | CREATE TABLE "Block" (
 3 |     "id" TEXT NOT NULL,
 4 |     "blockerId" TEXT NOT NULL,
 5 |     "blockedId" TEXT NOT NULL,
 6 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
 7 |     "updatedAt" TIMESTAMP(3) NOT NULL,
 8 | 
 9 |     CONSTRAINT "Block_pkey" PRIMARY KEY ("id")
10 | );
11 | 
12 | -- CreateTable
13 | CREATE TABLE "Stream" (
14 |     "id" TEXT NOT NULL,
15 |     "title" TEXT NOT NULL,
16 |     "thumbnail" TEXT,
17 |     "ingressId" TEXT,
18 |     "serverUrl" TEXT,
19 |     "streamKey" TEXT,
20 |     "isLive" BOOLEAN NOT NULL DEFAULT false,
21 |     "isChatEnabled" BOOLEAN NOT NULL DEFAULT true,
22 |     "isChatDelayed" BOOLEAN NOT NULL DEFAULT false,
23 |     "isChatFollowersOnly" BOOLEAN NOT NULL DEFAULT false,
24 |     "userId" TEXT NOT NULL,
25 |     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
26 |     "updatedAt" TIMESTAMP(3) NOT NULL,
27 | 
28 |     CONSTRAINT "Stream_pkey" PRIMARY KEY ("id")
29 | );
30 | 
31 | -- CreateIndex
32 | CREATE INDEX "Block_blockerId_idx" ON "Block"("blockerId");
33 | 
34 | -- CreateIndex
35 | CREATE INDEX "Block_blockedId_idx" ON "Block"("blockedId");
36 | 
37 | -- CreateIndex
38 | CREATE UNIQUE INDEX "Block_blockerId_blockedId_key" ON "Block"("blockerId", "blockedId");
39 | 
40 | -- CreateIndex
41 | CREATE UNIQUE INDEX "Stream_ingressId_key" ON "Stream"("ingressId");
42 | 
43 | -- CreateIndex
44 | CREATE UNIQUE INDEX "Stream_userId_key" ON "Stream"("userId");
45 | 
46 | -- AddForeignKey
47 | ALTER TABLE "Block" ADD CONSTRAINT "Block_blockerId_fkey" FOREIGN KEY ("blockerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
48 | 
49 | -- AddForeignKey
50 | ALTER TABLE "Block" ADD CONSTRAINT "Block_blockedId_fkey" FOREIGN KEY ("blockedId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
51 | 
52 | -- AddForeignKey
53 | ALTER TABLE "Stream" ADD CONSTRAINT "Stream_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
54 | 


--------------------------------------------------------------------------------
/components/stream-player/community-item.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { toast } from "sonner";
 4 | import { useTransition } from "react";
 5 | import { MinusCircle } from "lucide-react";
 6 | 
 7 | import { Hint } from "@/components/hint";
 8 | import { onBlock } from "@/actions/block";
 9 | import { cn, stringToColor } from "@/lib/utils";
10 | import { Button } from "@/components/ui/button";
11 | 
12 | interface CommunityItemProps {
13 |   hostName: string;
14 |   viewerName: string;
15 |   participantName?: string;
16 |   participantIdentity: string;
17 | }
18 | 
19 | export const CommunityItem = ({
20 |   hostName,
21 |   viewerName,
22 |   participantIdentity,
23 |   participantName,
24 | }: CommunityItemProps) => {
25 |   const [isPending, startTransition] = useTransition();
26 | 
27 |   const color = stringToColor(participantName || "");
28 |   const isSelf = participantName === viewerName;
29 |   const isHost = viewerName === hostName;
30 | 
31 |   const handleBlock = () => {
32 |     if (!participantName || isSelf || !isHost) return;
33 | 
34 |     startTransition(() => {
35 |       onBlock(participantIdentity)
36 |         .then(() => toast.success(`Blocked ${participantName}`))
37 |         .catch(() => toast.error("Something went wrong"));
38 |     });
39 |   };
40 | 
41 |   return (
42 |     <div
43 |       className={cn(
44 |         "group flex items-center justify-between w-full p-2 rounded-md text-sm hover:bg-white/5",
45 |         isPending && "opacity-50 pointer-events-none"
46 |       )}
47 |     >
48 |       <p style={{ color: color }}>{participantName}</p>
49 |       {isHost && !isSelf && (
50 |         <Hint label="Block">
51 |           <Button
52 |             variant="ghost"
53 |             disabled={isPending}
54 |             onClick={handleBlock}
55 |             className="h-auto w-auto p-1 opacity-0 group-hover:opacity-100 transition"
56 |           >
57 |             <MinusCircle className="h-4 w-4 text-muted-foreground" />
58 |           </Button>
59 |         </Hint>
60 |       )}
61 |     </div>
62 |   );
63 | };
64 | 


--------------------------------------------------------------------------------
/app/(browse)/search/_components/result-card.tsx:
--------------------------------------------------------------------------------
 1 | import Link from "next/link";
 2 | import { Stream, User } from "@prisma/client";
 3 | import moment from "moment";
 4 | 
 5 | import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
 6 | import { Skeleton } from "@/components/ui/skeleton";
 7 | import { VerifiedMark } from "@/components/verified-mark";
 8 | 
 9 | interface ResultCardProps {
10 |   data: {
11 |     id: string;
12 |     title: string;
13 |     thumbnail: string | null;
14 |     isLive: boolean;
15 |     updatedAt: Date;
16 |     user: User;
17 |   };
18 | }
19 | 
20 | export const ResultCard = ({ data }: ResultCardProps) => {
21 |   return (
22 |     <Link href={`/${data.user.username}`}>
23 |       <div className="w-full flex gap-x-4">
24 |         <div className="relative h-36 w-[16rem]">
25 |           <Thumbnail
26 |             src={data.thumbnail}
27 |             fallback={data.user.imageUrl}
28 |             isLive={data.isLive}
29 |             username={data.user.username}
30 |           />
31 |         </div>
32 |         <div className="space-y-1">
33 |           <div className="flex items-center gap-x-2">
34 |             <p className="font-bold text-lg cursor-pointer hover:text-blue-500">
35 |               {data.user.username}
36 |             </p>
37 |             <VerifiedMark />
38 |           </div>
39 |           <p className="text-sm text-muted-foreground">{data.title}</p>
40 |           <p className="text-sm text-muted-foreground">
41 |             {moment(data.updatedAt).fromNow()}
42 |           </p>
43 |         </div>
44 |       </div>
45 |     </Link>
46 |   );
47 | };
48 | 
49 | export const ResultCardSkeleton = () => {
50 |   return (
51 |     <div className="w-full flex gap-x-4">
52 |       <div className="relative h-36 w-[16rem]">
53 |         <ThumbnailSkeleton />
54 |       </div>
55 |       <div className="space-y-2">
56 |         <Skeleton className="h-4 w-32" />
57 |         <Skeleton className="h-3 w-24" />
58 |         <Skeleton className="h-3 w-12" />
59 |       </div>
60 |     </div>
61 |   );
62 | };
63 | 


--------------------------------------------------------------------------------
/components/ui/tooltip.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { Tooltip as TooltipPrimitive } from "radix-ui"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function TooltipProvider({
 9 |   delayDuration = 0,
10 |   ...props
11 | }: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
12 |   return (
13 |     <TooltipPrimitive.Provider
14 |       data-slot="tooltip-provider"
15 |       delayDuration={delayDuration}
16 |       {...props}
17 |     />
18 |   )
19 | }
20 | 
21 | function Tooltip({
22 |   ...props
23 | }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
24 |   return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
25 | }
26 | 
27 | function TooltipTrigger({
28 |   ...props
29 | }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
30 |   return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
31 | }
32 | 
33 | function TooltipContent({
34 |   className,
35 |   sideOffset = 0,
36 |   children,
37 |   ...props
38 | }: React.ComponentProps<typeof TooltipPrimitive.Content>) {
39 |   return (
40 |     <TooltipPrimitive.Portal>
41 |       <TooltipPrimitive.Content
42 |         data-slot="tooltip-content"
43 |         sideOffset={sideOffset}
44 |         className={cn(
45 |           "z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
46 |           className
47 |         )}
48 |         {...props}
49 |       >
50 |         {children}
51 |         <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" />
52 |       </TooltipPrimitive.Content>
53 |     </TooltipPrimitive.Portal>
54 |   )
55 | }
56 | 
57 | export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
58 | 


--------------------------------------------------------------------------------
/lib/search-service.ts:
--------------------------------------------------------------------------------
 1 | import { db } from "@/lib/db";
 2 | import { getSelf } from "@/lib/auth-service";
 3 | 
 4 | export const getSearch = async (term?: string) => {
 5 |   const self = await getSelf();
 6 |   const userId = self?.id;
 7 | 
 8 |   const streams = await db.stream.findMany({
 9 |     where: {
10 |       AND: [
11 |         // Exclude self
12 |         userId
13 |           ? {
14 |               user: {
15 |                 NOT: {
16 |                   id: userId,
17 |                 },
18 |               },
19 |             }
20 |           : {},
21 | 
22 |         // Search filter
23 |         {
24 |           OR: [
25 |             {
26 |               title: {
27 |                 contains: term ?? "",
28 |                 mode: "insensitive", // 🔥 better UX
29 |               },
30 |             },
31 |             {
32 |               user: {
33 |                 username: {
34 |                   contains: term ?? "",
35 |                   mode: "insensitive",
36 |                 },
37 |               },
38 |             },
39 |           ],
40 |         },
41 | 
42 |         // Block filtering (VERY IMPORTANT)
43 |         userId
44 |           ? {
45 |               user: {
46 |                 AND: [
47 |                   {
48 |                     NOT: {
49 |                       blocking: {
50 |                         some: {
51 |                           blockedId: userId,
52 |                         },
53 |                       },
54 |                     },
55 |                   },
56 |                   {
57 |                     NOT: {
58 |                       blockedby: {
59 |                         some: {
60 |                           blockerId: userId,
61 |                         },
62 |                       },
63 |                     },
64 |                   },
65 |                 ],
66 |               },
67 |             }
68 |           : {},
69 |       ],
70 |     },
71 | 
72 |     select: {
73 |       user: true,
74 |       id: true,
75 |       title: true,
76 |       isLive: true,
77 |       thumbnail: true,
78 |       updatedAt: true,
79 |     },
80 | 
81 |     orderBy: [{ isLive: "desc" }, { updatedAt: "desc" }],
82 | 
83 |     take: 20,
84 |   });
85 | 
86 |   return streams;
87 | };
88 | 


--------------------------------------------------------------------------------
/components/stream-player/info-card.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import Image from "next/image";
 4 | import { Pencil } from "lucide-react";
 5 | 
 6 | import { Separator } from "@/components/ui/separator";
 7 | 
 8 | import { InfoModal } from "./info-modal";
 9 | 
10 | interface InfoCardProps {
11 |   name: string;
12 |   thumbnailUrl: string | null;
13 |   hostIdentity: string;
14 |   viewerIdentity: string;
15 | }
16 | 
17 | export const InfoCard = ({
18 |   name,
19 |   thumbnailUrl,
20 |   hostIdentity,
21 |   viewerIdentity,
22 | }: InfoCardProps) => {
23 |   const hostAsViewer = `Host-${hostIdentity}`;
24 |   const isHost = viewerIdentity === hostAsViewer;
25 | 
26 |   if (!isHost) return null;
27 | 
28 |   return (
29 |     <div className="px-4">
30 |       <div className="rounded-xl bg-background">
31 |         <div className="flex items-center gap-x-2.5 p-4">
32 |           <div className="rounded-md bg-blue-600 p-2 h-auto w-auto">
33 |             <Pencil className="h-5 w-5" />
34 |           </div>
35 |           <div>
36 |             <h2 className="text-sm lg:text-lg font-semibold capitalize">
37 |               Edit your stream info
38 |             </h2>
39 |             <p className="text-muted-foreground text-xs lg:text-sm">
40 |               Maximize your visibility
41 |             </p>
42 |           </div>
43 |           <InfoModal initialName={name} initialThumbnailUrl={thumbnailUrl} />
44 |         </div>
45 |         <Separator />
46 |         <div className="p-4 lg:p-6 space-y-4">
47 |           <div>
48 |             <h3 className="text-sm text-muted-foreground mb-2">Name</h3>
49 |             <p className="text-sm font-semibold">{name}</p>
50 |           </div>
51 |           <div>
52 |             <h3 className="text-sm text-muted-foreground mb-2">Thumbnail</h3>
53 |             {thumbnailUrl && (
54 |               <div className="relative aspect-video rounded-md overflow-hidden w-50 border border-white/10">
55 |                 <Image
56 |                   fill
57 |                   src={thumbnailUrl}
58 |                   alt={name}
59 |                   className="object-cover"
60 |                 />
61 |               </div>
62 |             )}
63 |           </div>
64 |         </div>
65 |       </div>
66 |     </div>
67 |   );
68 | };
69 | 


--------------------------------------------------------------------------------
/components/ui/slider.tsx:
--------------------------------------------------------------------------------
 1 | "use client"
 2 | 
 3 | import * as React from "react"
 4 | import { Slider as SliderPrimitive } from "radix-ui"
 5 | 
 6 | import { cn } from "@/lib/utils"
 7 | 
 8 | function Slider({
 9 |   className,
10 |   defaultValue,
11 |   value,
12 |   min = 0,
13 |   max = 100,
14 |   ...props
15 | }: React.ComponentProps<typeof SliderPrimitive.Root>) {
16 |   const _values = React.useMemo(
17 |     () =>
18 |       Array.isArray(value)
19 |         ? value
20 |         : Array.isArray(defaultValue)
21 |           ? defaultValue
22 |           : [min, max],
23 |     [value, defaultValue, min, max]
24 |   )
25 | 
26 |   return (
27 |     <SliderPrimitive.Root
28 |       data-slot="slider"
29 |       defaultValue={defaultValue}
30 |       value={value}
31 |       min={min}
32 |       max={max}
33 |       className={cn(
34 |         "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
35 |         className
36 |       )}
37 |       {...props}
38 |     >
39 |       <SliderPrimitive.Track
40 |         data-slot="slider-track"
41 |         className={cn(
42 |           "relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
43 |         )}
44 |       >
45 |         <SliderPrimitive.Range
46 |           data-slot="slider-range"
47 |           className={cn(
48 |             "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
49 |           )}
50 |         />
51 |       </SliderPrimitive.Track>
52 |       {Array.from({ length: _values.length }, (_, index) => (
53 |         <SliderPrimitive.Thumb
54 |           data-slot="slider-thumb"
55 |           key={index}
56 |           className="block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
57 |         />
58 |       ))}
59 |     </SliderPrimitive.Root>
60 |   )
61 | }
62 | 
63 | export { Slider }
64 | 


--------------------------------------------------------------------------------
/components/stream-player/actions.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { toast } from "sonner";
 4 | import { Heart } from "lucide-react";
 5 | import { useTransition } from "react";
 6 | import { useAuth } from "@clerk/nextjs";
 7 | import { useRouter } from "next/navigation";
 8 | 
 9 | import { cn } from "@/lib/utils";
10 | import { Button } from "@/components/ui/button";
11 | import { Skeleton } from "@/components/ui/skeleton";
12 | import { onFollow, onUnfollow } from "@/actions/follow";
13 | 
14 | interface ActionsProps {
15 |   hostIdentity: string;
16 |   isFollowing: boolean;
17 |   isHost: boolean;
18 | }
19 | 
20 | export const Actions = ({
21 |   hostIdentity,
22 |   isFollowing,
23 |   isHost,
24 | }: ActionsProps) => {
25 |   const [isPending, startTransition] = useTransition();
26 |   const router = useRouter();
27 |   const { userId } = useAuth();
28 | 
29 |   const handleFollow = () => {
30 |     startTransition(() => {
31 |       onFollow(hostIdentity)
32 |         .then((data) =>
33 |           toast.success(`You are now following ${data.following.username}`)
34 |         )
35 |         .catch(() => toast.error("Something went wrong"));
36 |     });
37 |   };
38 | 
39 |   const handleUnfollow = () => {
40 |     startTransition(() => {
41 |       onUnfollow(hostIdentity)
42 |         .then((data) =>
43 |           toast.success(`You have unfollowed ${data.following.username}`)
44 |         )
45 |         .catch(() => toast.error("Something went wrong"));
46 |     });
47 |   };
48 | 
49 |   const toggleFollow = () => {
50 |     if (!userId) {
51 |       return router.push("/sign-in");
52 |     }
53 | 
54 |     if (isHost) return;
55 | 
56 |     if (isFollowing) {
57 |       handleUnfollow();
58 |     } else {
59 |       handleFollow();
60 |     }
61 |   };
62 | 
63 |   return (
64 |     <Button
65 |       disabled={isPending || isHost}
66 |       onClick={toggleFollow}
67 |       variant="primary"
68 |       size="sm"
69 |       className="w-full lg:w-auto"
70 |     >
71 |       <Heart
72 |         className={cn("h-4 w-4 mr-2", isFollowing ? "fill-white" : "fill-none")}
73 |       />
74 |       {isFollowing ? "Unfollow" : "Follow"}
75 |     </Button>
76 |   );
77 | };
78 | 
79 | export const ActionsSkeleton = () => {
80 |   return <Skeleton className="h-10 w-full lg:w-24" />;
81 | };
82 | 


--------------------------------------------------------------------------------
/components/stream-player/bio-modal.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { toast } from "sonner";
 4 | import { useState, useTransition, useRef, ElementRef } from "react";
 5 | 
 6 | import {
 7 |   Dialog,
 8 |   DialogClose,
 9 |   DialogContent,
10 |   DialogHeader,
11 |   DialogTitle,
12 |   DialogTrigger,
13 | } from "@/components/ui/dialog";
14 | import { updateUser } from "@/actions/user";
15 | import { Button } from "@/components/ui/button";
16 | import { Textarea } from "@/components/ui/textarea";
17 | 
18 | interface BioModalProps {
19 |   initialValue: string | null;
20 | }
21 | 
22 | export const BioModal = ({ initialValue }: BioModalProps) => {
23 |   const closeRef = useRef<ElementRef<"button">>(null);
24 | 
25 |   const [isPending, startTransition] = useTransition();
26 |   const [value, setValue] = useState(initialValue || "");
27 | 
28 |   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
29 |     e.preventDefault();
30 | 
31 |     startTransition(() => {
32 |       updateUser({ bio: value })
33 |         .then(() => {
34 |           toast.success("User bio updated");
35 |           closeRef.current?.click();
36 |         })
37 |         .catch(() => toast.error("Something went wrong"));
38 |     });
39 |   };
40 | 
41 |   return (
42 |     <Dialog>
43 |       <DialogTrigger asChild>
44 |         <Button variant="link" size="sm" className="ml-auto">
45 |           Edit
46 |         </Button>
47 |       </DialogTrigger>
48 |       <DialogContent>
49 |         <DialogHeader>
50 |           <DialogTitle>Edit user bio</DialogTitle>
51 |         </DialogHeader>
52 |         <form onSubmit={onSubmit} className="space-y-4">
53 |           <Textarea
54 |             placeholder="User bio"
55 |             onChange={(e) => setValue(e.target.value)}
56 |             value={value}
57 |             disabled={isPending}
58 |             className="resize-none"
59 |           />
60 |           <div className="flex justify-between">
61 |             <DialogClose ref={closeRef} asChild>
62 |               <Button type="button" variant="ghost">
63 |                 Cancel
64 |               </Button>
65 |             </DialogClose>
66 |             <Button disabled={isPending} type="submit" variant="primary">
67 |               Save
68 |             </Button>
69 |           </div>
70 |         </form>
71 |       </DialogContent>
72 |     </Dialog>
73 |   );
74 | };
75 | 


--------------------------------------------------------------------------------
/app/api/webhooks/clerk/route.ts:
--------------------------------------------------------------------------------
 1 | import { Webhook } from "svix";
 2 | import { headers } from "next/headers";
 3 | import { WebhookEvent } from "@clerk/nextjs/server";
 4 | import { db } from "@/lib/db";
 5 | 
 6 | export async function POST(req: Request) {
 7 |   const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
 8 | 
 9 |   if (!WEBHOOK_SECRET) {
10 |     return new Response("Missing CLERK_WEBHOOK_SECRET", { status: 500 });
11 |   }
12 | 
13 |   const headerPayload = await headers();
14 | 
15 |   const svix_id = headerPayload.get("svix-id");
16 |   const svix_timestamp = headerPayload.get("svix-timestamp");
17 |   const svix_signature = headerPayload.get("svix-signature");
18 | 
19 |   if (!svix_id || !svix_timestamp || !svix_signature) {
20 |     return new Response("Error occurred -- no svix headers", { status: 400 });
21 |   }
22 | 
23 |   const payload = await req.json();
24 |   const body = JSON.stringify(payload);
25 | 
26 |   const wh = new Webhook(WEBHOOK_SECRET);
27 | 
28 |   let evt: WebhookEvent;
29 | 
30 |   try {
31 |     evt = wh.verify(body, {
32 |       "svix-id": svix_id,
33 |       "svix-timestamp": svix_timestamp,
34 |       "svix-signature": svix_signature,
35 |     }) as WebhookEvent;
36 |   } catch (err) {
37 |     console.error("Error verifying webhook:", err);
38 |     return new Response("Error verifying webhook", { status: 400 });
39 |   }
40 | 
41 |   const eventType = evt.type;
42 | 
43 |   if (eventType === "user.created") {
44 |     const { id, username, image_url } = evt.data;
45 | 
46 |     await db.user.create({
47 |       data: {
48 |       externalUserId: id,
49 |       username: username ?? id,
50 |       imageUrl: image_url,
51 |       stream: {
52 |           create: {
53 |             title: `${payload.data.username}'s stream`,
54 |           },
55 |         },
56 |     },
57 |     });
58 |   }
59 | 
60 |   if (eventType === "user.updated") {
61 |   const { id, username, image_url } = evt.data;
62 | 
63 |   await db.user.update({
64 |     where: {
65 |       externalUserId: id,
66 |     },
67 |     data: {
68 |       username: username ?? id,
69 |       imageUrl: image_url,
70 |     },
71 |   });
72 | }
73 | 
74 | if (eventType === "user.deleted") {
75 |   const { id } = evt.data;
76 | 
77 |   await db.user.delete({
78 |     where: {
79 |       externalUserId: id,
80 |     },
81 |   });
82 | }
83 | 
84 |   return new Response("Webhook received", { status: 200 });
85 | }
86 | 


--------------------------------------------------------------------------------
/components/stream-player/chat-community.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useMemo, useState } from "react";
 4 | import { useDebounceValue } from "usehooks-ts";
 5 | import { useParticipants } from "@livekit/components-react";
 6 | import { LocalParticipant, RemoteParticipant } from "livekit-client";
 7 | 
 8 | import { Input } from "@/components/ui/input";
 9 | import { ScrollArea } from "@/components/ui/scroll-area";
10 | import { CommunityItem } from "./community-item";
11 | 
12 | interface ChatCommunityProps {
13 |   hostName: string;
14 |   viewerName: string;
15 |   isHidden: boolean;
16 | }
17 | 
18 | export const ChatCommunity = ({
19 |   hostName,
20 |   viewerName,
21 |   isHidden,
22 | }: ChatCommunityProps) => {
23 |   const [value, setValue] = useState("");
24 |   const [debouncedValue] = useDebounceValue(value, 500);
25 | 
26 |   const participants = useParticipants();
27 | 
28 |   const filteredParticipants = useMemo(() => {
29 |     const deduped = participants.reduce((acc, participant) => {
30 |       const hostAsViewer = `Host-${participant.identity}`;
31 | 
32 |       if (!acc.some((p) => p.identity === hostAsViewer)) {
33 |         acc.push(participant);
34 |       }
35 | 
36 |       return acc;
37 |     }, [] as (RemoteParticipant | LocalParticipant)[]);
38 | 
39 |     return deduped.filter((participant) => {
40 |       const name = (participant.name ?? "").toLowerCase();
41 |       return name.includes(debouncedValue.toLowerCase());
42 |     });
43 |   }, [participants, debouncedValue]);
44 | 
45 |   if (isHidden) {
46 |     return (
47 |       <div className="flex flex-1 items-center justify-center">
48 |         <p className="text-sm text-muted-foreground">
49 |           Community is disabled
50 |         </p>
51 |       </div>
52 |     );
53 |   }
54 | 
55 |   return (
56 |     <div className="p-4">
57 |       <Input
58 |         onChange={(e) => setValue(e.target.value)}
59 |         placeholder="Search community"
60 |         className="border-white/10"
61 |       />
62 | 
63 |       <ScrollArea className="gap-y-2 mt-4">
64 |         {filteredParticipants.length === 0 && (
65 |           <p className="text-center text-sm text-muted-foreground p-2">
66 |             No results
67 |           </p>
68 |         )}
69 | 
70 |         {filteredParticipants.map((participant) => (
71 |           <CommunityItem
72 |             key={participant.identity}
73 |             hostName={hostName}
74 |             viewerName={viewerName}
75 |             participantName={participant.name}
76 |             participantIdentity={participant.identity}
77 |           />
78 |         ))}
79 |       </ScrollArea>
80 |     </div>
81 |   );
82 | };


--------------------------------------------------------------------------------
/components/ui/button.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react"
 2 | import { cva, type VariantProps } from "class-variance-authority"
 3 | import { Slot } from "radix-ui"
 4 | 
 5 | import { cn } from "@/lib/utils"
 6 | 
 7 | const buttonVariants = cva(
 8 |   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
 9 |   {
10 |     variants: {
11 |       variant: {
12 |         default: "bg-primary text-primary-foreground hover:bg-primary/90",
13 |         destructive:
14 |           "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
15 |         outline:
16 |           "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
17 |         secondary:
18 |           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
19 |         ghost:
20 |           "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
21 |         link: "text-primary underline-offset-4 hover:underline",
22 |         primary: "text-white bg-blue-600 hover:bg-blue-600/80"
23 |       },
24 |       size: {
25 |         default: "h-9 px-4 py-2 has-[>svg]:px-3",
26 |         xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
27 |         sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
28 |         lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
29 |         icon: "size-9",
30 |         "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
31 |         "icon-sm": "size-8",
32 |         "icon-lg": "size-10",
33 |       },
34 |     },
35 |     defaultVariants: {
36 |       variant: "default",
37 |       size: "default",
38 |     },
39 |   }
40 | )
41 | 
42 | function Button({
43 |   className,
44 |   variant = "default",
45 |   size = "default",
46 |   asChild = false,
47 |   ...props
48 | }: React.ComponentProps<"button"> &
49 |   VariantProps<typeof buttonVariants> & {
50 |     asChild?: boolean
51 |   }) {
52 |   const Comp = asChild ? Slot.Root : "button"
53 | 
54 |   return (
55 |     <Comp
56 |       data-slot="button"
57 |       data-variant={variant}
58 |       data-size={size}
59 |       className={cn(buttonVariants({ variant, size, className }))}
60 |       {...props}
61 |     />
62 |   )
63 | }
64 | 
65 | export { Button, buttonVariants }
66 | 


--------------------------------------------------------------------------------
/components/stream-player/chat-form.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useState } from "react";
 4 | 
 5 | import { cn } from "@/lib/utils";
 6 | import { Input } from "@/components/ui/input";
 7 | import { Button } from "@/components/ui/button";
 8 | import { Skeleton } from "@/components/ui/skeleton";
 9 | 
10 | import { ChatInfo } from "./chat-info";
11 | 
12 | interface ChatFormProps {
13 |   onSubmit: () => void;
14 |   value: string;
15 |   onChange: (value: string) => void;
16 |   isHidden: boolean;
17 |   isFollowersOnly: boolean;
18 |   isFollowing: boolean;
19 |   isDelayed: boolean;
20 | }
21 | 
22 | export const ChatForm = ({
23 |   onSubmit,
24 |   value,
25 |   onChange,
26 |   isHidden,
27 |   isFollowersOnly,
28 |   isFollowing,
29 |   isDelayed,
30 | }: ChatFormProps) => {
31 |   const [isDelayBlocked, setIsDelayBlocked] = useState(false);
32 | 
33 |   const isFollowersOnlyAndNotFollowing = isFollowersOnly && !isFollowing;
34 |   const isDisabled =
35 |     isHidden || isDelayBlocked || isFollowersOnlyAndNotFollowing;
36 | 
37 |   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
38 |     e.preventDefault();
39 |     e.stopPropagation();
40 | 
41 |     if (!value || isDisabled) return;
42 | 
43 |     if (isDelayed && !isDelayBlocked) {
44 |       setIsDelayBlocked(true);
45 |       setTimeout(() => {
46 |         setIsDelayBlocked(false);
47 |         onSubmit();
48 |       }, 3000);
49 |     } else {
50 |       onSubmit();
51 |     }
52 |   };
53 | 
54 |   if (isHidden) {
55 |     return null;
56 |   }
57 | 
58 |   return (
59 |     <form
60 |       onSubmit={handleSubmit}
61 |       className="flex flex-col items-center gap-y-4 p-3"
62 |     >
63 |       <div className="w-full">
64 |         <ChatInfo isDelayed={isDelayed} isFollowersOnly={isFollowersOnly} />
65 |         <Input
66 |           onChange={(e) => onChange(e.target.value)}
67 |           value={value}
68 |           disabled={isDisabled}
69 |           placeholder="Send a message"
70 |           className={cn(
71 |             "border-white/10",
72 |             (isFollowersOnly || isDelayed) && "rounded-t-none border-t-0"
73 |           )}
74 |         />
75 |       </div>
76 |       <div className="ml-auto">
77 |         <Button type="submit" variant="primary" size="sm" disabled={isDisabled}>
78 |           Chat
79 |         </Button>
80 |       </div>
81 |     </form>
82 |   );
83 | };
84 | 
85 | export const ChatFormSkeleton = () => {
86 |   return (
87 |     <div className="flex flex-col items-center gap-y-4 p-3">
88 |       <Skeleton className="w-full h-10" />
89 |       <div className="flex items-center gap-x-2 ml-auto">
90 |         <Skeleton className="h-7 w-7" />
91 |         <Skeleton className="h-7 w-12" />
92 |       </div>
93 |     </div>
94 |   );
95 | };
96 | 


--------------------------------------------------------------------------------
/prisma/schema.prisma:
--------------------------------------------------------------------------------
 1 | // This is your Prisma schema file,
 2 | // learn more about it in the docs: https://pris.ly/d/prisma-schema
 3 | 
 4 | // Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
 5 | // Try Prisma Accelerate: https://pris.ly/cli/accelerate-init
 6 | 
 7 | generator client {
 8 |   provider = "prisma-client-js"
 9 | }
10 | 
11 | datasource db {
12 |   provider = "postgresql"
13 |   url      = env("DATABASE_URL")
14 | }
15 | 
16 | 
17 | //The `dataSource` property `url` is no longer supported in schema files. Move connection URLs for Migrate to `prisma.config.ts` and pass either `adapter` for a direct database connection or `accelerateUrl` for accelerate to the `PrismaClient` constructor. 
18 | 
19 | 
20 | model User{
21 |   id String @id @default(uuid())
22 |   username String @unique
23 |   imageUrl String 
24 |   externalUserId String @unique
25 |   bio String? 
26 |   
27 |   following Follow[] @relation("Following")
28 |   followedBy Follow[] @relation("FollowedBy")
29 |   createdAt DateTime @default(now())
30 |   updatedAt DateTime @updatedAt
31 |   blocking       Block[]  @relation(name: "Blocking")
32 |   blockedby      Block[]  @relation(name: "BlockedBy")
33 |   stream         Stream?
34 | }
35 | 
36 | model Follow {
37 |   id String @id @default(uuid())
38 |   followerId String
39 |   followingId String
40 | 
41 |   follower User @relation(name: "Following", fields: [followerId], references: [id], onDelete: Cascade)
42 |   following User @relation(name: "FollowedBy", fields: [followingId], references: [id], onDelete: Cascade)
43 | 
44 |   createdAt DateTime @default(now())
45 |   updatedAt DateTime @updatedAt
46 | 
47 |   @@unique([followerId, followingId])
48 | 
49 |   @@index([followerId])
50 |   @@index([followingId])
51 | }  
52 | 
53 | model Block {
54 |   id        String @id @default(uuid())
55 |   blockerId String
56 |   blockedId String
57 | 
58 |   blocker User @relation(name: "Blocking", fields: [blockerId], references: [id], onDelete: Cascade)
59 |   blocked User @relation(name: "BlockedBy", fields: [blockedId], references: [id], onDelete: Cascade)
60 | 
61 |   createdAt DateTime @default(now())
62 |   updatedAt DateTime @updatedAt
63 | 
64 |   @@unique([blockerId, blockedId])
65 |   @@index([blockerId])
66 |   @@index([blockedId])
67 | }
68 | 
69 | 
70 | model Stream {
71 |   id String @id @default(uuid())
72 | 
73 |   title               String
74 |   thumbnail           String?
75 |   ingressId           String? @unique
76 |   serverUrl           String?
77 |   streamKey           String?
78 | 
79 |   isLive              Boolean @default(false)
80 |   isChatEnabled       Boolean @default(true)
81 |   isChatDelayed       Boolean @default(false)
82 |   isChatFollowersOnly Boolean @default(false)
83 | 
84 |   userId String @unique
85 |   user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)
86 | 
87 |   createdAt DateTime @default(now())
88 |   updatedAt DateTime @updatedAt
89 | }


--------------------------------------------------------------------------------
/actions/ingress.ts:
--------------------------------------------------------------------------------
  1 | "use server";
  2 | 
  3 | import {
  4 |   IngressAudioEncodingPreset,
  5 |   IngressInput,
  6 |   IngressClient,
  7 |   IngressVideoEncodingPreset,
  8 |   IngressVideoOptions,
  9 |   IngressAudioOptions,
 10 |   RoomServiceClient,
 11 |   type CreateIngressOptions,
 12 |   TrackSource,
 13 | } from "livekit-server-sdk";
 14 | 
 15 | import { db } from "@/lib/db";
 16 | import { getSelf } from "@/lib/auth-service";
 17 | import { revalidatePath } from "next/cache";
 18 | 
 19 | const roomService = new RoomServiceClient(
 20 |   process.env.LIVEKIT_API_URL!,
 21 |   process.env.LIVEKIT_API_KEY!,
 22 |   process.env.LIVEKIT_API_SECRET!
 23 | );
 24 | 
 25 | const ingressClient = new IngressClient(
 26 |   process.env.LIVEKIT_API_URL!,
 27 |   process.env.LIVEKIT_API_KEY!,
 28 |   process.env.LIVEKIT_API_SECRET!
 29 | );
 30 | 
 31 | export const resetIngresses = async (hostIdentity: string) => {
 32 |   const ingresses = await ingressClient.listIngress({
 33 |     roomName: hostIdentity,
 34 |   });
 35 | 
 36 |   const rooms = await roomService.listRooms([hostIdentity]);
 37 | 
 38 |   for (const room of rooms) {
 39 |     await roomService.deleteRoom(room.name);
 40 |   }
 41 | 
 42 |   for (const ingress of ingresses) {
 43 |     if (ingress.ingressId) {
 44 |       await ingressClient.deleteIngress(ingress.ingressId);
 45 |     }
 46 |   }
 47 | };
 48 | 
 49 | export const createIngress = async (ingressType: IngressInput) => {
 50 |   const self = await getSelf();
 51 |   if (!self) return false;
 52 | 
 53 |   await resetIngresses(self.id);
 54 | 
 55 |   const options: CreateIngressOptions = {
 56 |     name: self.username,
 57 |     roomName: self.id,
 58 |     participantName: self.username,
 59 |     participantIdentity: self.id,
 60 |   };
 61 | 
 62 |   if (ingressType === IngressInput.WHIP_INPUT) {
 63 |     options.bypassTranscoding = true;
 64 |   } else {
 65 |     options.video = new IngressVideoOptions({
 66 |       source: TrackSource.CAMERA,
 67 |       encodingOptions: {
 68 |         case: "preset",
 69 |         value: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
 70 |       },
 71 |     });
 72 |     options.audio = new IngressAudioOptions({
 73 |       source: TrackSource.MICROPHONE,
 74 |       encodingOptions: {
 75 |         case: "preset",
 76 |         value: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
 77 |       },
 78 |     });
 79 |   }
 80 | 
 81 |   const ingress = await ingressClient.createIngress(ingressType, options);
 82 | 
 83 |   if (!ingress || !ingress.url || !ingress.streamKey) {
 84 |     throw new Error("Failed to create ingress");
 85 |   }
 86 | 
 87 |   await db.stream.update({
 88 |     where: { userId: self.id },
 89 |     data: {
 90 |       ingressId: ingress.ingressId,
 91 |       serverUrl: ingress.url,
 92 |       streamKey: ingress.streamKey,
 93 |     },
 94 |   });
 95 | 
 96 |   revalidatePath(`/u/${self.username}/keys`);
 97 |   return {
 98 |   ingressId: ingress.ingressId,
 99 |   url: ingress.url,
100 |   streamKey: ingress.streamKey,
101 | };
102 | };


--------------------------------------------------------------------------------
/components/stream-player/header.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { UserIcon } from "lucide-react";
 4 | import {
 5 |   useParticipants,
 6 |   useRemoteParticipant,
 7 | } from "@livekit/components-react";
 8 | 
 9 | import { Skeleton } from "@/components/ui/skeleton";
10 | import { VerifiedMark } from "@/components/verified-mark";
11 | import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
12 | 
13 | import { Actions, ActionsSkeleton } from "./actions";
14 | 
15 | interface HeaderProps {
16 |   imageUrl: string;
17 |   hostName: string;
18 |   hostIdentity: string;
19 |   viewerIdentity: string;
20 |   isFollowing: boolean;
21 |   name: string;
22 | }
23 | 
24 | export const Header = ({
25 |   imageUrl,
26 |   hostName,
27 |   hostIdentity,
28 |   viewerIdentity,
29 |   isFollowing,
30 |   name,
31 | }: HeaderProps) => {
32 |   const participants = useParticipants();
33 |   const participant = useRemoteParticipant(hostIdentity);
34 | 
35 |   const isLive = !!participant;
36 |   const participantCount = participants.length - 1;
37 | 
38 |   const hostAsViewer = `Host-${hostIdentity}`;
39 |   const isHost = viewerIdentity === hostAsViewer;
40 | 
41 |   return (
42 |     <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
43 |       <div className="flex items-center gap-x-3">
44 |         <UserAvatar
45 |           imageUrl={imageUrl}
46 |           username={hostName}
47 |           size="lg"
48 |           isLive={isLive}
49 |           showBadge
50 |         />
51 |         <div className="space-y-1">
52 |           <div className="flex items-center gap-x-2">
53 |             <h2 className="text-lg font-semibold">{hostName}</h2>
54 |             <VerifiedMark />
55 |           </div>
56 |           <p className="text-sm font-semibold">{name}</p>
57 |           {isLive ? (
58 |             <div className="font-semibold flex gap-x-1 items-center text-xs text-rose-500">
59 |               <UserIcon className="h-4 w-4" />
60 |               <p>
61 |                 {participantCount}{" "}
62 |                 {participantCount === 1 ? "viewer" : "viewers"}
63 |               </p>
64 |             </div>
65 |           ) : (
66 |             <p className="font-semibold text-xs text-muted-foreground">
67 |               Offline
68 |             </p>
69 |           )}
70 |         </div>
71 |       </div>
72 |       <Actions
73 |         isFollowing={isFollowing}
74 |         hostIdentity={hostIdentity}
75 |         isHost={isHost}
76 |       />
77 |     </div>
78 |   );
79 | };
80 | 
81 | export const HeaderSkeleton = () => {
82 |   return (
83 |     <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
84 |       <div className="flex items-center gap-x-2">
85 |         <UserAvatarSkeleton size="lg" />
86 |         <div className="space-y-2">
87 |           <Skeleton className="h-6 w-32" />
88 |           <Skeleton className="h-4 w-24" />
89 |         </div>
90 |       </div>
91 |       <ActionsSkeleton />
92 |     </div>
93 |   );
94 | };
95 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/keys/_components/connect-modal.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { toast } from "sonner";
 4 | import { useState, useTransition, useRef, ElementRef } from "react";
 5 | import { AlertTriangle } from "lucide-react";
 6 | import { IngressInput } from "livekit-server-sdk";
 7 | 
 8 | import { createIngress } from "@/actions/ingress";
 9 | import { Button } from "@/components/ui/button";
10 | import {
11 |   Dialog,
12 |   DialogClose,
13 |   DialogContent,
14 |   DialogHeader,
15 |   DialogTitle,
16 |   DialogTrigger,
17 | } from "@/components/ui/dialog";
18 | import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
19 | import {
20 |   Select,
21 |   SelectContent,
22 |   SelectItem,
23 |   SelectTrigger,
24 |   SelectValue,
25 | } from "@/components/ui/select";
26 | 
27 | const RTMP = String(IngressInput.RTMP_INPUT);
28 | const WHIP = String(IngressInput.WHIP_INPUT);
29 | 
30 | type IngressType = typeof RTMP | typeof WHIP;
31 | 
32 | export const ConnectModal = () => {
33 |   const closeRef = useRef<ElementRef<"button">>(null);
34 |   const [isPending, startTransition] = useTransition();
35 |   const [ingressType, setIngressType] = useState<IngressType>(RTMP);
36 | 
37 |   const onSubmit = () => {
38 |     startTransition(() => {
39 |       createIngress(parseInt(ingressType))
40 |         .then(() => {
41 |           toast.success("Ingress created");
42 |           closeRef?.current?.click();
43 |         })
44 |         .catch(() => toast.error("Something went wrong"));
45 |     });
46 |   };
47 | 
48 |   return (
49 |     <Dialog>
50 |       <DialogTrigger asChild>
51 |         <Button variant="primary">Generate connection</Button>
52 |       </DialogTrigger>
53 |       <DialogContent>
54 |         <DialogHeader>
55 |           <DialogTitle>Generate connection</DialogTitle>
56 |         </DialogHeader>
57 |         <Select
58 |           disabled={isPending}
59 |           value={ingressType}
60 |           onValueChange={(value) => setIngressType(value)}
61 |         >
62 |           <SelectTrigger className="w-full">
63 |             <SelectValue placeholder="Ingress Type" />
64 |           </SelectTrigger>
65 |           <SelectContent>
66 |             <SelectItem value={RTMP}>RTMP</SelectItem>
67 |             <SelectItem value={WHIP}>WHIP</SelectItem>
68 |           </SelectContent>
69 |         </Select>
70 |         <Alert>
71 |           <AlertTriangle className="h-4 w-4" />
72 |           <AlertTitle>Warning!</AlertTitle>
73 |           <AlertDescription>
74 |             This action will reset all active streams using the current
75 |             connection
76 |           </AlertDescription>
77 |         </Alert>
78 |         <div className="flex justify-between">
79 |           <DialogClose ref={closeRef} asChild>
80 |             <Button variant="ghost">Cancel</Button>
81 |           </DialogClose>
82 |           <Button disabled={isPending} onClick={onSubmit} variant="primary">
83 |             Generate
84 |           </Button>
85 |         </div>
86 |       </DialogContent>
87 |     </Dialog>
88 |   );
89 | };
90 | 


--------------------------------------------------------------------------------
/components/ui/table.tsx:
--------------------------------------------------------------------------------
  1 | "use client"
  2 | 
  3 | import * as React from "react"
  4 | 
  5 | import { cn } from "@/lib/utils"
  6 | 
  7 | function Table({ className, ...props }: React.ComponentProps<"table">) {
  8 |   return (
  9 |     <div
 10 |       data-slot="table-container"
 11 |       className="relative w-full overflow-x-auto"
 12 |     >
 13 |       <table
 14 |         data-slot="table"
 15 |         className={cn("w-full caption-bottom text-sm", className)}
 16 |         {...props}
 17 |       />
 18 |     </div>
 19 |   )
 20 | }
 21 | 
 22 | function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
 23 |   return (
 24 |     <thead
 25 |       data-slot="table-header"
 26 |       className={cn("[&_tr]:border-b", className)}
 27 |       {...props}
 28 |     />
 29 |   )
 30 | }
 31 | 
 32 | function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
 33 |   return (
 34 |     <tbody
 35 |       data-slot="table-body"
 36 |       className={cn("[&_tr:last-child]:border-0", className)}
 37 |       {...props}
 38 |     />
 39 |   )
 40 | }
 41 | 
 42 | function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
 43 |   return (
 44 |     <tfoot
 45 |       data-slot="table-footer"
 46 |       className={cn(
 47 |         "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
 48 |         className
 49 |       )}
 50 |       {...props}
 51 |     />
 52 |   )
 53 | }
 54 | 
 55 | function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
 56 |   return (
 57 |     <tr
 58 |       data-slot="table-row"
 59 |       className={cn(
 60 |         "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
 61 |         className
 62 |       )}
 63 |       {...props}
 64 |     />
 65 |   )
 66 | }
 67 | 
 68 | function TableHead({ className, ...props }: React.ComponentProps<"th">) {
 69 |   return (
 70 |     <th
 71 |       data-slot="table-head"
 72 |       className={cn(
 73 |         "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
 74 |         className
 75 |       )}
 76 |       {...props}
 77 |     />
 78 |   )
 79 | }
 80 | 
 81 | function TableCell({ className, ...props }: React.ComponentProps<"td">) {
 82 |   return (
 83 |     <td
 84 |       data-slot="table-cell"
 85 |       className={cn(
 86 |         "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
 87 |         className
 88 |       )}
 89 |       {...props}
 90 |     />
 91 |   )
 92 | }
 93 | 
 94 | function TableCaption({
 95 |   className,
 96 |   ...props
 97 | }: React.ComponentProps<"caption">) {
 98 |   return (
 99 |     <caption
100 |       data-slot="table-caption"
101 |       className={cn("mt-4 text-sm text-muted-foreground", className)}
102 |       {...props}
103 |     />
104 |   )
105 | }
106 | 
107 | export {
108 |   Table,
109 |   TableHeader,
110 |   TableBody,
111 |   TableFooter,
112 |   TableHead,
113 |   TableRow,
114 |   TableCell,
115 |   TableCaption,
116 | }
117 | 


--------------------------------------------------------------------------------
/lib/block-service.ts:
--------------------------------------------------------------------------------
  1 | import { db } from "@/lib/db";
  2 | import { getSelf } from "@/lib/auth-service";
  3 | 
  4 | /**
  5 |  * Check if current user is blocked by another user
  6 |  */
  7 | export const isBlockedByUser = async (id: string) => {
  8 |   const self = await getSelf();
  9 | 
 10 |   // If not logged in → cannot be blocked
 11 |   if (!self) return false;
 12 | 
 13 |   // Cannot block yourself
 14 |   if (self.id === id) return false;
 15 | 
 16 |   const existingBlock = await db.block.findUnique({
 17 |     where: {
 18 |       blockerId_blockedId: {
 19 |         blockerId: id,
 20 |         blockedId: self.id,
 21 |       },
 22 |     },
 23 |   });
 24 | 
 25 |   return !!existingBlock;
 26 | };
 27 | 
 28 | /**
 29 |  * Block a user
 30 |  */
 31 | export const blockUser = async (id: string) => {
 32 |   const self = await getSelf();
 33 | 
 34 |   if (!self) {
 35 |     throw new Error("Unauthorized");
 36 |   }
 37 | 
 38 |   if (self.id === id) {
 39 |     throw new Error("You cannot block yourself");
 40 |   }
 41 | 
 42 |   const otherUser = await db.user.findUnique({
 43 |     where: { id },
 44 |   });
 45 | 
 46 |   if (!otherUser) {
 47 |     throw new Error("User not found");
 48 |   }
 49 | 
 50 |   const existingBlock = await db.block.findUnique({
 51 |     where: {
 52 |       blockerId_blockedId: {
 53 |         blockerId: self.id,
 54 |         blockedId: otherUser.id,
 55 |       },
 56 |     },
 57 |   });
 58 | 
 59 |   if (existingBlock) {
 60 |     throw new Error("Already blocked");
 61 |   }
 62 | 
 63 |   const block = await db.block.create({
 64 |     data: {
 65 |       blockerId: self.id,
 66 |       blockedId: otherUser.id,
 67 |     },
 68 |     include: {
 69 |       blocked: true,
 70 |     },
 71 |   });
 72 | 
 73 |   return block;
 74 | };
 75 | 
 76 | /**
 77 |  * Unblock a user
 78 |  */
 79 | export const unblockUser = async (id: string) => {
 80 |   const self = await getSelf();
 81 | 
 82 |   if (!self) {
 83 |     throw new Error("Unauthorized");
 84 |   }
 85 | 
 86 |   if (self.id === id) {
 87 |     throw new Error("Cannot unblock yourself");
 88 |   }
 89 | 
 90 |   const existingBlock = await db.block.findUnique({
 91 |     where: {
 92 |       blockerId_blockedId: {
 93 |         blockerId: self.id,
 94 |         blockedId: id,
 95 |       },
 96 |     },
 97 |   });
 98 | 
 99 |   if (!existingBlock) {
100 |     throw new Error("User is not blocked");
101 |   }
102 | 
103 |   const unblock = await db.block.delete({
104 |     where: {
105 |       blockerId_blockedId: {
106 |         blockerId: self.id,
107 |         blockedId: id,
108 |       },
109 |     },
110 |     include: {
111 |       blocked: true,
112 |     },
113 |   });
114 | 
115 |   return unblock;
116 | };
117 | 
118 | /**
119 |  * Get all blocked users for current user
120 |  */
121 | export const getBlockedUsers = async () => {
122 |   const self = await getSelf();
123 | 
124 |   if (!self) {
125 |     throw new Error("Unauthorized");
126 |   }
127 | 
128 |   const blockedUsers = await db.block.findMany({
129 |     where: {
130 |       blockerId: self.id,
131 |     },
132 |     include: {
133 |       blocked: true,
134 |     },
135 |     orderBy: {
136 |       createdAt: "desc",
137 |     },
138 |   });
139 | 
140 |   return blockedUsers;
141 | };


--------------------------------------------------------------------------------
/components/stream-player/chat.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { useEffect, useMemo, useState } from "react";
  4 | import { ConnectionState } from "livekit-client";
  5 | import { useMediaQuery } from "usehooks-ts";
  6 | import {
  7 |   useChat,
  8 |   useConnectionState,
  9 |   useRemoteParticipant,
 10 | } from "@livekit/components-react";
 11 | 
 12 | import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";
 13 | 
 14 | import { ChatForm, ChatFormSkeleton } from "./chat-form";
 15 | import { ChatList, ChatListSkeleton } from "./chat-list";
 16 | import { ChatHeader, ChatHeaderSkeleton } from "./cheat-header";
 17 | import { ChatCommunity } from "./chat-community";
 18 | 
 19 | interface ChatProps {
 20 |   hostName: string;
 21 |   hostIdentity: string;
 22 |   viewerName: string;
 23 |   isFollowing: boolean;
 24 |   isChatEnabled: boolean;
 25 |   isChatDelayed: boolean;
 26 |   isChatFollowersOnly: boolean;
 27 | }
 28 | 
 29 | export const Chat = ({
 30 |   hostName,
 31 |   hostIdentity,
 32 |   viewerName,
 33 |   isFollowing,
 34 |   isChatEnabled,
 35 |   isChatDelayed,
 36 |   isChatFollowersOnly,
 37 | }: ChatProps) => {
 38 |   const matches = useMediaQuery("(max-width: 1024px)");
 39 |   const { variant, onExpand } = useChatSidebar((state) => state);
 40 |   const connectionState = useConnectionState();
 41 |   const participant = useRemoteParticipant(hostIdentity);
 42 | 
 43 |   const isOnline = participant && connectionState === ConnectionState.Connected;
 44 | 
 45 |   const isHidden = !isChatEnabled || !isOnline;
 46 | 
 47 |   const [value, setValue] = useState("");
 48 |   const { chatMessages: messages, send } = useChat();
 49 | 
 50 |   useEffect(() => {
 51 |     if (matches) {
 52 |       onExpand();
 53 |     }
 54 |   }, [matches, onExpand]);
 55 | 
 56 |   const reversedMessages = useMemo(() => {
 57 |     return messages.sort((a, b) => b.timestamp - a.timestamp);
 58 |   }, [messages]);
 59 | 
 60 |   const onSubmit = () => {
 61 |     if (!send) return;
 62 | 
 63 |     send(value);
 64 |     setValue("");
 65 |   };
 66 | 
 67 |   const onChange = (value: string) => {
 68 |     setValue(value);
 69 |   };
 70 | 
 71 |   return (
 72 |     <div className="flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)]">
 73 |       <ChatHeader />
 74 |       {variant === ChatVariant.CHAT && (
 75 |         <>
 76 |           <ChatList messages={reversedMessages} isHidden={isHidden} />
 77 |           <ChatForm
 78 |             onSubmit={onSubmit}
 79 |             value={value}
 80 |             onChange={onChange}
 81 |             isHidden={isHidden}
 82 |             isFollowersOnly={isChatFollowersOnly}
 83 |             isDelayed={isChatDelayed}
 84 |             isFollowing={isFollowing}
 85 |           />
 86 |         </>
 87 |       )}
 88 |       {variant === ChatVariant.COMMUNITY && (
 89 |         <ChatCommunity
 90 |           viewerName={viewerName}
 91 |           hostName={hostName}
 92 |           isHidden={isHidden}
 93 |         />
 94 |       )}
 95 |     </div>
 96 |   );
 97 | };
 98 | 
 99 | export const ChatSkeleton = () => {
100 |   return (
101 |     <div className="flex flex-col border-l border-b pt-0 h-[calc(100vh-80px)] border-2">
102 |       <ChatHeaderSkeleton />
103 |       <ChatListSkeleton />
104 |       <ChatFormSkeleton />
105 |     </div>
106 |   );
107 | };
108 | 


--------------------------------------------------------------------------------
/components/ui/avatar.tsx:
--------------------------------------------------------------------------------
  1 | "use client"
  2 | 
  3 | import * as React from "react"
  4 | import { Avatar as AvatarPrimitive } from "radix-ui"
  5 | 
  6 | import { cn } from "@/lib/utils"
  7 | 
  8 | function Avatar({
  9 |   className,
 10 |   size = "default",
 11 |   ...props
 12 | }: React.ComponentProps<typeof AvatarPrimitive.Root> & {
 13 |   size?: "default" | "sm" | "lg"
 14 | }) {
 15 |   return (
 16 |     <AvatarPrimitive.Root
 17 |       data-slot="avatar"
 18 |       data-size={size}
 19 |       className={cn(
 20 |         "group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6",
 21 |         className
 22 |       )}
 23 |       {...props}
 24 |     />
 25 |   )
 26 | }
 27 | 
 28 | function AvatarImage({
 29 |   className,
 30 |   ...props
 31 | }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
 32 |   return (
 33 |     <AvatarPrimitive.Image
 34 |       data-slot="avatar-image"
 35 |       className={cn("aspect-square size-full", className)}
 36 |       {...props}
 37 |     />
 38 |   )
 39 | }
 40 | 
 41 | function AvatarFallback({
 42 |   className,
 43 |   ...props
 44 | }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
 45 |   return (
 46 |     <AvatarPrimitive.Fallback
 47 |       data-slot="avatar-fallback"
 48 |       className={cn(
 49 |         "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
 50 |         className
 51 |       )}
 52 |       {...props}
 53 |     />
 54 |   )
 55 | }
 56 | 
 57 | function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
 58 |   return (
 59 |     <span
 60 |       data-slot="avatar-badge"
 61 |       className={cn(
 62 |         "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
 63 |         "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
 64 |         "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
 65 |         "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
 66 |         className
 67 |       )}
 68 |       {...props}
 69 |     />
 70 |   )
 71 | }
 72 | 
 73 | function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
 74 |   return (
 75 |     <div
 76 |       data-slot="avatar-group"
 77 |       className={cn(
 78 |         "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
 79 |         className
 80 |       )}
 81 |       {...props}
 82 |     />
 83 |   )
 84 | }
 85 | 
 86 | function AvatarGroupCount({
 87 |   className,
 88 |   ...props
 89 | }: React.ComponentProps<"div">) {
 90 |   return (
 91 |     <div
 92 |       data-slot="avatar-group-count"
 93 |       className={cn(
 94 |         "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
 95 |         className
 96 |       )}
 97 |       {...props}
 98 |     />
 99 |   )
100 | }
101 | 
102 | export {
103 |   Avatar,
104 |   AvatarImage,
105 |   AvatarFallback,
106 |   AvatarBadge,
107 |   AvatarGroup,
108 |   AvatarGroupCount,
109 | }
110 | 


--------------------------------------------------------------------------------
/lib/follow-service.ts:
--------------------------------------------------------------------------------
  1 | import { getSelf } from "./auth-service";
  2 | import { db } from "./db";
  3 | 
  4 | export const isFollowingUser = async (id: string) => {
  5 |   try {
  6 |     const self = await getSelf();
  7 | 
  8 |     if (!self) {
  9 |       throw new Error("Unauthorized");
 10 |     }
 11 | 
 12 |     const otherUser = await db.user.findUnique({
 13 |       where: { id },
 14 |     });
 15 | 
 16 |     if (!otherUser) {
 17 |       throw new Error("User not found");
 18 |     }
 19 | 
 20 |     if (otherUser.id === self.id) {
 21 |       return true;
 22 |     }
 23 | 
 24 |     const existingFollow = await db.follow.findFirst({
 25 |       where: {
 26 |         followerId: self.id,
 27 |         followingId: otherUser.id,
 28 |       },
 29 |     });
 30 | 
 31 |     return !!existingFollow;
 32 |   } catch {
 33 |     return false;
 34 |   }
 35 | };
 36 | 
 37 | export const followUser = async (id: string) => {
 38 |   const self = await getSelf();
 39 | 
 40 |   if (!self) {
 41 |     throw new Error("Unauthorized");
 42 |   }
 43 | 
 44 |   const otherUser = await db.user.findUnique({
 45 |     where: { id },
 46 |   });
 47 | 
 48 |   if (!otherUser) {
 49 |     throw new Error("User not found");
 50 |   }
 51 | 
 52 |   if (otherUser.id === self.id) {
 53 |     throw new Error("Cannot follow yourself");
 54 |   }
 55 | 
 56 |   const existingFollow = await db.follow.findFirst({
 57 |     where: {
 58 |       followerId: self.id,
 59 |       followingId: otherUser.id,
 60 |     },
 61 |   });
 62 | 
 63 |   if (existingFollow) {
 64 |     throw new Error("Already following this user");
 65 |   }
 66 | 
 67 |   const follow = await db.follow.create({
 68 |     data: {
 69 |       followerId: self.id,
 70 |       followingId: otherUser.id,
 71 |     },
 72 |     include: {
 73 |       follower: true,
 74 |       following: true,
 75 |     },
 76 |   });
 77 | 
 78 |   return follow;
 79 | };
 80 | 
 81 | export const unfollowUser = async (id: string) => {
 82 |   const self = await getSelf();
 83 | 
 84 |   if (!self) {
 85 |     throw new Error("Unauthorized");
 86 |   }
 87 | 
 88 |   const otherUser = await db.user.findUnique({
 89 |     where: {
 90 |       id,
 91 |     },
 92 |   });
 93 | 
 94 |   if (!otherUser) {
 95 |     throw new Error("User not found");
 96 |   }
 97 | 
 98 |   if (otherUser.id === self.id) {
 99 |     throw new Error("can not unfollow yourself");
100 |   }
101 | 
102 |   const existingFollow = await db.follow.findFirst({
103 |     where: {
104 |       followerId: self.id,
105 |       followingId: otherUser.id,
106 |     },
107 |   });
108 | 
109 |   if (!existingFollow) {
110 |     throw new Error("Not Following");
111 |   }
112 | 
113 |   const follow = await db.follow.delete({
114 |     where: {
115 |       id: existingFollow.id,
116 |     },
117 |     include: {
118 |       following: true,
119 |     },
120 |   });
121 |   return follow;
122 | };
123 | 
124 | export const getFollowedUsers = async () => {
125 |   try {
126 |     const self = await getSelf();
127 | 
128 |     if (!self) {
129 |       throw new Error("Unauthorized");
130 |     } 
131 | 
132 |     const followedUsers = db.follow.findMany({
133 |       where: {
134 |         followerId: self.id,
135 |         following: {
136 |           blocking: {
137 |             none: {
138 |               blockerId: self.id
139 |             }
140 |           }
141 |         }
142 |       },
143 |       include: {
144 |         following: {
145 |           include: {
146 |             stream: {
147 |               select: {
148 |                 isLive: true,
149 |               },
150 |             },
151 |           },
152 |         },
153 |       },
154 |     });
155 |     return followedUsers;
156 |   } catch {
157 |     return [];
158 |   }
159 | };
160 | 


--------------------------------------------------------------------------------
/components/stream-player/live-video.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { useRef, useState, useEffect } from "react";
  4 | import { Participant, Track } from "livekit-client";
  5 | import { useTracks } from "@livekit/components-react";
  6 | 
  7 | import { VolumeControl } from "./volume-control";
  8 | import { FullscreenControl } from "./fullscreen-control";
  9 | 
 10 | interface LiveVideoProps {
 11 |   participant: Participant;
 12 | }
 13 | 
 14 | export const LiveVideo = ({ participant }: LiveVideoProps) => {
 15 |   const videoRef = useRef<HTMLVideoElement>(null);
 16 |   const wrapperRef = useRef<HTMLDivElement>(null);
 17 | 
 18 |   const [isFullscreen, setIsFullscreen] = useState(false);
 19 |  const [volume, setVolume] = useState(0);
 20 | 
 21 | 
 22 |   //  Volume change
 23 |   const onVolumeChange = (value: number) => {
 24 |     setVolume(value);
 25 | 
 26 |     if (videoRef.current) {
 27 |       videoRef.current.muted = value === 0;
 28 |       videoRef.current.volume = value * 0.01;
 29 |     }
 30 |   };
 31 | 
 32 |   //  Toggle mute
 33 |   const toggleMute = () => {
 34 |     const isMuted = volume === 0;
 35 | 
 36 |     const newVolume = isMuted ? 50 : 0;
 37 |     setVolume(newVolume);
 38 | 
 39 |     if (videoRef.current) {
 40 |       videoRef.current.muted = !isMuted;
 41 |       videoRef.current.volume = isMuted ? 0.5 : 0;
 42 |     }
 43 |   };
 44 | 
 45 |   //  Default volume = muted
 46 | 
 47 | useEffect(() => {
 48 |   if (!videoRef.current) return;
 49 | 
 50 |   videoRef.current.muted = volume === 0;
 51 |   videoRef.current.volume = volume * 0.01;
 52 | }, [volume]);
 53 | 
 54 |   // 🖥️ Fullscreen toggle
 55 |   const toggleFullscreen = () => {
 56 |     if (document.fullscreenElement) {
 57 |       document.exitFullscreen();
 58 |     } else if (wrapperRef.current) {
 59 |       wrapperRef.current.requestFullscreen();
 60 |     }
 61 |   };
 62 | 
 63 |   //  Fullscreen listener (FIXED)
 64 |   useEffect(() => {
 65 |     const handleFullscreenChange = () => {
 66 |       setIsFullscreen(document.fullscreenElement !== null);
 67 |     };
 68 | 
 69 |     document.addEventListener("fullscreenchange", handleFullscreenChange);
 70 | 
 71 |     return () => {
 72 |       document.removeEventListener("fullscreenchange", handleFullscreenChange);
 73 |     };
 74 |   }, []);
 75 | 
 76 |   // 🎥 LiveKit tracks handling (FIXED)
 77 |   const tracks = useTracks([
 78 |     Track.Source.Camera,
 79 |     Track.Source.Microphone,
 80 |   ]);
 81 | 
 82 |   useEffect(() => {
 83 |     const participantTracks = tracks.filter(
 84 |       (track) => track.participant.identity === participant.identity
 85 |     );
 86 | 
 87 |     participantTracks.forEach((track) => {
 88 |       if (videoRef.current) {
 89 |         track.publication.track?.attach(videoRef.current);
 90 |       }
 91 |     });
 92 | 
 93 |     // cleanup (VERY IMPORTANT)
 94 |     return () => {
 95 |       participantTracks.forEach((track) => {
 96 |         track.publication.track?.detach();
 97 |       });
 98 |     };
 99 |   }, [tracks, participant.identity]);
100 | 
101 |   return (
102 |     <div ref={wrapperRef} className="relative h-full flex">
103 |       <video ref={videoRef} width="100%" />
104 | 
105 |       {/* Controls Overlay */}
106 |       <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 transition-opacity">
107 |         <div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-linear-to-r from-neutral-900 px-4">
108 |           <VolumeControl
109 |             onChange={onVolumeChange}
110 |             value={volume}
111 |             onToggle={toggleMute}
112 |           />
113 | 
114 |           <FullscreenControl
115 |             isFullscreen={isFullscreen}
116 |             onToggle={toggleFullscreen}
117 |           />
118 |         </div>
119 |       </div>
120 |     </div>
121 |   );
122 | };


--------------------------------------------------------------------------------
/components/stream-player/index.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { Stream, User } from "@prisma/client";
  4 | import { LiveKitRoom } from "@livekit/components-react";
  5 | import { cn } from "@/lib/utils";
  6 | import { useChatSidebar } from "@/store/use-chat-sidebar";
  7 | import { useViewerToken } from "@/hooks/use-viewer-token";
  8 | import { InfoCard } from "./info-card";
  9 | import { AboutCard } from "./about-card";
 10 | import { ChatToggle } from "./chat-toggle";
 11 | import { Chat, ChatSkeleton } from "./chat";
 12 | import { Video, VideoSkeleton } from "./video";
 13 | import { Header, HeaderSkeleton } from "./header";
 14 | 
 15 | type CustomStream = {
 16 |   id: string;
 17 |   isChatEnabled: boolean;
 18 |   isChatDelayed: boolean;
 19 |   isChatFollowersOnly: boolean;
 20 |   isLive: boolean;
 21 |   thumbnail: string | null;
 22 |   title: string;
 23 | };
 24 | 
 25 | type CustomUser = {
 26 |   id: string;
 27 |   username: string;
 28 |   bio: string | null;
 29 |   stream: CustomStream | null;
 30 |   imageUrl: string;
 31 |   _count: { followedBy: number };
 32 | };
 33 | 
 34 | interface StreamPlayerProps {
 35 |   user: CustomUser;
 36 |   stream: CustomStream;
 37 |   isFollowing: boolean;
 38 | }
 39 | 
 40 | export const StreamPlayer = ({
 41 |   user,
 42 |   stream,
 43 |   isFollowing,
 44 | }: StreamPlayerProps) => {
 45 |   const { token, name, identity } = useViewerToken(user.id);
 46 |   const { collapsed } = useChatSidebar((state) => state);
 47 | 
 48 |   if (!token || !name || !identity) {
 49 |     return <StreamPlayerSkeleton />;
 50 |   }
 51 |   return (
 52 |     <>
 53 |       {collapsed && (
 54 |         <div className="hidden lg:block fixed top-25 right-2 z-50">
 55 |           <ChatToggle />
 56 |         </div>
 57 |       )}
 58 |       <LiveKitRoom
 59 |         token={token}
 60 |         serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL!}
 61 |         className={cn(
 62 |           "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full",
 63 |           collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
 64 |         )}
 65 |       >
 66 |         <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
 67 |           <Video hostName={user.username} hostIdentity={user.id} />
 68 |           <Header
 69 |             hostName={user.username}
 70 |             hostIdentity={user.id}
 71 |             viewerIdentity={identity}
 72 |             imageUrl={user.imageUrl}
 73 |             isFollowing={isFollowing}
 74 |             name={stream.title}
 75 |           />
 76 |           <InfoCard
 77 |             hostIdentity={user.id}
 78 |             viewerIdentity={identity}
 79 |             name={stream.title}
 80 |             thumbnailUrl={stream.thumbnail}
 81 |           />
 82 |           <AboutCard
 83 |             hostName={user.username}
 84 |             hostIdentity={user.id}
 85 |             viewerIdentity={identity}
 86 |             bio={user.bio}
 87 |             followedByCount={user._count.followedBy}
 88 |           />
 89 |         </div>
 90 |         <div className={cn("col-span-1", collapsed && "hidden")}>
 91 |           <Chat
 92 |             viewerName={name}
 93 |             hostName={user.username}
 94 |             hostIdentity={user.id}
 95 |             isFollowing={isFollowing}
 96 |             isChatEnabled={stream.isChatEnabled}
 97 |             isChatDelayed={stream.isChatDelayed}
 98 |             isChatFollowersOnly={stream.isChatFollowersOnly}
 99 |           />
100 |         </div>
101 |       </LiveKitRoom>
102 |     </>
103 |   );
104 | };
105 | 
106 | export const StreamPlayerSkeleton = () => {
107 |   return (
108 |     <div className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full">
109 |       <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
110 |         <VideoSkeleton />
111 |         <HeaderSkeleton />
112 |       </div>
113 |       <div className="col-span-1 bg-background">
114 |         <ChatSkeleton />
115 |       </div>
116 |     </div>
117 |   );
118 | };
119 | 


--------------------------------------------------------------------------------
/app/(dashboard)/u/[username]/community/_components/data-table.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import * as React from "react";
  4 | import {
  5 |   ColumnDef,
  6 |   ColumnFiltersState,
  7 |   SortingState,
  8 |   flexRender,
  9 |   getCoreRowModel,
 10 |   getFilteredRowModel,
 11 |   getPaginationRowModel,
 12 |   getSortedRowModel,
 13 |   useReactTable,
 14 | } from "@tanstack/react-table";
 15 | 
 16 | import {
 17 |   Table,
 18 |   TableBody,
 19 |   TableCell,
 20 |   TableHead,
 21 |   TableHeader,
 22 |   TableRow,
 23 | } from "@/components/ui/table";
 24 | import { Button } from "@/components/ui/button";
 25 | import { Input } from "@/components/ui/input";
 26 | 
 27 | interface DataTableProps<TData, TValue> {
 28 |   columns: ColumnDef<TData, TValue>[];
 29 |   data: TData[];
 30 | }
 31 | 
 32 | export function DataTable<TData, TValue>({
 33 |   columns,
 34 |   data,
 35 | }: DataTableProps<TData, TValue>) {
 36 |   const [sorting, setSorting] = React.useState<SortingState>([]);
 37 |   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
 38 |     []
 39 |   );
 40 | 
 41 |   const table = useReactTable({
 42 |     data,
 43 |     columns,
 44 |     getCoreRowModel: getCoreRowModel(),
 45 |     getPaginationRowModel: getPaginationRowModel(),
 46 |     onSortingChange: setSorting,
 47 |     getSortedRowModel: getSortedRowModel(),
 48 |     onColumnFiltersChange: setColumnFilters,
 49 |     getFilteredRowModel: getFilteredRowModel(),
 50 |     state: {
 51 |       sorting,
 52 |       columnFilters,
 53 |     },
 54 |   });
 55 | 
 56 |   return (
 57 |     <div>
 58 |       <div className="flex items-center py-4">
 59 |         <Input
 60 |           placeholder="Filter users..."
 61 |           value={
 62 |             (table.getColumn("username")?.getFilterValue() as string) ?? ""
 63 |           }
 64 |           onChange={(event) =>
 65 |             table.getColumn("username")?.setFilterValue(event.target.value)
 66 |           }
 67 |           className="max-w-sm"
 68 |         />
 69 |       </div>
 70 |       <div className="rounded-md border">
 71 |         <Table>
 72 |           <TableHeader>
 73 |             {table.getHeaderGroups().map((headerGroup) => (
 74 |               <TableRow key={headerGroup.id}>
 75 |                 {headerGroup.headers.map((header) => {
 76 |                   return (
 77 |                     <TableHead key={header.id}>
 78 |                       {header.isPlaceholder
 79 |                         ? null
 80 |                         : flexRender(
 81 |                             header.column.columnDef.header,
 82 |                             header.getContext()
 83 |                           )}
 84 |                     </TableHead>
 85 |                   );
 86 |                 })}
 87 |               </TableRow>
 88 |             ))}
 89 |           </TableHeader>
 90 |           <TableBody>
 91 |             {table.getRowModel().rows?.length ? (
 92 |               table.getRowModel().rows.map((row) => (
 93 |                 <TableRow
 94 |                   key={row.id}
 95 |                   data-state={row.getIsSelected() && "selected"}
 96 |                 >
 97 |                   {row.getVisibleCells().map((cell) => (
 98 |                     <TableCell key={cell.id}>
 99 |                       {flexRender(
100 |                         cell.column.columnDef.cell,
101 |                         cell.getContext()
102 |                       )}
103 |                     </TableCell>
104 |                   ))}
105 |                 </TableRow>
106 |               ))
107 |             ) : (
108 |               <TableRow>
109 |                 <TableCell
110 |                   colSpan={columns.length}
111 |                   className="h-24 text-center"
112 |                 >
113 |                   No results.
114 |                 </TableCell>
115 |               </TableRow>
116 |             )}
117 |           </TableBody>
118 |         </Table>
119 |       </div>
120 |       <div className="flex items-center justify-end space-x-2 py-4">
121 |         <Button
122 |           variant="outline"
123 |           size="sm"
124 |           onClick={() => table.previousPage()}
125 |           disabled={!table.getCanPreviousPage()}
126 |         >
127 |           Previous
128 |         </Button>
129 |         <Button
130 |           variant="outline"
131 |           size="sm"
132 |           onClick={() => table.nextPage()}
133 |           disabled={!table.getCanNextPage()}
134 |         >
135 |           Next
136 |         </Button>
137 |       </div>
138 |     </div>
139 |   );
140 | }
141 | 


--------------------------------------------------------------------------------
/components/ui/dialog.tsx:
--------------------------------------------------------------------------------
  1 | "use client"
  2 | 
  3 | import * as React from "react"
  4 | import { XIcon } from "lucide-react"
  5 | import { Dialog as DialogPrimitive } from "radix-ui"
  6 | 
  7 | import { cn } from "@/lib/utils"
  8 | import { Button } from "@/components/ui/button"
  9 | 
 10 | function Dialog({
 11 |   ...props
 12 | }: React.ComponentProps<typeof DialogPrimitive.Root>) {
 13 |   return <DialogPrimitive.Root data-slot="dialog" {...props} />
 14 | }
 15 | 
 16 | function DialogTrigger({
 17 |   ...props
 18 | }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
 19 |   return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
 20 | }
 21 | 
 22 | function DialogPortal({
 23 |   ...props
 24 | }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
 25 |   return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
 26 | }
 27 | 
 28 | function DialogClose({
 29 |   ...props
 30 | }: React.ComponentProps<typeof DialogPrimitive.Close>) {
 31 |   return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
 32 | }
 33 | 
 34 | function DialogOverlay({
 35 |   className,
 36 |   ...props
 37 | }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
 38 |   return (
 39 |     <DialogPrimitive.Overlay
 40 |       data-slot="dialog-overlay"
 41 |       className={cn(
 42 |         "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
 43 |         className
 44 |       )}
 45 |       {...props}
 46 |     />
 47 |   )
 48 | }
 49 | 
 50 | function DialogContent({
 51 |   className,
 52 |   children,
 53 |   showCloseButton = true,
 54 |   ...props
 55 | }: React.ComponentProps<typeof DialogPrimitive.Content> & {
 56 |   showCloseButton?: boolean
 57 | }) {
 58 |   return (
 59 |     <DialogPortal data-slot="dialog-portal">
 60 |       <DialogOverlay />
 61 |       <DialogPrimitive.Content
 62 |         data-slot="dialog-content"
 63 |         className={cn(
 64 |           "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
 65 |           className
 66 |         )}
 67 |         {...props}
 68 |       >
 69 |         {children}
 70 |         {showCloseButton && (
 71 |           <DialogPrimitive.Close
 72 |             data-slot="dialog-close"
 73 |             className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
 74 |           >
 75 |             <XIcon />
 76 |             <span className="sr-only">Close</span>
 77 |           </DialogPrimitive.Close>
 78 |         )}
 79 |       </DialogPrimitive.Content>
 80 |     </DialogPortal>
 81 |   )
 82 | }
 83 | 
 84 | function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
 85 |   return (
 86 |     <div
 87 |       data-slot="dialog-header"
 88 |       className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
 89 |       {...props}
 90 |     />
 91 |   )
 92 | }
 93 | 
 94 | function DialogFooter({
 95 |   className,
 96 |   showCloseButton = false,
 97 |   children,
 98 |   ...props
 99 | }: React.ComponentProps<"div"> & {
100 |   showCloseButton?: boolean
101 | }) {
102 |   return (
103 |     <div
104 |       data-slot="dialog-footer"
105 |       className={cn(
106 |         "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
107 |         className
108 |       )}
109 |       {...props}
110 |     >
111 |       {children}
112 |       {showCloseButton && (
113 |         <DialogPrimitive.Close asChild>
114 |           <Button variant="outline">Close</Button>
115 |         </DialogPrimitive.Close>
116 |       )}
117 |     </div>
118 |   )
119 | }
120 | 
121 | function DialogTitle({
122 |   className,
123 |   ...props
124 | }: React.ComponentProps<typeof DialogPrimitive.Title>) {
125 |   return (
126 |     <DialogPrimitive.Title
127 |       data-slot="dialog-title"
128 |       className={cn("text-lg leading-none font-semibold", className)}
129 |       {...props}
130 |     />
131 |   )
132 | }
133 | 
134 | function DialogDescription({
135 |   className,
136 |   ...props
137 | }: React.ComponentProps<typeof DialogPrimitive.Description>) {
138 |   return (
139 |     <DialogPrimitive.Description
140 |       data-slot="dialog-description"
141 |       className={cn("text-sm text-muted-foreground", className)}
142 |       {...props}
143 |     />
144 |   )
145 | }
146 | 
147 | export {
148 |   Dialog,
149 |   DialogClose,
150 |   DialogContent,
151 |   DialogDescription,
152 |   DialogFooter,
153 |   DialogHeader,
154 |   DialogOverlay,
155 |   DialogPortal,
156 |   DialogTitle,
157 |   DialogTrigger,
158 | }
159 | 


--------------------------------------------------------------------------------
/components/stream-player/info-modal.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { toast } from "sonner";
  4 | import { useState, useTransition, useRef, ElementRef } from "react";
  5 | import { useRouter } from "next/navigation";
  6 | import { Trash } from "lucide-react";
  7 | import Image from "next/image";
  8 | 
  9 | import {
 10 |   Dialog,
 11 |   DialogClose,
 12 |   DialogContent,
 13 |   DialogHeader,
 14 |   DialogTitle,
 15 |   DialogTrigger,
 16 | } from "@/components/ui/dialog";
 17 | import { Hint } from "@/components/hint";
 18 | import { Label } from "@/components/ui/label";
 19 | import { Input } from "@/components/ui/input";
 20 | import { Button } from "@/components/ui/button";
 21 | import { updateStream } from "@/actions/stream";
 22 | import { UploadDropzone } from "@/lib/uploadthing";
 23 | 
 24 | interface InfoModalProps {
 25 |   initialName: string;
 26 |   initialThumbnailUrl: string | null;
 27 | }
 28 | 
 29 | export const InfoModal = ({
 30 |   initialName,
 31 |   initialThumbnailUrl,
 32 | }: InfoModalProps) => {
 33 |   const router = useRouter();
 34 |   const closeRef = useRef<ElementRef<"button">>(null);
 35 |   const [isPending, startTransition] = useTransition();
 36 | 
 37 |   const [name, setName] = useState(initialName);
 38 |   const [thumbnailUrl, setThumbnailUrl] = useState(initialThumbnailUrl);
 39 | 
 40 |   const onRemove = () => {
 41 |     startTransition(() => {
 42 |       updateStream({ thumbnail: null })
 43 |         .then(() => {
 44 |           toast.success("Thumbnail removed");
 45 |           setThumbnailUrl("");
 46 |           closeRef?.current?.click();
 47 |         })
 48 |         .catch(() => toast.error("Something went wrong"));
 49 |     });
 50 |   };
 51 | 
 52 |   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 53 |     e.preventDefault();
 54 | 
 55 |     startTransition(() => {
 56 |       updateStream({ title: name })
 57 |         .then(() => {
 58 |           toast.success("Stream updated");
 59 |           closeRef?.current?.click();
 60 |         })
 61 |         .catch(() => toast.error("Something went wrong"));
 62 |     });
 63 |   };
 64 | 
 65 |   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 66 |     setName(e.target.value);
 67 |   };
 68 | 
 69 |   return (
 70 |     <Dialog>
 71 |       <DialogTrigger asChild>
 72 |         <Button variant="link" size="sm" className="ml-auto">
 73 |           Edit
 74 |         </Button>
 75 |       </DialogTrigger>
 76 |       <DialogContent>
 77 |         <DialogHeader>
 78 |           <DialogTitle>Edit stream info</DialogTitle>
 79 |         </DialogHeader>
 80 |         <form onSubmit={onSubmit} className="space-y-14">
 81 |           <div className="space-y-2">
 82 |             <Label>Name</Label>
 83 |             <Input
 84 |               disabled={isPending}
 85 |               placeholder="Stream name"
 86 |               onChange={onChange}
 87 |               value={name}
 88 |             />
 89 |           </div>
 90 |           <div className="space-y-2">
 91 |             <Label>Thumbnail</Label>
 92 |             {thumbnailUrl ? (
 93 |               <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
 94 |                 <div className="absolute top-2 right-2 z-10">
 95 |                   <Hint label="Remove thumbnail" asChild side="left">
 96 |                     <Button
 97 |                       type="button"
 98 |                       disabled={isPending}
 99 |                       onClick={onRemove}
100 |                       className="h-auto w-auto p-1.5"
101 |                     >
102 |                       <Trash className="h-4 w-4" />
103 |                     </Button>
104 |                   </Hint>
105 |                 </div>
106 |                 <Image
107 |                   alt="Thumbnail"
108 |                   src={thumbnailUrl}
109 |                   fill
110 |                   className="object-cover"
111 |                 />
112 |               </div>
113 |             ) : (
114 |               <div className="rounded-xl border outline-dashed outline-muted">
115 |                 <UploadDropzone
116 |                   endpoint="thumbnailUploader"
117 |                   appearance={{
118 |                     label: {
119 |                       color: "#FFFFFF",
120 |                     },
121 |                     allowedContent: {
122 |                       color: "#FFFFFF",
123 |                     },
124 |                   }}
125 |                   onClientUploadComplete={(res: { url: string }[]) => {
126 |                     setThumbnailUrl(res?.[0]?.url);
127 |                     router.refresh();
128 |                     closeRef?.current?.click();
129 |                   }}
130 |                 />
131 |               </div>
132 |             )}
133 |           </div>
134 |           <div className="flex justify-between">
135 |             <DialogClose ref={closeRef} asChild>
136 |               <Button type="button" variant="ghost">
137 |                 Cancel
138 |               </Button>
139 |             </DialogClose>
140 |             <Button disabled={isPending} variant="primary" type="submit">
141 |               Save
142 |             </Button>
143 |           </div>
144 |         </form>
145 |       </DialogContent>
146 |     </Dialog>
147 |   );
148 | };
149 | 


--------------------------------------------------------------------------------
/components/ui/select.tsx:
--------------------------------------------------------------------------------
  1 | "use client"
  2 | 
  3 | import * as React from "react"
  4 | import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
  5 | import { Select as SelectPrimitive } from "radix-ui"
  6 | 
  7 | import { cn } from "@/lib/utils"
  8 | 
  9 | function Select({
 10 |   ...props
 11 | }: React.ComponentProps<typeof SelectPrimitive.Root>) {
 12 |   return <SelectPrimitive.Root data-slot="select" {...props} />
 13 | }
 14 | 
 15 | function SelectGroup({
 16 |   ...props
 17 | }: React.ComponentProps<typeof SelectPrimitive.Group>) {
 18 |   return <SelectPrimitive.Group data-slot="select-group" {...props} />
 19 | }
 20 | 
 21 | function SelectValue({
 22 |   ...props
 23 | }: React.ComponentProps<typeof SelectPrimitive.Value>) {
 24 |   return <SelectPrimitive.Value data-slot="select-value" {...props} />
 25 | }
 26 | 
 27 | function SelectTrigger({
 28 |   className,
 29 |   size = "default",
 30 |   children,
 31 |   ...props
 32 | }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
 33 |   size?: "sm" | "default"
 34 | }) {
 35 |   return (
 36 |     <SelectPrimitive.Trigger
 37 |       data-slot="select-trigger"
 38 |       data-size={size}
 39 |       className={cn(
 40 |         "flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
 41 |         className
 42 |       )}
 43 |       {...props}
 44 |     >
 45 |       {children}
 46 |       <SelectPrimitive.Icon asChild>
 47 |         <ChevronDownIcon className="size-4 opacity-50" />
 48 |       </SelectPrimitive.Icon>
 49 |     </SelectPrimitive.Trigger>
 50 |   )
 51 | }
 52 | 
 53 | function SelectContent({
 54 |   className,
 55 |   children,
 56 |   position = "item-aligned",
 57 |   align = "center",
 58 |   ...props
 59 | }: React.ComponentProps<typeof SelectPrimitive.Content>) {
 60 |   return (
 61 |     <SelectPrimitive.Portal>
 62 |       <SelectPrimitive.Content
 63 |         data-slot="select-content"
 64 |         className={cn(
 65 |           "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
 66 |           position === "popper" &&
 67 |             "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
 68 |           className
 69 |         )}
 70 |         position={position}
 71 |         align={align}
 72 |         {...props}
 73 |       >
 74 |         <SelectScrollUpButton />
 75 |         <SelectPrimitive.Viewport
 76 |           className={cn(
 77 |             "p-1",
 78 |             position === "popper" &&
 79 |               "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
 80 |           )}
 81 |         >
 82 |           {children}
 83 |         </SelectPrimitive.Viewport>
 84 |         <SelectScrollDownButton />
 85 |       </SelectPrimitive.Content>
 86 |     </SelectPrimitive.Portal>
 87 |   )
 88 | }
 89 | 
 90 | function SelectLabel({
 91 |   className,
 92 |   ...props
 93 | }: React.ComponentProps<typeof SelectPrimitive.Label>) {
 94 |   return (
 95 |     <SelectPrimitive.Label
 96 |       data-slot="select-label"
 97 |       className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
 98 |       {...props}
 99 |     />
100 |   )
101 | }
102 | 
103 | function SelectItem({
104 |   className,
105 |   children,
106 |   ...props
107 | }: React.ComponentProps<typeof SelectPrimitive.Item>) {
108 |   return (
109 |     <SelectPrimitive.Item
110 |       data-slot="select-item"
111 |       className={cn(
112 |         "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
113 |         className
114 |       )}
115 |       {...props}
116 |     >
117 |       <span
118 |         data-slot="select-item-indicator"
119 |         className="absolute right-2 flex size-3.5 items-center justify-center"
120 |       >
121 |         <SelectPrimitive.ItemIndicator>
122 |           <CheckIcon className="size-4" />
123 |         </SelectPrimitive.ItemIndicator>
124 |       </span>
125 |       <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
126 |     </SelectPrimitive.Item>
127 |   )
128 | }
129 | 
130 | function SelectSeparator({
131 |   className,
132 |   ...props
133 | }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
134 |   return (
135 |     <SelectPrimitive.Separator
136 |       data-slot="select-separator"
137 |       className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
138 |       {...props}
139 |     />
140 |   )
141 | }
142 | 
143 | function SelectScrollUpButton({
144 |   className,
145 |   ...props
146 | }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
147 |   return (
148 |     <SelectPrimitive.ScrollUpButton
149 |       data-slot="select-scroll-up-button"
150 |       className={cn(
151 |         "flex cursor-default items-center justify-center py-1",
152 |         className
153 |       )}
154 |       {...props}
155 |     >
156 |       <ChevronUpIcon className="size-4" />
157 |     </SelectPrimitive.ScrollUpButton>
158 |   )
159 | }
160 | 
161 | function SelectScrollDownButton({
162 |   className,
163 |   ...props
164 | }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
165 |   return (
166 |     <SelectPrimitive.ScrollDownButton
167 |       data-slot="select-scroll-down-button"
168 |       className={cn(
169 |         "flex cursor-default items-center justify-center py-1",
170 |         className
171 |       )}
172 |       {...props}
173 |     >
174 |       <ChevronDownIcon className="size-4" />
175 |     </SelectPrimitive.ScrollDownButton>
176 |   )
177 | }
178 | 
179 | export {
180 |   Select,
181 |   SelectContent,
182 |   SelectGroup,
183 |   SelectItem,
184 |   SelectLabel,
185 |   SelectScrollDownButton,
186 |   SelectScrollUpButton,
187 |   SelectSeparator,
188 |   SelectTrigger,
189 |   SelectValue,
190 | }
191 | 


--------------------------------------------------------------------------------
