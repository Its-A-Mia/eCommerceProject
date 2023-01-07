import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cartItems } = req.body;
    const userToken = req.cookies.userToken;
    console.log(userToken);

    // check next order #

    const orderNumber = await prisma.order.findMany({});

    res.json({ hi: "hi" });
  }
}
