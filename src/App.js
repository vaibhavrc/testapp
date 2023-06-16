import "./App.css";
import {useState} from "react";

function App() {
  return (
    <>
      <h1>My App</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let [list,setList]=useState(["delhi"]);
  let addCity=()=>{
    let newList=[...list,"mumbai"];
    setList(newList);
  }
  return(
    <>
    <h1>List</h1>
    <input type="button" value="ClickMe" onClick={addCity} />
    {list.map((item)=>"Hello"+item)}
    </>
  )
}

export default App;
