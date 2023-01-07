import ProductsLayout from "../../../components/ProductsLayout";
import { Grid } from "@mui/material";
import useCreateProductCards from "../../../components/customHooks/useCreateProdCards";
import sweatersBG from "../../../public/images/sweaters.png";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product", {
    params: { category: "sweater" },
  });
  const data = res.data.allProducts;

  return {
    props: { products: data },
  };
};

export default function Sweaters({ products }) {
  const productInfo = { name: "Sweaters", path: "Tops" };

  const productCards = useCreateProductCards(products, sweatersBG);

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
