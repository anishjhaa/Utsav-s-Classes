// function Product(props) {
// function Product({ Title, Price = 1 }) { by default
function Product({ Title, Price }) {
  return (
    <div className="Product">
      {/* <h3>Product Title</h3> */}
      {/* <h2>Product description</h2> */}
      {/* <h3>props.Title</h3> */}
      <h3>{Title}</h3>
      <h2>{Price}</h2>
    </div>
  );
}
export default Product;
