import PrimaryLayout from "../../../components/PrimaryLayout";
import ProductsLayout from "../../../components/ProductsLayout";

export default function Hoodies() {
  return <></>;
}

Hoodies.getLayout = function getLayout(page) {
  const productInfo = { name: "Hoodies", path: "Tops" };

  return (
    <PrimaryLayout>
      <ProductsLayout productsPage={productInfo}>{page}</ProductsLayout>
    </PrimaryLayout>
  );
};
