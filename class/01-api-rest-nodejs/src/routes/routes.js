import { randomUUID } from 'node:crypto'
import { Database } from '../database/dataBase.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: '/tasks',
    handler: (req, res) => {
      const tasks = database.select('tasks')
      return res.end(JSON.stringify(tasks))
    },
  },
  {
    method: 'POST',
    path: '/tasks',
    handler: (req, res) => {
      const { title, description } = req.body

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      }

      database.insert('tasks', task)

      return res.writeHead(201).end()
    },
  },
  {
    method: 'PUT',
    path: '/tasks/:id',
    handler: async (req, res) => {
      try {
        await json(req, res)

        const { id } = req.params
        console.log('Received ID:', id)

        console.log('Request body:', req.body)

        const { title, description } = req.body || {}
        console.log('Title:', title)
        console.log('Description:', description)

        if (!title && !description) {
          console.log('Invalid input: title and description are empty')
          return res
            .writeHead(400)
            .end(
              JSON.stringify({ message: 'title or description are required' })
            )
        }

        const [task] = database.select('tasks', { id })
        console.log('Task found:', task)

        if (!task) {
          console.log('Task not found')
          return res.writeHead(404).end()
        }

        const updatedTask = database.update('tasks', id, {
          title: title ?? task.title,
          description: description ?? task.description,
          updated_at: new Date(),
        })
        console.log('Updated task:', updatedTask)

        if (!updatedTask) {
          console.log('Failed to update task')
          return res
            .writeHead(500)
            .end(JSON.stringify({ message: 'Failed to update task' }))
        }

        console.log('Task updated successfully')
        return res.writeHead(204).end()
      } catch (error) {
        console.error('Error in PUT /tasks/:id:', error)
        return res
          .writeHead(500)
          .end(JSON.stringify({ message: 'Internal server error' }))
      }
    },
  },
]
