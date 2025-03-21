import Fruit from "./Fruit";

const array = ["Apple", "Banana", "Orange"];
function App() {
  return (
    <>
      <ul>
        {array.map((frt, ind) => (
          <Fruit key={ind} num={ind + 1} name={frt} />
        ))}
      </ul>
    </>
  );
}

export default App;
