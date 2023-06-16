/** @format */

function App() {
  return (
    <>
      <h1>Props Demo</h1>
      <ListDemo/>
    </>
  );
}
//by applying this method we reduce the contents of main function
function ListDemo() {
  let string ="Hellow universe";
  let list=["delhi","mumbai", "calcutta"];
  // for(let i=0;i<10;i++){
  //   list.push(string);
  // }
  console.log(list);

  return (
    <>
     <h1>{string}</h1>
     {/* for each is the consumer function ..so it doesn't return */}
     {/**  {list.forEach((item)=>item)}; */}
     
     {/* map function  takes input and return output*/}
     {list.map((item)=>item)};
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
