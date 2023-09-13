const {
  tallyScore,
  stringToArray,
  scoreMultiplicatorizer
} = require('../src/scrabble')

describe('tallyScore', () => {
  it('return 6 for [1, 2, 3]', () => {
    expect(tallyScore([1, 2, 3])).toEqual(6)
  })

  it('return 18 for [6, 6, 6]', () => {
    expect(tallyScore([6, 6, 6])).toEqual(18)
  })

  it('return 95 for [3, 6, 1, 47, 38]', () => {
    expect(tallyScore([3, 6, 1, 47, 38])).toEqual(95)
  })

})
