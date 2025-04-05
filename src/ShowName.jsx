function Football() {
  const shoot = () => {
    const para = document.getElementById("main");
    para.innerText = "Button Clicked";
  };

  return (
    <>
      <h2 id="main">Not clicked</h2>
      <button onClick={shoot}>Click me</button>
    </>
  );
}

export default Football;
