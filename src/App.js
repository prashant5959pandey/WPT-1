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
  let string = "Hellow universe";
  let list = ["delhi", "mumbai", "calcutta"];
  // for(let i=0;i<10;i++){
  //   list.push(string);
  // }
  console.log(list);

  return (
    <>
      <h1>{string}</h1>
      {/* version 3 */}
      {list.map((item) => (
        <h1>hellow {item} </h1>
      ))}
      <hr />
      {/* version 2 */}
      {list.map((item) => "hello" + item)}
      <hr />
      {/* version 1 */}
      {list.map((item) => item)}
    </>
  );
}

//by using destructring
// function Display({ email, username }) {
//   // ====>>>> this destructring is recommended

//   return (
//     <>
//       <h1>
//         Hello {username} {email}
//       </h1>
//       <h1>{username}</h1>
//     </>
//   );
// }

export default App;
