import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidatedCheckInUseCase } from '../validated-check-in'

export function makeValidatedCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidatedCheckInUseCase(checkInsRepository)

  return useCase
}
