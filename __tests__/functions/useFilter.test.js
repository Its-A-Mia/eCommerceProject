import AllProducts from "../../dbFiles/AllProducts.json";
import FilteredByRating from "../../dbFiles/FilteredByRating.json";
import useFilter from "../../components/customHooks/useFilter";

describe("useFilter", () => {
  it("receives rating filters to show products based on rating", () => {
    const filter = { price: [], rating: [1], color: [] };
    // const products = JSON.parse(productJSON);
    const filteredProducts = useFilter(AllProducts, filter);
    expect(filteredProducts).toEqual(FilteredByRating);
  });
});
