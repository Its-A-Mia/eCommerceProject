export default function useSort(products, sortType) {
  let sortedProducts = [];

  switch (sortType) {
    case "Best Match":
      return products;
    case "Price (High to Low)":
      // basic insertion sort
      for (let i = 0; i < products.length; i++) {
        sortedProducts.push(products[i]);

        let currentPrice = Number(products[i].price);
        let position = i;

        while (position > 0 && Number(sortedProducts[position - 1].price) < currentPrice) {
          //   sortedProducts.splice(position, 0, sortedProducts[position - 1]);
          position -= 1;
        }

        sortedProducts.splice(position, 0, sortedProducts[i]);
        sortedProducts.splice(i + 1, 1);
      }
      break;
    case "Price (Low to High)":
      for (let i = 0; i < products.length; i++) {
        sortedProducts.push(products[i]);

        let currentPrice = Number(products[i].price);
        let position = i;

        while (position > 0 && Number(sortedProducts[position - 1].price) > currentPrice) {
          //   sortedProducts.splice(position, 0, sortedProducts[position - 1]);
          position -= 1;
        }

        sortedProducts.splice(position, 0, sortedProducts[i]);
        sortedProducts.splice(i + 1, 1);
      }
      break;
    case "Ratings (High to Low)":
      for (let i = 0; i < products.length; i++) {
        sortedProducts.push(products[i]);

        let currentRating = products[i].rating;
        let position = i;

        while (position > 0 && sortedProducts[position - 1].rating <= currentRating) {
          //   sortedProducts.splice(position, 0, sortedProducts[position - 1]);
          position -= 1;
        }

        sortedProducts.splice(position, 0, sortedProducts[i]);
        sortedProducts.splice(i + 1, 1);
      }
      break;
  }

  return sortedProducts;
}
