import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
  } else if (req.method === "GET") {
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
