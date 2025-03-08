import logo from "./images/react-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="react-logo" />
      <div className="text">ReactFacts</div>
    </header>
  );
}

export default Header;
