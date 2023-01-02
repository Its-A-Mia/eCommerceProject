import prisma from "../../../lib/prisma";
import comparePassAndHash from "../../../lib/checkHash";
import { SignJWT } from "jose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!existingUser) {
      res.status(400).send("There is no account associated with this email.");
      return;
    }

    const compareResult = await comparePassAndHash(password, existingUser.hash);

    if (!compareResult) {
      res.status(400).send("Incorrect Password.");
      return;
    }

    const token = await new SignJWT({ id: existingUser.id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("15m")
      .setIssuedAt()
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    res.json({ token });
  } else {
    res.status(501).send("The HTTP method is not supported by this route and cannot be handled.");
  }
}
