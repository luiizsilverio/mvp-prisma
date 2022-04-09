import { NextApiRequest, NextApiResponse } from "next";
import { prismaClient } from "../../../prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { title } = req.body;

  await prismaClient.task.create({
    data: {
      title,
      isDone: false,
      updatedAt: new Date()
    }
  })

  return res.status(201).json({})
}