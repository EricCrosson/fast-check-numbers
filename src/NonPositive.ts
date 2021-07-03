import * as fc from 'fast-check'
import { NonPositive } from 'io-ts-numbers'

export const NonPositiveArbitrary: fc.Arbitrary<NonPositive> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(NonPositive.is)
