import { differenceBy } from 'lodash'

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [1.2]

// The `_.property` iteratee shorthand.
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x')
// => [{ 'x': 2 }]
