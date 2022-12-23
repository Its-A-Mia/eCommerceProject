import PrimaryLayout from "../../../components/PrimaryLayout";
import ProductsLayout from "../../../components/ProductsLayout";

export default function Shoes() {
  return <></>;
}

Shoes.getLayout = function getLayout(page) {
  const productInfo = { name: "Shoes", path: "Bottoms" };

  return (
    <PrimaryLayout>
      <ProductsLayout productsPage={productInfo}>{page}</ProductsLayout>
    </PrimaryLayout>
  );
};
