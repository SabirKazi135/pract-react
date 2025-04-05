import Product from "./ShowName";

function App() {
  return (
    <>
      <Product stock={true} name="product1" price={100} />
      <Product stock={false} name="product2" price={150} />
      <Product stock={true} name="product3" price={200} />
      <Product stock={true} name="product4" price={300} />
    </>
  );
}

export default App;
