import { type Knex, knex as stupKnex } from 'knex'
import { env } from './env'

if (!process.env.DATABASE_URL) {
  throw new Error('Invalid filename')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = stupKnex(config)
