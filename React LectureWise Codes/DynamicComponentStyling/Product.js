function Product({ Title, Price, features }) {
  //   let styles = { backgroundColor: "blue" };
  let styles = { backgroundColor: Price > 3000 ? "blue" : "" };
  return (
    <div className="Product" style={styles}>
      <h3>{Title}</h3>
      <h2>{Price}</h2>
      {Price > 3000 && <p>"5%"</p>}
    </div>
  );
}
export default Product;
