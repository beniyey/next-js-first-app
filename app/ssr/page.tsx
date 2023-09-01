import Link from "@/node_modules/next/link";

export const revalidate = 1;

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const json = await response.json()
  return json
}

export default async function SSR() {

  const todos = await fetchTodos()


  return (
    <main>
      <h1>server side generated</h1>
      {
        todos.map((todo: any) => {
          return <p key={todo.id}>{todo.title} - {todo.completed}</p>
         })
      }
      <Link href={"/about"}>Navigate to about page</Link>
    </main>
  )
}
