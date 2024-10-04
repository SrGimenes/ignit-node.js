import { randomUUID } from "node:crypto";
import { Database } from "../database/dataBase.js";
import { uptime } from "node:process";


const database = new Database();

export const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: (req, res) => {
      const tasks = database.select("tasks");
      return res.end(JSON.stringify(tasks));
    }
  },
  {
    method: "POST",
    path: "/tasks",
    handler: (req, res) => {
      const { title, description } = req.body

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      }

      database.insert('tasks', task)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'PUT',
    path: ("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const {title, description } = req.body;

      const taskUpdate = database.select("tasks", {id})

      if(!taskUpdate) {
        return res.writeHead(404).end()
      }

      database.update("tasks", id, {
        title,
        description,
        updated_at: new Date()
      })

      return res.writeHead(204).end()

    }
  }
]