import prisma from "../../../lib/prisma";
import jwt_decode from "jwt-decode";
import { compareUserIDAndHashID } from "../../../lib/checkHash";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cartItems } = req.body;

    const userToken = req.cookies.userToken;

    // decode the token to grab hashedID to compare to userID found in session data as an extra layer of validation
    const decodedToken = jwt_decode(userToken);

    // grab session data using token
    const session = await prisma.session.findFirst({
      where: { token: userToken },
    });

    // validate userID inside token
    const userIDVerified = await compareUserIDAndHashID(session.userId, decodedToken.id);

    // if validated, continue with order
    if (userIDVerified) {
      const order = await prisma.order.create({
        data: { customerId: session.userId },
      });

      let orderDetails = [];
      for (let i = 0; i < cartItems.length; i++) {
        const product = await prisma.product.findFirst({
          where: { id: cartItems[i].productID },
        });

        const orderDetail = await prisma.orderDetail.create({
          data: {
            orderId: order.orderNumber,
            productId: cartItems[i].productID,
            unitPrice: product.price,
            quantity: cartItems[i].quantity,
          },
        });
        orderDetails.push(orderDetail);
      }
      console.log(orderDetails, order);
    }

    res.json({ hi: "hi" });
  }
}
