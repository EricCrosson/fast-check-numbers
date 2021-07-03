import * as fc from 'fast-check'
import { Zero } from 'io-ts-numbers'

export const ZeroArbitrary: fc.Arbitrary<Zero> = fc
  .boolean()
  .map((sign) => (sign ? 0 : -0))
  .filter(Zero.is)
