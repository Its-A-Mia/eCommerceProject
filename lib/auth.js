import { jwtVerify } from "jose";

export class AuthError extends Error {}

export default async function verifyAuth(req) {
  // grab token from cookies
  const token = req.cookies.get("userToken")?.value;

  if (!token) {
    throw new AuthError("Missing user token.");
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return verified.payload;
  } catch (error) {
    throw new Error("Your token has expired");
  }
}
