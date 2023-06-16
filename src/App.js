import "./App.css";

function App() {
  return (
    <>
      <h1>My App</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let list = ["Delhi", "Mumbai", "Calcutta"];
  return (
    <>
      {list.map((item) => (
        <>
          <h1>Hello</h1>
          <h1>Welcome</h1>
        </>
      ))}
      {list.map((item) => "Hello " + item)}
      {list.map((item) => item)}
    </>
  );
}

export default App;
