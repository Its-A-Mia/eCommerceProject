import ProductsLayout from "../../../components/ProductsLayout";
import { Grid } from "@mui/material";
import useCreateProductCards from "../../../components/customHooks/useCreateProdCards";
import hoodiesBG from "../../../public/images/hoodies.png";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product", {
    params: { category: "hoodie" },
  });
  const data = res.data.allProducts;

  return {
    props: { products: data },
  };
};

export default function Hoodies({ products }) {
  const productInfo = { name: "Hoodies", path: "Tops" };

  const productCards = useCreateProductCards(products, hoodiesBG);

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
