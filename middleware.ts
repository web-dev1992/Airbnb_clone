import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/properties(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
export default clerkMiddleware(async (auth, request) => {
  const isAdmin = (await auth()).userId === process.env.ADMIN_USER_ID;
  if(isAdminRoute(request) && !isAdmin ) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

