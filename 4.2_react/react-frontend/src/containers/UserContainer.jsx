import { useEffect, useState } from 'react'

function UsersContainer() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async ()=>{ // here iam using the function for calling the api 
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // response is storing the saved data 
        const data = await response.json() // storing the response data into the data json 
        setUsers(data) //here the state is working to display the data 
    } 
    fetchUsers()
},[])
//     fetch('https://jsonplaceholder.typicode.com/users') // by this we can call the api in local form and 
//     // axios can be aslo used to call the api 
//     // // first fetching the data and then we are using it 
//       .then((response) => response.json()) // the json reqi
//       .then((data) => setUsers(data)) // the data is storing in the data to be used latter 
//   }, []) // and the square is used for the dependendency and intialization of dependency
// using the dependency in the [] of effect
  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default UsersContainer
