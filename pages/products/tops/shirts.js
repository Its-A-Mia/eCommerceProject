import ProductsLayout from "../../../components/ProductsLayout";
import { Grid } from "@mui/material";
import useCreateProductCards from "../../../components/customHooks/useCreateProdCards";
import tShirtBG from "../../../public/images/tshirts.jpg";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/product", {
    params: { category: "shirt" },
  });
  const data = res.data.allProducts;

  return {
    props: { products: data },
  };
};

export default function TShirts({ products }) {
  const productInfo = { name: "Shirts", path: "Tops" };

  const productCards = useCreateProductCards(products, tShirtBG);

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
