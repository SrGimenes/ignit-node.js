import 'dotenv/config'
import { emitWarning } from 'node:process'
import { workerData } from 'node:worker_threads'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid enviroment variables!', _env.error.format())

  throw new Error('Invalid enviroment variables!')
}

export const env = _env.data

// Exercício 1

// const userNameSchema = z.string().min(3, "Mínimo 3 caracteres").max(20)

// userNameSchema.parse('João')

// console.log(userNameSchema.safeParse('Jo'))

// Exercício 2

// const userSchema = z.object({
//   email: z.string().email(),
//   age: z.number().min(18).max(100),
//   apelido: z.string().min(2).optional(),
// })

// const user = {
//   email: 'email@gmail.com',
//   age: 25,
// }

// const { success, error } = userSchema.safeParse(user)

// console.log(success)
// console.log(error)

// Exercicio 3

// const cartSchema = z.object({
//   clientId: z.string().uuid(),
//   products: z.array(
//     z.object({
//       name: z.string().min(3),
//       price: z.number().min(0),
//       qtd: z.number().min(0),
//       categories: z.array(z.string()).min(1),
//     })
//   ),
// })

// const cart = {
//   clientId: crypto.randomUUID(),
//   products: [
//     {
//       name: 'Macbook',
//       price: 5000,
//       qtd: 1,
//       categories: ['Eletronico', 'Computador'],
//     },
//   ],
// }
// const { success, error } = cartSchema.safeParse(cart)
// console.log(success)
// console.log(error)

// Exercicio 4

// const userSchema = z.object({
//   name: z.string().min(2),
//   workDays: z.array(
//     z.string().transform(day => day.slice(0, 3).toLocaleLowerCase())
//   ),
// })

// const user = {
//   name: 'Er',
//   workDats: ['segund', 'terça', 'quarta', 'quinta'],
// }

// const { success, data } = userSchema.safeParse(user)
// console.log(data)

// const orderSchema = z
//   .object({
//     size: z.enum(['P', 'M', 'G']),
//     flavor: z.string().min(3),
//     extras: z.array(z.string().min(1).optional()),
//     price: z.number().optional(),
//   })
//   .transform(order => {
//     const basePrice = {
//       P: 20,
//       M: 30,
//       G: 40,
//     }[order.size]

//     const extrasPrice = (order.extras?.length || 0) * 5
//     return {
//       ...order,
//       price: basePrice + extrasPrice,
//     }
//   })

// const order = {
//   size: 'G',
//   flavor: 'Provolone',
// }

// const { success, data } = orderSchema.safeParse(order)
// console.log(data)

// Exercicio 5

// const userSchema = z.object({
//   name: z.string().min(2),
//   instagram: z
//     .string()
//     .url()
//     .refine(url => url.includes('instagram.com'), {
//       message: 'Coloque a URL do instagram',
//     })
//     .optional(),
// })

// const user = {
//   name: 'Gabriel',
//   instagram: 'https://www.instagram.com/gab.gimenezz/',
// }

// const { error } = userSchema.safeParse(user)
// console.log(error)

// const devSchema = z
//   .object({
//     name: z.string().min(5),
//     email: z.string().email(),
//     ppl: z.string().min(2),
//     level: z.enum(['junior', 'pleno', 'senior']),
//     experienceInYears: z.number().min(1).max(30),
//     technologies: z.array(z.string()).min(1),
//   })
//   .refine(
//     dev => {
//       if (dev.level === 'senior') {
//         return dev.experienceInYears >= 5 && dev.technologies.length >= 2
//       }

//       return true
//     },
//     { message: 'Não pode ser senior' }
//   )

// const seniorNãoPassou = {
//   name: 'Gabriel',
//   email: 'g@gmail.com',
//   ppl: 'Js',
//   level: 'senior',
//   experienceInYears: 3,
//   technologies: ['React', 'Node.js'],
// }

// console.log(devSchema.safeParse(seniorNãoPassou))
