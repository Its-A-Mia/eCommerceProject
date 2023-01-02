import { NextResponse } from "next/server";
import verifyAuth from "./lib/auth";

export async function middleware(req) {
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

export const config = {
  matcher: ["/orders", "/api/checkout", "/profile"],
};
