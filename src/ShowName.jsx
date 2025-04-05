function Product(props) {
  if (props.stock) {
    return (
      <>
        <p>Product Name: {props.name}</p>
        <p>Product price: {props.price}</p>
      </>
    );
  } else {
    return <h2>{props.name} is not available</h2>;
  }
}

export default Product;
