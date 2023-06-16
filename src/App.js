/** @format */

import { useState } from "react";

function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let [list, setList] = useState(["delhi"]);

  let AddItemAction = () => {
    let inputRef = document.getElementById(`id1`);
    let inputValue = inputRef.value;

    let newList = [...list, inputValue];

    setList(newList);
    inputRef.value = "";
  };

  return (
    <>
      <input type="text" id="id1" placeholder="whatsapp...." />
      <input type="button" value="Add new Item" onClick={AddItemAction} />

      {list.map((item) => (
        <h1>{item} </h1>
      ))}
    </>
  );
}

export default App;
