import "./App.css";
import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My App</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let [list, setList] = useState(["delhi"]);
  let inputRef = useRef();
  let addCity = () => {
    let newList = [...list, inputRef.current.value];
    setList(newList);
    inputRef.current.value = "";
  };
  return (
    <>
      <h1>List</h1>
      <input type="text" id="myinput" ref={inputRef} placeholder="enter text" />
      <input type="button" value="ClickMe" onClick={addCity} />
      {list.map((item) => (
        <MessageDemo city={item} />
      ))}
    </>
  );
}
function MessageDemo({ city }) {
  return (
    <>
      <h1>{city}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere sint,
        vitae modi expedita consequuntur doloribus possimus suscipit neque minus
        deserunt?
      </p>
      <div>
        <input type="button" value="&#128077;" />
        <input type="button" value="&#128078;" />
      </div>
    </>
  );
}

export default App;
