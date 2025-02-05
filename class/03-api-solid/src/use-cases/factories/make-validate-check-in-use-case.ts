import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history'
import { ValidatedCheckInUseCase } from '../validated-check-in'

export function makeValidatedCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidatedCheckInUseCase(checkInsRepository)

  return useCase
}
