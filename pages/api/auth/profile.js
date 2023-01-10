import jwt_decode from "jwt-decode";
import { comparePassAndHash, compareUserIDAndHashID } from "../../../lib/checkHash";

export default async function handler(req, res) {
  const { password } = req.body;

  //  grab token then decode to pull userID
  const userToken = req.cookies.userToken;
  const decodedToken = jwt_decode(userToken);

  console.log(userToken);

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

  // next, check password
  const compareResult = await comparePassAndHash(password, user.hash);

  // return error if password comparison fails
  if (!compareResult) {
    res.status(400).send("Incorrect Password.");
    return;
  }

  res.json("");
}
