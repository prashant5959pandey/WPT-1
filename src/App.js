/** @format */

import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  let AddItemAction = () => {
    //  console.log(document.querySelector("#id"));
    // console.log(inputRef.current);
    //above lines are only for understanding....(line 19 and 20 has same meaning)
    let inputValue = inputRef.current.value;

    let newList = [...list, inputValue];

    setList(newList);

    inputRef.value = "";
  };

  return (
    <>
      <input type="text" ref={inputRef} placeholder="whatsapp...." />
      <input type="button" value="Add new Item" onClick={AddItemAction} />

      {list.map((item) => (
        <div>
          <h1>{item} </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            similique, expedita itaque harum nobis ratione ab, accusantium
            numquam error fuga hic reiciendis, esse dolorem? Quod eos modi
            dolorem, consectetur delectus quibusdam corrupti reiciendis enim
            fugiat minima hic nisi! Quae voluptatum quibusdam excepturi quasi
            quisquam dolorem veritatis esse porro, facilis assumenda.
          </p>
          <input type="button" value="&#128077;" />
          <input type="button" value="&#128078;" />
        </div>
      ))}
    </>
  );
}

export default App;
