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
    //by using destructring
  function ListDemo({email, username}) { // ====>>>> this destructring is recommended
  // let data="Hellow universe";
  // let list=["delhi", "calcutta", "chennai"];

  return (
    <>
      <h1>Hello {username} {email}</h1>
      <h1>{username}</h1>
    </>
  );
}

export default App;
