import prisma from "../../../lib/prisma";
import hashPass from "../../../lib/hashPass";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const hashedPassword = await hashPass(password);

    const postResult = await prisma.user.create({
      data: {
        email,
        hash: hashedPassword,
      },
    });

    res.json(postResult);
  } else if (req.method === "GET") {
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
