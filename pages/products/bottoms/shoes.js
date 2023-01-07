import ProductsLayout from "../../../components/ProductsLayout";
import { Grid } from "@mui/material";
import useCreateProductCards from "../../../components/customHooks/useCreateProdCards";
import shoesBG from "../../../public/images/shoes.png";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product", {
    params: { category: "shoe" },
  });
  const data = res.data.allProducts;

  return {
    props: { products: data },
  };
};
export default function Shoes({ products }) {
  const productInfo = { name: "Shoes", path: "Bottoms" };

  const productCards = useCreateProductCards(products, shoesBG);

  return (
    <>
      <ProductsLayout productsPage={productInfo}>
        <Grid container spacing={2}>
          {productCards}
        </Grid>
      </ProductsLayout>
    </>
  );
}
