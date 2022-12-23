import PrimaryLayout from "../../../components/PrimaryLayout";
import ProductsLayout from "../../../components/ProductsLayout";

export default function TShirts() {
  return <></>;
}

TShirts.getLayout = function getLayout(page) {
  const productInfo = { name: "T-Shirts", path: "Tops" };

  return (
    <PrimaryLayout>
      <ProductsLayout productsPage={productInfo}>{page}</ProductsLayout>
    </PrimaryLayout>
  );
};
