import prisma from "../../../lib/prisma";
import { SignJWT } from "jose";
import { hashUserID } from "../../../lib/hasher";
import { comparePassAndHash } from "../../../lib/checkHash";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // check if user email already exists--emails must be unique in DB
    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    // return error if email does exist
    if (!existingUser) {
      res.status(400).send("There is no account associated with this email.");
      return;
    }

    // next, check password
    const compareResult = await comparePassAndHash(password, existingUser.hash);

    // return error if password comparison fails
    if (!compareResult) {
      res.status(400).send("Incorrect Password.");
      return;
    }

    // hash userID to store in token as sessionID
    const hashedUserID = await hashUserID(existingUser.id);

    // user has been found and validated both frontend and backend, now to create token to validate session
    const token = await new SignJWT({ id: hashedUserID })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("15m")
      .setIssuedAt()
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    // return token
    res.json({ token });
  } else {
    res.status(501).send("The HTTP method is not supported by this route and cannot be handled.");
  }
}
