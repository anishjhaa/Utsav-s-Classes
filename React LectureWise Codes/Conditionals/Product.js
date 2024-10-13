function Product({ Title, Price, features }) {
  // let discount = price > 3000 ? "5%" : null;
  return (
    <div className="Product">
      <h3>{Title}</h3>
      <h2>{Price}</h2>
      {/* <p>{discount}</p> */}
      {/* {price > 3000 ? <p>"5%"</p> : null} */}
      {Price > 3000 && <p>"5%"</p>}
    </div>
  );
}
export default Product;
