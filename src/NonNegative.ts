import * as fc from 'fast-check'
import { NonNegative } from 'io-ts-numbers'

export const NonNegativeArbitrary: fc.Arbitrary<NonNegative> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(NonNegative.is)
