import { FormEvent, useState } from "react";
import { GetServerSideProps } from "next";
import { signOut } from "next-auth/react";
import { prismaClient } from "../../prisma";
import { Task } from "@prisma/client";

type TasksProps = {
  tasks: Task[]
}

export default function App({ tasks }: TasksProps) {
  const [newTask, setNewTask] = useState('')

  async function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    await fetch('http://localhost:3000/api/tasks/create', {
      method: 'POST',
      body: JSON.stringify({ title: newTask }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <h1 className="text-4xl">Tarefas</h1>
      <ul className="text-lg">
        {
          tasks.map(task => (
            <li key={task.id}>{ task.title }</li>
          ))
        }
      </ul>
      <form onSubmit={handleCreateTask}>
        <input type="text" value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Sair</button>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const tasks = await prismaClient.task.findMany({
    where: {
      isDone: false,
    }
  })

  const data = tasks.map(task => ({
    id: task.id,
    title: task.title,
    isDone: task.isDone,
    createdAt: task.createdAt.toISOString()
  }))

  return {
    props: {
      tasks: data
    }
  }
}