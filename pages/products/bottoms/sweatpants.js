import ProductsLayout from "../../../components/ProductsLayout";
import { Grid } from "@mui/material";
import useCreateProductCards from "../../../components/customHooks/useCreateProdCards";
import sweatpantsBG from "../../../public/images/sweatpants.png";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product", {
    params: { category: "sweatpants" },
  });
  const data = res.data.allProducts;

  return {
    props: { products: data },
  };
};

export default function Sweatpants({ products }) {
  const productInfo = { name: "Sweatpants", path: "Bottoms" };

  const productCards = useCreateProductCards(products, sweatpantsBG);

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
