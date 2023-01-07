import bcrypt from "bcrypt";

export async function hashPass(passToHash) {
  const salt = await bcrypt.genSalt(10);
  passToHash = await bcrypt.hash(passToHash, salt);
  return passToHash;
}

export async function hashUserID(userIDToHash) {
  const salt = await bcrypt.genSalt(10);
  userIDToHash = await bcrypt.hash(userIDToHash, salt);
  return userIDToHash;
}
