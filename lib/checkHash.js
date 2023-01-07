import bcrypt from "bcrypt";

export function comparePassAndHash(unHashedPass, hashPass) {
  return bcrypt.compare(unHashedPass, hashPass).then((result) => {
    return result;
  });
}

export function compareUserIDAndHashID(unHashedUserID, hashID) {
  return bcrypt.compare(unHashedUserID, hashID).then((result) => {
    return result;
  });
}
