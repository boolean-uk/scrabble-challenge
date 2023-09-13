// Note: you shouldn't need to change anything in this file.

const { scrabble } = require('../src/scrabble')
const { VALID_SCORE } = require('../src/constants')

describe('Scrabble', () => {
  it('returns 0 for empty words', () => {
    console.log('VALID_SCORE :>>', VALID_SCORE)
    expect(scrabble('')).toEqual(0)
  })

  it('returns 0 for whitespace', () => {
    console.log('VALID_SCORE :>>', VALID_SCORE)
    expect(scrabble(' \t\n')).toEqual(0)
  })

  it('returns 0 for null', () => {
    console.log('VALID_SCORE :>>', VALID_SCORE)
    expect(scrabble(null)).toEqual(0)
  })

  it('scores short word', () => {
    console.log('VALID_SCORE :>>', VALID_SCORE)
    expect(scrabble('a')).toEqual(1)
  })

  it('scores short word', () => {
    console.log('VALID_SCORE :>>', VALID_SCORE)
    expect(scrabble('f')).toEqual(4)
  })

  it('scores a simple word', () => {
    console.log('VALID_SCORE :>>', VALID_SCORE)
    expect(scrabble('street')).toEqual(6)
  })

  it('scores a more complicated word', () => {
    console.log('VALID_SCORE :>>', VALID_SCORE)
    expect(scrabble('quirky')).toEqual(22)
  })

  it('scores a case-insensitive word', () => {
    console.log('VALID_SCORE :>>', VALID_SCORE)
    expect(scrabble('OXYPHENBUTAZONE')).toEqual(41)
  })
})
