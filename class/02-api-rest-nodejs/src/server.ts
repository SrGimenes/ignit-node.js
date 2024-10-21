import crypto from 'node:crypto'
import { title } from 'node:process'
import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/insertTransaction', async () => {
  const transaction = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transação de teste',
    amount: 1000,
  })

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server is running')
  })
