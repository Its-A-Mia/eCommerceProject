import prisma from "../../../lib/prisma";
import allProducts from "../../../dbFiles/Product.json";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // create custom script to start website in Docker instance

    // will collect results
    let postResult = [];

    // check if products have been created, otherwise return
    const isSeeded = await prisma.product.findMany({});

    if (isSeeded) {
      return res.json("Products already seeded.");
    }

    // create each product in database--should execute only when project is first opened
    for (let i = 0; i < allProducts.length; i++) {
      let createdProduct = await prisma.product.create({
        data: {
          title: allProducts[i].title,
          price: allProducts[i].price,
          category: allProducts[i].category,
          description: allProducts[i].description,
          color: allProducts[i].color,
          rating: Number(allProducts[i].rating),
        },
      });
      // used for debugging
      postResult.push(createdProduct);
    }

    // Seeding completed
    res.json("Products seeded.");
    // res.json(postResult);
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
