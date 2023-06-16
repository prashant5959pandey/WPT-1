/** @format */

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
  return (
    <>
      <Display />
      <Display username="Prashant" email="Prashnant@gmail.com" />
      <Display username="Parul" email="parul@gmail.com" />
      <Display username="Aditya " email="Aditya@gmail.com" />
    </>
  );
}

//by using destructring
function Display({ email, username }) {
  // ====>>>> this destructring is recommended

  return (
    <>
      <h1>
        Hello {username} {email}
      </h1>
      <h1>{username}</h1>
    </>
  );
}

export default App;
