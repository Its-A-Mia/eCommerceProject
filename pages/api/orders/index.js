import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const userToken = req.body.cookies.userToken;
    console.log(userToken);

    const session = await prisma.Session.findFirst({
      where: { token: userToken },
    });

    let orders;
    try {
      orders = await prisma.order.findMany({
        where: { customerId: session.userId },
      });
    } catch (error) {
      res.status(500).send("You have not ordered anything.");
    }

    for (let i = 0; i < orders.length; i++) {
      let tempOrderDetail = await prisma.orderDetail.findMany({
        where: { orderId: orders[i].orderNumber },
      });

      for (let j = 0; j < tempOrderDetail.length; j++) {
        tempOrderDetail[j].productInfo = await prisma.product.findFirst({
          where: { id: tempOrderDetail[j].productId },
          select: {
            title: true,
            category: true,
          },
        });
      }
      orders[i].orderDetails = tempOrderDetail;
    }

    res.json(orders);
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
