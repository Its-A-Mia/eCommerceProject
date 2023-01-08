export default async function handler(req, res) {
  if (req.method === "GET") {
    // const { id } = req.params;
    // const cartProduct = await prisma.product.findMany({
    //   where: id,
    // });
    // console.log({})
    // res.json({ cartProduct });
    // use to get cart items from DB once the switch has been made client side
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
