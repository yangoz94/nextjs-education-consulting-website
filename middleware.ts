import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = new URL(req.url, process.env.NEXTAUTH_URL);

  // Check if the user is logged in
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (pathname === "/admin") {
    // Redirect user to /admin/dashboard if logged in
    if (session) {
      return NextResponse.redirect(process.env.NEXTAUTH_URL + "/admin/dashboard");
    }
  } else if (pathname === "/admin/dashboard") {
    // Check if the user is logged in, otherwise redirect to /admin
    if (!session) {
      return NextResponse.redirect(process.env.NEXTAUTH_URL + "/admin");
    }
  }

  // If the user is logged in and accessing /admin/dashboard, continue to the requested page
  if (session && pathname.startsWith("/admin/dashboard")) {
    return NextResponse.next();
  }

  // If none of the conditions above match, continue to the requested page
  return NextResponse.next();
}
