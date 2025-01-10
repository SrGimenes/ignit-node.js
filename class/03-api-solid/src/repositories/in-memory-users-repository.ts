import type { Prisma } from '@prisma/client'

export class InMemoryUsersRepository {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  public users: any[] = []

  async create(data: Prisma.UserCreateInput) {
    this.users.push(data)
  }
}
