import { NextResponse, type NextRequest } from "next/server";

/**
 * Optimistic redirect only: send visitors without a session cookie to the
 * login page. Real verification happens in `requireAdmin()` on every admin
 * page, server action and route — never rely on this file alone.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();

  if (!request.cookies.has("bp_admin")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
