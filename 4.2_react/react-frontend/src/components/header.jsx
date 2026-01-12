// function Header(){
//     return (
//         <div>
//             this is a header
//         </div>
//     )
// }
//using the props in the header function 
function Header(props) {
  return (
    <h1>Welcome, {props.username}</h1>

//     function Header(props) {
//   return <h1>{props.title}</h1> here we are using the prop destructuring by which which canuse different perameter 
// }


  )
}

export default Header
