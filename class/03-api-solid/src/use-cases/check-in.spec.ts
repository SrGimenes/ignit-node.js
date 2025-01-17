import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CheckInUseCase } from './check-in'

let CheckInsRepository: InMemoryCheckInsRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
  beforeEach(() => {
    CheckInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInUseCase(CheckInsRepository)
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user_01',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
