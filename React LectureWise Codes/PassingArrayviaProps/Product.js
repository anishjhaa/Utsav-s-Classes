function Product({ Title, Price, features }) {
  return (
    <div className="Product">
      <h3>{Title}</h3>
      <h2>{Price}</h2>
      {/* <p>{features}</p> */}
      <p>{features.a}</p>
    </div>
  );
}
export default Product;
