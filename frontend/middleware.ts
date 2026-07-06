import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const protectedRoutes = [
    "/dashboard",
    "/history",
    "/review",
    "/profile",
    "/analytics",
    "/settings",
  ];

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected) {
    // We'll replace this with a real Supabase session check
    // in the next step.
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/history/:path*",
    "/review/:path*",
    "/profile/:path*",
    "/analytics/:path*",
    "/settings/:path*",
  ],
};