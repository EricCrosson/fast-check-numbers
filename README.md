# fast-check-numbers
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/fast-check-numbers)
[![Build status][]](https://travis-ci.org/EricCrosson/fast-check-numbers)
[![Code Coverage][]](https://codecov.io/gh/EricCrosson/fast-check-numbers)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/fast-check-numbers.svg
[Build status]: https://travis-ci.org/EricCrosson/fast-check-numbers.svg?branch=master
[Code Coverage]: https://codecov.io/gh/EricCrosson/fast-check-numbers/branch/master/graph/badge.svg

> fast-check arbitraries for narrowed numeric types

## Install

``` shell
npm install fast-check-numbers
```

## Use

``` typescript
import * as fc from 'fast-check'
import { PositiveArbitrary } from 'fast-check-numbers'

fc.sample(PositiveArbitrary, 1)
// => [ 1018.612465441227 ]
```

## Related

- [io-ts-numbers](https://github.com/EricCrosson/io-ts-numbers)

## Acknowledgments

- [fast-check](https://github.com/dubzzz/fast-check)
