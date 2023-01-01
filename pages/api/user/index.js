import prisma from "../../../lib/prisma";
import hashPass from "../../../lib/hashPass";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password, name } = req.body;

    const hashedPassword = await hashPass(password); //uses bcrypt to hash the password

    if (!email || !password || !name) {
      throw new Error("Please provide name, email and password");
    }

    const existingEmail = await prisma.user.findFirst({
      where: { email: email },
    });

    if (existingEmail) {
      res.status(500).send("This email already in use. Please use a different one.");
      return;
    }

    const postResult = await prisma.user.create({
      data: {
        name,
        email,
        hash: hashedPassword,
      },
    });

    res.json(postResult);
  } else if (req.method === "GET") {
    const { name, email } = req.query;
    const queryObject = {};

    if (name) {
      queryObject.name = name;
    }

    if (email) {
      queryObject.email = email;
    }

    const allUsers = await prisma.user.findMany({
      where: queryObject,
    });
    res.json({ allUsers, nbHits: allUsers.length });
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
