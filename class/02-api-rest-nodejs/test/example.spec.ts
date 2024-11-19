import { createServer } from 'node:http'
import request from 'supertest'
import { afterAll, beforeAll, expect, test } from 'vitest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('user can create a new transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 5000,
      type: 'credit',
    })
    .expect(201)
})
