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
//by applying this method we reduce the contents of main function
function ListDemo() {
  // stateful variable
  let [list, setList] = useState(["delhi"]);

  let AddItemAction = () => {
    let newList = [...list, "mumbai"];

    //for trigger the dom operation for updation
    setList(newList);
  };

  return (
    <>
      {/** event binding */}
      <input type="button" value="Add new Item" onClick={AddItemAction} />
      {/**List */}
      {list.map((item) => (
        <h1>hellow world </h1>
      ))}
    </>
  );
}

export default App;
