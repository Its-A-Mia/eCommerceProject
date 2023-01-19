export default function useFilter(products, filter) {
  // filter should specify the category(ies) and filter parameters
  // go through products array and push only the products that match parameter
  // filter = {price: ["$0 - $100", "$101 - $200", "$201 - $300", "$301 - $400", "$401 - $500"], rating: [], color: []}

  let filteredProducts = [];

  const filterPrice = (product) => {
    for (let option of filter.price) {
      if (option === "$0 - $100" && Number(product.price) <= 100) {
        return product;
      }
      if (option === "$101 - $200" && Number(product.price) > 100 && Number(product.price) <= 200) {
        return product;
      }
      if (option === "$201 - $300" && Number(product.price) > 200 && Number(product.price) <= 300) {
        return product;
      }
      if (option === "$301 - $400" && Number(product.price) > 300 && Number(product.price) <= 400) {
        return product;
      }
      if (option === "$401 - $500" && Number(product.price) > 400 && Number(product.price) <= 500) {
        return product;
      }
    }
  };
  // if includes rating && price && color
  const filterRating = (product) => {
    if (filter.rating.includes(product.rating)) {
      return product;
    }
  };

  const filterColor = (product) => {
    if (filter.color.includes(product.color)) {
      return product;
    }
  };

  const multiFilter = (product) => {
    let multiFilteredProduct = null; //house the new

    // enter if rating arr contains items then hold product in MulFiltProd
    if (filter.rating.length !== 0 && filter.rating.includes(product.rating)) {
      multiFilteredProduct = product;
    }

    // enter if color arr contains items then hold product in MulFiltProd
    if (filter.color.length !== 0) {
      // if MulFiltProd was assigned above and passes includes check, return MulFiltProd--if there is nothing in rating arr, then it will capture MulFiltProd
      if (multiFilteredProduct && filter.color.includes(multiFilteredProduct.color)) {
        return multiFilteredProduct;
      } else if (filter.color.includes(product.color)) {
        multiFilteredProduct = product;
      }
    }
    return multiFilteredProduct;
  };

  for (let i = 0; i < products.length; i++) {
    // enter if price arr contains items
    if (filter.price.length !== 0) {
      // only enter if product is not already in filteredProducts arr
      if (filteredProducts.indexOf(products[i]) === -1) {
        const filteredProduct = filterPrice(products[i]);
        if (filteredProduct) {
          filteredProducts.push(filteredProduct);
        }
      }
    }

    // enter if rating arr contains items
    if (filter.rating.length !== 0) {
      // enter if price arr contains items--checks to see if this will be a multiFiltered product result
      if (filter.price.length !== 0) {
        const currentIndex = filteredProducts.indexOf(products[i]);
        if (currentIndex !== -1) {
          const filteredProduct = multiFilter(filteredProducts[currentIndex]); //needs to compare values
          if (filteredProduct) {
            continue;
          } else {
            // otherwise remove this produce since it does not meet both filter criteria
            filteredProducts.splice(currentIndex, 1);
          }
        }
      } else if (filteredProducts.indexOf(products[i]) === -1) {
        const filteredProduct = filterRating(products[i]);
        if (filteredProduct) {
          filteredProducts.push(filteredProduct);
        }
      }
    }
    if (filter.color.length !== 0) {
      if (filter.price.length !== 0 || filter.rating.length !== 0) {
        const currentIndex = filteredProducts.indexOf(products[i]);
        if (currentIndex !== -1) {
          const filteredProduct = multiFilter(filteredProducts[currentIndex]); //needs to compare values
          if (filteredProduct) {
            continue;
          } else {
            // otherwise remove this produce since it does not meet both filter criteria
            filteredProducts.splice(currentIndex, 1);
          }
        }
      } else if (filteredProducts.indexOf(products[i]) === -1) {
        const filteredProduct = filterColor(products[i]);
        if (filteredProduct) {
          filteredProducts.push(filteredProduct);
        }
      }
    }
  }
  console.log(filteredProducts);
  return filteredProducts;
}
