import { useEffect, useState } from "react";

const Userdeatils = () => {

    const [users, setUsers] = useState([])

    
    async function usersData () {
        const response = await fetch("https://reqres.in/api/users?page");
        console.log(response)

        const result = await response.json();
        console.log(result)
        console.log(result.data)
        setUsers(result.data)
    }
    useEffect(()=>{
        usersData();
    },[])
    
    return(
        <>
            <h1>The User Details are as below:-</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(emp=>{
                            return(
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td><img src={emp.avatar}/></td>
                                    <td>{emp.first_name}</td>
                                    <td>{emp.last_name}</td>
                                    <td>{emp.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Userdeatils;