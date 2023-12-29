import { useEffect, useState } from "react";

const Todoapi = () => {

    const [todos, setTodos] = useState([])

    async function todoData () {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response)
        const result = await response.json();
        console.log(result)
        setTodos(result)
    } 
    useEffect(()=>{
        todoData();
    },[])
    
    return(
        <>
            <h1>I am TO-DO API List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>To-Do Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(task=>{
                            return(
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Todoapi;