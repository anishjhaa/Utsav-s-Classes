import Product from "./Product";

function ProductTab() {
  return (
    <>
      <Product title="pen" Price="30k" />
      <Product title="pencil" Price="10k" />
      {/* Passing no via props */}
      <Product title="home" Price={100900} />
    </>
  );
}
export default ProductTab;
