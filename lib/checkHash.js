import bcrypt from "bcrypt";

export default function isSamePass(unHashedPass, hashPass) {
  return bcrypt.compare(unHashedPass, hashPass).then((result) => {
    return result;
  });
}
