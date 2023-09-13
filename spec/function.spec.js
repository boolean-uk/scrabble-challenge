// const { LETTERSCORES, SCOREMULTIPLIER } = require('../src/constants')
let { MULTIPLE } = require('../src/constants')
const {
  tallyScore,
  stringToArray,
  scoreOrMultiply,
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

describe('stringToArray', () => {
  it("return ['h', 'i'] for 'hi'", () => {
    expect(stringToArray('hi')).toEqual(['h', 'i'])
  })

  it("return ['g', 'o', 'o', 'd', ' ', 'd', 'a', 'y'] for 'hi'", () => {
    expect(stringToArray('good day')).toEqual([
      'g',
      'o',
      'o',
      'd',
      ' ',
      'd',
      'a',
      'y'
    ])
  })
})

describe('scoreOrMultiply', () => {
  it("return 'score' for 'c'", () => {
    expect(scoreOrMultiply('c')).toEqual('score')
  })

  it("return 'score' for ']'", () => {
    expect(scoreOrMultiply(']')).toEqual('multiply')
  })
})

describe('scoreMultiplicatorizer', () => {
  it("set MULTIPLE to 2 for '{'", () => {
    MULTIPLE = scoreMultiplicatorizer('{')

    expect(MULTIPLE).toEqual(2)
  })

  it("set MULTIPLE to 1 for '}'", () => {
    MULTIPLE = scoreMultiplicatorizer('}')

    expect(MULTIPLE).toEqual(1)
  })

  it("set MULTIPLE to 3 for '['", () => {
    MULTIPLE = scoreMultiplicatorizer('[')

    expect(MULTIPLE).toEqual(3)
  })

  it("set MULTIPLE to 1 for ']'", () => {
    MULTIPLE = scoreMultiplicatorizer(']')

    expect(MULTIPLE).toEqual(1)
  })

  it("keep MULTIPLE the same for 'a'", () => {
    MULTIPLE = scoreMultiplicatorizer('a')

    expect(MULTIPLE).toEqual(MULTIPLE)
  })
})
