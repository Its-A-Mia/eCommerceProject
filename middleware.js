import { NextResponse, NextRequest } from "next/server";
const jwt = require("jsonwebtoken");

export async function middleware(NextRequest) {
  const authHeader = NextRequest.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse(JSON.stringify({ error: "Authentication failed." })).redirect("/auth");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded;
    req.user = { id };
    return NextResponse.next();
  } catch (error) {
    return NextResponse(JSON.stringify({ error: "Authentication failed." })).redirect("/auth");
  }
}

export const config = {
  matcher: ["/orders", "/api/checkout"],
};
