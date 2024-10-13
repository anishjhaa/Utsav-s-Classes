import Product from "./Product";

function ProductTab() {
  let options = [<li>"good"</li>, <li>"affordable"</li>];
  let options2 = { a: "durable", b: "easy" };
  return (
    <>
      <Product title="pen" Price="30k" features={options} />
      <Product title="pencil" Price="10k" features={options2} />
      <Product title="home" Price={100900} />
    </>
  );
}
export default ProductTab;
