const {
  tallyScore,
  stringToArray,
  multiplyCheck,
  resetConstants
} = require('../src/scrabble')

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
})

describe('multiplyCheck', () => {
  beforeEach(() => {
    resetConstants()
  })

  it("return 'score' for 'c'", () => {
    expect(multiplyCheck('c')).toEqual(false)
  })

  it("return 'score' for ']'", () => {
    expect(multiplyCheck(']')).toEqual(true)
  })
})
