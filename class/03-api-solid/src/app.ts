import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Gabriel',
    email: 'gimenes.alencar2002@gmail.com',
  },
})
