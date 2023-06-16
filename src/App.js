import "./App.css";

function App() {
  return (
    <>
      <h1>My App</h1>
      <MessageDemo name="Vaibhav" email="1" />
      <MessageDemo email="2" name="Vaibhavv" />
    </>
  );
}

function MessageDemo({ email, name }) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </>
  );
}

export default App;
