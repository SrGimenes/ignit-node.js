import http from "node:http"
import { routes } from "./routes/routes.js"
import { json } from "./middlewares/json.js"


const server = http.createServer(async (req, res) => {
  const { method, url } = req
  await json(req, res)
  
  const route = routes.find(route => {
    return route.method === method && route.path === url
  })

  if(route) {
    return route.handler(req, res)
  }

  console.log(route)
})

const port = 3333

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
