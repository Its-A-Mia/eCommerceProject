import { NextResponse } from "next/server";
import verifyAuth from "./lib/auth";

//

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/protected")) {
    const verifiedToken = await verifyAuth(req).catch((err) => {
      console.error(err.message);
    });

    if (!verifiedToken) {
      const redirectURL = req.nextUrl.clone();
      redirectURL.pathname = "/auth";
      return NextResponse.redirect(redirectURL);
    }

    return NextResponse.next();
  }

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
