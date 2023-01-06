export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cartItems } = req.body;
    console.log(cartItems);

    res.json({ hi: "hi" });
  }
}
