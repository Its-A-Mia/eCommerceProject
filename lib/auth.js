import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export class AuthError extends Error {}

export default async function verifyAuth(token) {
  const token = token;

  if (!token) throw new AuthError("Missing user token.");

  try {
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    return (jwtPayload = verified.payload);
  } catch (error) {
    throw new AuthError("Your token has expired");
  }
}

export async function setUserSession(NextResponse) {}
