import * as fc from 'fast-check'
import { NonZero } from 'io-ts-numbers'

export const NonZeroArbitrary: fc.Arbitrary<NonZero> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(NonZero.is)
