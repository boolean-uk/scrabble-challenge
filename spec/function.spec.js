const {
  tallyScore,
  stringToArray,
  scoreOrMultiply
} = require('../src/scrabble')

const { VALID_SCORE } = require('../src/constants')

describe('tallyScore', () => {
  it('return 6 for [1, 2, 3]', () => {
    console.log('VALID_SCORE :>> ', VALID_SCORE)
    expect(tallyScore([1, 2, 3])).toEqual(6)
  })

  it('return 18 for [6, 6, 6]', () => {
    console.log('VALID_SCORE :>> ', VALID_SCORE)
    expect(tallyScore([6, 6, 6])).toEqual(18)
  })

  it('return 95 for [3, 6, 1, 47, 38]', () => {
    console.log('VALID_SCORE :>> ', VALID_SCORE)
    expect(tallyScore([3, 6, 1, 47, 38])).toEqual(95)
  })
})

describe('stringToArray', () => {
  it("return ['h', 'i'] for 'hi'", () => {
    console.log('VALID_SCORE :>> ', VALID_SCORE)
    expect(stringToArray('hi')).toEqual(['h', 'i'])
  })

  it("return ['g', 'o', 'o', 'd', ' ', 'd', 'a', 'y'] for 'hi'", () => {
    console.log('VALID_SCORE :>> ', VALID_SCORE)
    expect(stringToArray('good day')).toEqual([ 'g', 'o', 'o', 'd', ' ', 'd', 'a', 'y']) // prettier-ignore
  })
})

describe('scoreOrMultiply', () => {
  it("return 'score' for 'c'", () => {
    console.log('VALID_SCORE :>> ', VALID_SCORE)
    expect(scoreOrMultiply('c')).toEqual('score')
  })

  it("return 'score' for ']'", () => {
    console.log('VALID_SCORE :>> ', VALID_SCORE)
    expect(scoreOrMultiply(']')).toEqual('multiply')
  })
})
