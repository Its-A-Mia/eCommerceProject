import { NextResponse, NextRequest } from "next/server";
import verifyAuth from "./lib/auth";

export async function middleware(NextRequest) {
  const authHeader = NextRequest.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new NextResponse(JSON.stringify({ error: "Authentication failed." }));
  }

  const unverifiedToken = authHeader.split(" ")[1];

  const verifiedToken = await verifyAuth(unverifiedToken).catch((err) => {
    console.log(err.message);

    if (!verifiedToken) {
      if (NextRequest.nexUrl.pathname.startsWith("/api")) {
        return new NextResponse(
          JSON.stringify({ error: { message: "Authentication required." } }, { status: 401 })
        );
      }
    }
    return NextRequest.redirect(new URL("/", NextRequest.URL));
  });
}

export const config = {
  matcher: ["/orders", "/api/checkout"],
};
