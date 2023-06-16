/** @format */

function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo username="Prashant" email="Prashnant@gmail.com" />
      <ListDemo username="Parul" email="parul@gmail.com" />
      <ListDemo username="Aditya " email="Aditya@gmail.com" />
    </>
  );
}

function ListDemo(props) {
  // let data="Hellow universe";
  // let list=["delhi", "calcutta", "chennai"];

  return (
    <>
      <h1>Hello {props.username} {props.email}</h1>
      <h1>{props.username}</h1>
    </>
  );
}

export default App;
