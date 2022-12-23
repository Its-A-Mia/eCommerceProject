import PrimaryLayout from "../../../components/PrimaryLayout";
import ProductsLayout from "../../../components/ProductsLayout";

export default function Sweaters() {
  return <></>;
}

Sweaters.getLayout = function getLayout(page) {
  const productInfo = { name: "Sweaters", path: "Tops" };

  return (
    <PrimaryLayout>
      <ProductsLayout productsPage={productInfo}>{page}</ProductsLayout>
    </PrimaryLayout>
  );
};
