function Football() {
  const shoot = (a) => {
    alert(a);
  };

  return <button onClick={() => shoot("Sabir Goal")}>Click Me</button>;
}

export default Football;
