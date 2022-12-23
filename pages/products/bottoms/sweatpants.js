import PrimaryLayout from "../../../components/PrimaryLayout";
import ProductsLayout from "../../../components/ProductsLayout";

export default function Sweatpants() {
  return <></>;
}

Sweatpants.getLayout = function getLayout(page) {
  const productInfo = { name: "Sweatpants", path: "Bottoms" };

  return (
    <PrimaryLayout>
      <ProductsLayout productsPage={productInfo}>{page}</ProductsLayout>
    </PrimaryLayout>
  );
};
