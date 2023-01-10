import { comparePassAndHash, compareUserIDAndHashID } from "../../../lib/checkHash";
import jwt_decode from "jwt-decode";

import { hashPass } from "../../../lib/hasher";
import prisma from "../../../lib/prisma";

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
    // const { cookies } = req.params;

    const userToken = req.body.cookies.userToken;

    const decodedToken = jwt_decode(userToken);

    const session = await prisma.session.findFirst({
      where: { token: userToken },
    });

    try {
      await compareUserIDAndHashID(session.userId, decodedToken.id);
    } catch (error) {
      console.log("UserID is not valid");
      return;
    }

    const user = await prisma.user.findFirst({
      where: { id: session.userId },
    });

    res.json({ name: user.name, email: user.email });
  } else if (req.method === "PATCH") {
    // grab all inputs
    const { newPassword, newEmail, newName, toUpdate } = req.body;

    // checks for input
    if (toUpdate === "name" && !newName) {
      return res.status(500).send(`Please fill out ${toUpdate}.`);
    }

    if (toUpdate === "email" && !newEmail) {
      return res.status(500).send(`Please fill out ${toUpdate}.`);
    }

    if (toUpdate === "password" && !newPassword) {
      return res.status(500).send(`Please fill out ${toUpdate}.`);
    }

    //  grab token then decode to pull userID
    const userToken = req.cookies.userToken;
    const decodedToken = jwt_decode(userToken);

    //  get session for unhashedID
    const session = await prisma.session.findFirst({
      where: { token: userToken },
    });

    //  authenticate
    try {
      await compareUserIDAndHashID(session.userId, decodedToken.id);
    } catch (error) {
      console.log("UserID is not valid");
      return;
    }

    // grab user data to check if the current value equals the new
    const user = await prisma.user.findFirst({
      where: { id: session.userId },
    });

    if (newName) {
      if (newName === user.name) {
        return res.status(500).send(`Your name is already ${newName}`);
      }

      const name = newName.charAt(0).toUpperCase() + newName.slice(1);

      try {
        const updatedAccount = await prisma.user.update({
          where: { id: session.userId },
          data: { name },
        });
        res.json(updatedAccount.name);
      } catch (error) {
        res, json(error);
      }
    }

    if (newEmail) {
      try {
        await prisma.user.update({
          where: { id: session.userId },
          data: { email: newEmail },
        });
      } catch (error) {
        res, json(error);
      }
    }

    if (newPassword) {
      const hash = await hashPass(newPassword);
      try {
        await prisma.user.update({
          where: { id: session.userId },
          data: { hash },
        });
      } catch (error) {
        res, json(error);
      }
    }

    res.json("Update successful.");
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
