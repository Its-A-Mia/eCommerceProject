const bcrypt = require("bcrypt");

export default async function hassPass(passToHash) {
  const salt = await bcrypt.genSalt(10);
  passToHash = await bcrypt.hash(passToHash, salt);
  return passToHash;
}
