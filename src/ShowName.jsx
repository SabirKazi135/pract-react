function Football() {
  function handle(event) {
    event.preventDefault();
    console.log("Form summiited");
    document.getElementById("gh").value = "";
  }

  return (
    <>
      <form action="" onSubmit={handle}>
        <input type="text" id="gh" />
        <input type="submit" />
      </form>
    </>
  );
}

export default Football;
