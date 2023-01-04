import ProductsLayout from "../../../components/ProductsLayout";
import { Grid } from "@mui/material";
import useCreateProductCards from "../../../components/customHooks/useCreateProdCards";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};
export default function Jeans({ products }) {
  const productInfo = { name: "Jeans", path: "Bottoms" };

  const productCards = useCreateProductCards(products);

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
