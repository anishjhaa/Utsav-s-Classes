import Product from "./Product";

function ProductTab() {
  let options = ["good", "affordable"];
  let options2 = { a: "durable", b: "easy" };
  return (
    <>
      {/* <Product title="pen" Price="30k" features={options} /> */}
      <Product title="pen" Price="30k" features={["good", "affordable"]} />
      <Product title="pencil" Price="10k" features={options2} />
      <Product title="home" Price={100900} />
    </>
  );
}
export default ProductTab;
