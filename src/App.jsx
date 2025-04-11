import "./App.css";

function LogIn(props) {
  if (props.isLoggedIn) {
    return <h2>Yes it is Loged In</h2>;
  }
  return <h2>No Not loggin in</h2>;
}

function App() {
  return (
    <>
      <LogIn isLoggedIn={false} />
    </>
  );
}

export default App;
