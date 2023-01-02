import { jwtVerify } from "jose";

export class AuthError extends Error {}

export default async function verifyAuth(req) {
  // grab token from cookies
  const token = req.cookies.get("userToken")?.value;

  // no token result
  if (!token) {
    throw new AuthError("Missing user token.");
  }

  // verify--if failed, send error
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return verified.payload;
  } catch (error) {
    throw new Error("Your token has expired");
  }
}
