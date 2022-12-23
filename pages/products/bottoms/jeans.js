import PrimaryLayout from "../../../components/PrimaryLayout";
import ProductsLayout from "../../../components/ProductsLayout";

export default function Jeans() {
  return <></>;
}

Jeans.getLayout = function getLayout(page) {
  const productInfo = { name: "Jeans", path: "Bottoms" };

  return (
    <PrimaryLayout>
      <ProductsLayout productsPage={productInfo}>{page}</ProductsLayout>
    </PrimaryLayout>
  );
};
