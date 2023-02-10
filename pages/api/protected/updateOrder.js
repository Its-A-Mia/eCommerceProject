import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'PATCH') {
    const { orderNumber } = req.body.data;

    const order = await prisma.order.findFirst({
      where: { orderNumber: orderNumber },
    });

    if (order.orderStatus === 'Active') {
      await prisma.order.update({
        where: { orderNumber: orderNumber },
        data: { orderStatus: 'Cancelled' },
      });
      res.json('success');
      return;
    }

    await prisma.order.update({
      where: { orderNumber: orderNumber },
      data: { orderStatus: 'Active' },
    });

    res.json('success');
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
