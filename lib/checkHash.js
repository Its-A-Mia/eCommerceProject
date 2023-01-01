import bcrypt from "bcrypt";

export default function comparePassAndHash(unHashedPass, hashPass) {
  return bcrypt.compare(unHashedPass, hashPass).then((result) => {
    return result;
  });
}
