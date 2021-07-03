import * as fc from 'fast-check'
import { Positive } from 'io-ts-numbers'

export const PositiveArbitrary: fc.Arbitrary<Positive> = fc
  .tuple(fc.float(), fc.integer())
  .map(([f, i]) => f * i)
  .filter(Positive.is)
