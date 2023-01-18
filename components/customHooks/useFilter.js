export default function useFilter(products, filter) {
  // filter should specify the category(ies) and filter parameters
  // go through products array and push only the products that match parameter
  // filter = {price: ["$0 - $100", "$101 - $200", "$201 - $300", "$301 - $400", "$401 - $500"], rating: [], color: []}

  console.log(filter);

  let filteredProducts = [];

  const filterPrice = (product) => {
    for (let option of filter.price) {
      if (option === "$0 - $100" && Number(product.price) <= 100) {
        filteredProducts.push(product);
      }
      if (option === "$101 - $200" && Number(product.price) > 100 && Number(product.price) <= 200) {
        filteredProducts.push(product);
      }
      if (option === "$201 - $300" && Number(product.price) > 200 && Number(product.price) <= 300) {
        filteredProducts.push(product);
      }
      if (option === "$301 - $400" && Number(product.price) > 300 && Number(product.price) <= 400) {
        filteredProducts.push(product);
      }
      if (option === "$401 - $500" && Number(product.price) > 400 && Number(product.price) <= 500) {
        filteredProducts.push(product);
      }
    }
  };

  const filterRating = (product) => {
    if (filter.rating.includes(product.rating)) {
      filteredProducts.push(product);
    }
  };

  const filterColor = (product) => {
    if (filter.color.includes(product.color)) {
      filteredProducts.push(product);
    }
  };

  for (let i = 0; i < products.length; i++) {
    if (filter.price.length !== 0) {
      filterPrice(products[i]);
    }
    if (filter.rating.length !== 0) {
      filterRating(products[i]);
    }
    if (filter.color.length !== 0) {
      filterColor(products[i]);
    }
  }

  return filteredProducts;
}
