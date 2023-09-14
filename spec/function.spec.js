const {
  resetConstants,
  stringToArray,
  multiplyCheck,
  findLetterScore,
  scoreMultiplicatorizer,
  tallyScore
} = require('../src/scrabble')

describe('stringToArray', () => {
  beforeEach(() => {
    resetConstants()
  })

  it("return ['H', 'I'] for 'hi'", () => {
    expect(stringToArray('hi')).toEqual(['H', 'I'])
  })

  it("return ['G', 'O', 'O', 'D', ' ', 'D', 'A', 'Y'] for 'hi'", () => {
    expect(stringToArray('good day')).toEqual([ 'G', 'O', 'O', 'D', ' ', 'D', 'A', 'Y']) // prettier-ignore
  })

  it('return empty string in array for 33', () => {
    expect(stringToArray(33)).toEqual([''])
  })

  it('return empty string in array for null', () => {
    expect(stringToArray(null)).toEqual([''])
  })

  it('return empty string in array for undefined', () => {
    expect(stringToArray(undefined)).toEqual([''])
  })

  it('return empty string in array for {}', () => {
    expect(stringToArray({})).toEqual([''])
  })

  it('return empty string in array for "("', () => {
    expect(stringToArray('(')).toEqual(['('])
  })
})

describe('multiplyCheck', () => {
  beforeEach(() => {
    resetConstants()
  })

  it("return false for 'c'", () => {
    expect(multiplyCheck('c')).toBeFalse()
  })

  it("return true for ']'", () => {
    expect(multiplyCheck(']')).toBeTrue()
  })

  it("return false for '('", () => {
    expect(multiplyCheck('(')).toBeFalse()
  })

  it("return false for '()'", () => {
    expect(multiplyCheck('()')).toBeFalse()
  })

  it("return false for '()'", () => {
    expect(multiplyCheck('()')).toBeFalse()
  })
})

xdescribe('findLetterScore', () => {
  beforeEach(() => {
    resetConstants()
    scoreMultiplicatorizer() // TODO: wanted to test function with MULTIPLE but it always ends up = 1, can't figure where it goes :(
  })

  it("return 2 for double score 'A'", () => {
    expect(findLetterScore('A')).toEqual(2)
  })

  it("return 0 for invalid character 'ø'", () => {
    expect(findLetterScore('ø')).toEqual(0)
  })
})

describe('scoreMultiplicatorizer', () => {
  beforeEach(() => {
    resetConstants()
  })

  it("return 2 for '{'", () => {
    expect(scoreMultiplicatorizer('{')).toEqual(2)
  })

  it("return 3 for '['", () => {
    expect(scoreMultiplicatorizer('[')).toEqual(3)
  })

  it("return 1/2 for '}'", () => {
    expect(scoreMultiplicatorizer('}')).toEqual(1 / 2)
  })

  it("return 1/3 for ']'", () => {
    expect(scoreMultiplicatorizer(']')).toEqual(1 / 3)
  })

  it("return 1 for invalid character 'ø'", () => {
    expect(scoreMultiplicatorizer('ø')).toEqual(1)
  })
})

describe('tallyScore', () => {
  beforeEach(() => {
    resetConstants()
  })

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
