'use client'
import { useState, useEffect } from "react";
import Link from "@/node_modules/next/link";

export default  function Home() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const json = await response.json()
            setTodos(json);
        }
        fetchTodos();
    }, []);

    return (
        <main>
            <h1>statically generated</h1>
            {
                todos.map((todo: any) => {
                    return <p key={todo.id}>{todo.title} - {todo.completed}</p>
                })
            }
            <Link href={"/about"}>Navigate to about page</Link>
        </main>
    )
}
