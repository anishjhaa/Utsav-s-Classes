function handleSubmitButton(event) {
  event.preventDefault();
  console.log("Button clicked");
}
function Form() {
  return (
    // <form>
    //   <input placeholder="Write something here"></input>
    //   <button onClick={handleSubmitButton}>Submit</button>
    // </form>
    <form onSubmit={handleSubmitButton}>
      <input placeholder="Write something here"></input>
      <button>Submit</button>
    </form>
  );
}
