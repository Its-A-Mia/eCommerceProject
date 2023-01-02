import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // gather product info
    const { title, price, category, description } = req.body;

    // create product--should return error, will have to add later
    const postResult = await prisma.product.create({
      data: {
        title,
        price,
        category,
        description,
      },
    });

    // return created product
    res.json(postResult);
  } else if (req.method === "GET") {
    // grab request queries
    const { title, category, description, numericFilters } = req.query;
    // initialize object to store queries
    const queryObject = {};

    // each conditional statement checks for query value, then stores it as a property in queryObject
    if (title) {
      queryObject.title = title;
    }

    if (category) {
      queryObject.category = category;
    }

    if (description) {
      queryObject.description = description;
    }

    // must parse out numeric queries
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

    // search DB using queryObject to describe parameters
    const allProducts = await prisma.product.findMany({
      where: queryObject,
    });

    // return results
    res.json({ allProducts, nbHits: allProducts.length });
  } else {
    throw new Error(`The HTTP ${req.method} method is not suported at this route`);
  }
}
