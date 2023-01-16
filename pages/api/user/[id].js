import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const product = await prisma.product.findUnique({
      where: { id: req.query.id },
    });
    res.json(product);
  } else if (req.method === "DELETE") {
    await prisma.product.delete({
      where: { id: req.query.id },
    });
    res.send("Delete User");
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
