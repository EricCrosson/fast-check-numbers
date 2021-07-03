import { testProp, fc } from 'ava-fast-check'

import { fastCheckNumbers } from '../../src/index'

testProp.skip(
  'TODO: property-test fast-check-numbers',
  [
    // arbitraries
    fc.nat(),
  ],
  (
    t,
    // test arguments
    natural,
  ) => {
    // ava test here
  },
  {
    verbose: true,
  },
)
