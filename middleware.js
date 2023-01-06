import { NextResponse } from "next/server";
import verifyAuth from "./lib/auth";

export async function middleware(req) {
  // checks authentication for protected page routes
  if (req.nextUrl.pathname.startsWith("/protected")) {
    const verifiedToken = await verifyAuth(req).catch((err) => {
      console.error(err.message);
    });

    if (!verifiedToken) {
      const redirectURL = req.nextUrl.clone();
      redirectURL.pathname = "/auth";
      return NextResponse.redirect(redirectURL);
    }
    // otherwise continue with request
    return NextResponse.next();
  }

  // checks authentication for protected api routes
  if (req.nextUrl.pathname.startsWith("/api/protected")) {
    const verifiedToken = await verifyAuth(req).catch((err) => {
      console.error(err.message);
    });

    // send to api route that responds to login
    if (!verifiedToken) {
      const redirectURL = req.nextUrl.clone();
      redirectURL.pathname = "/api/auth/unverifiedAuth";
      return NextResponse.redirect(redirectURL);
    }
    // otherwise continue with request
    return NextResponse.next();
  }

  // if logged in, do not allow user to access login page
  if (req.nextUrl.pathname.startsWith("/auth")) {
    const userToken = req.cookies.get("userToken");

    if (!userToken) {
      return NextResponse.next();
    }

    const redirectURL = req.nextUrl.clone();
    redirectURL.pathname = "/profile";
    return NextResponse.redirect(redirectURL);
  }
}
