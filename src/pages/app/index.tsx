import { GetServerSideProps } from "next";
import { prismaClient } from "../../prisma";
import { signOut } from "next-auth/react";
import { Task } from "@prisma/client";

type TasksProps = {
  tasks: Task[]
}

export default function App({ tasks }: TasksProps) {
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