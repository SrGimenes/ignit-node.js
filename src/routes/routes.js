import { randomUUID } from "node:crypto";
import { Database } from "../database/dataBase.js";


const database = new Database();

export const routes = [
  {
    method: "GET",
    path: ("/tasks"),
    handler: (req, res) => {
      const tasks = database.select("tasks");
      return res.end(JSON.stringify(tasks));
    }
  },
  {
    method: "POST",
    path: ("/tasks"),
    handler: (req, res) => {

      const { title, description } = req.body;

      if(title === null || undefined){
        return res.writeHead(400).end(
          JSON.stringify({message: 'Please inform a title'})
        )
      }
      
      if(description === null || undefined){
        return res.writeHead(400).end(
          JSON.stringify({message: 'Please inform the description'})
        )
      }

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      }
      
      if(task.completed_at === null) {
        return res.writeHead("Essa task ainda não foi concluída")
      }

      if(task.updated_at === null) {
        return res.writeHead("Essa task não foi atualizada")
      }
      
      database.insert("tasks", task)
    }
  },
  {
    method: 'PUT',
    path: ("/tasks/id:"),
    handler: (req, res) => {
      const { id } = req.params;
      const {title, description } = req.body;
    }

  }
]