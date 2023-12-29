import { useEffect, useState } from "react";

const Fetchapi = () =>{

    const [users,setUsers] = useState([])

    async function fetchData () {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(response);
        const data = await response.json();
        console.log(data)
        setUsers(data)
    }
    //fetchData();
    useEffect(()=>{
        fetchData();
    }, [])
    
    return(
        <>
            <h1>Fetching User Data</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      users.map(x=>{
                        return(
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.username}</td>
                                <td>{x.email}</td>
                                <td>{x.address.city}</td>
                            </tr>
                        )
                      })  
                    }
                </tbody>
            </table>
        </>
    )
}
export default Fetchapi;