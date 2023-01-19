import ProductsLayout from "../../../components/ProductsLayout";
import { Grid } from "@mui/material";
import useCreateProductCards from "../../../components/customHooks/useCreateProdCards";
import jeansBG from "../../../public/images/jeans.png";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product", {
    params: { category: "jeans" },
  });
  const data = res.data.allProducts;

  return {
    props: { products: data },
  };
};
export default function Jeans({ products }) {
  const productInfo = { name: "Jeans", path: "Bottoms" };

  const productCards = useCreateProductCards(products, jeansBG);

  return (
    <>
      <ProductsLayout productInfo={productInfo}>
        <Grid container spacing={2}>
          {productCards}
        </Grid>
      </ProductsLayout>
    </>
  );
}
