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
 
  let list = ["", "", "" ,"",""];

  let list1=[];

  for(let i=0;i<100;i++){
    list1.push("");
  }
   
 

  return (
    <>
      <h1>{string}</h1>
      {/* version 3 */}
      {list1.map((item) => (
        <h1>hellow world </h1>
      ))}
     
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
