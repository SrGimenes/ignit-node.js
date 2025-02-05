import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserMetricsUseCase } from '../get-user-metrics'
import { GetUserProfileUseCase } from '../get-user-profile'
import { CheckInsRepository } from './../../repositories/check-ins-repository'

export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new GetUserMetricsUseCase(checkInsRepository)

  return useCase
}
