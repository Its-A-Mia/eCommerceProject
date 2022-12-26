import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, price, category, description } = req.body;

    const postResult = await prisma.product.create({
      data: {
        title,
        price,
        category,
        description,
      },
    });
    res.json(postResult);
  } else if (req.method === "GET") {
    const { title, category, description, numericFilters } = req.query;
    const queryObject = {};

    if (title) {
      queryObject.title = title;
    }

    if (category) {
      queryObject.category = category;
    }

    if (description) {
      queryObject.description = description;
    }

    if (numericFilters) {
      const operatorMap = {
        ">": "gt",
        ">=": "gte",
        "=": "equals",
        "<": "lt",
        "<=": "lte",
      };
      const regEx = /\b(>|>=|=|<|<=)\b/g;
      let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
      const options = ["price", "rating"];
      filters = filters.split(",").forEach((item) => {
        const [field, operator, value] = item.split("-");
        if (options.includes(field)) {
          queryObject[field] = { [operator]: Number(value) };
        }
      });
    }

    const allProducts = await prisma.product.findMany({
      where: queryObject,
    });
    res.json({ allProducts, nbHits: allProducts.length });
  }
}
