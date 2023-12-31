import Link from "@/node_modules/next/link";

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const json = await response.json()
  return json
}

export default async function Home() {

  const todos = await fetchTodos()


  return (
    <main>
      <h1>statically generated</h1>
      {
        todos.map((todo: any) => {
          return <p key={todo.id}>{todo.title} - {todo.completed}</p>
         })
      }
    </main>
  )
}
