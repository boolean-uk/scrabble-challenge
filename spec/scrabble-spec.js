// Note: you shouldn't need to change anything in this file.

const scrabble = require('../src/scrabble')

describe("Scrabble", () => {
  it('returns 0 for empty words', () => {
    expect(scrabble('')).toEqual(0)
  })

  it('returns 0 for whitespace', () => {
    expect(scrabble(" \t\n")).toEqual(0)
  })

  it('returns 0 for null', () => {
    expect(scrabble(null)).toEqual(0)
  })

  it('scores short word', () => {
    expect(scrabble('a')).toEqual(1)
  })

  it('scores short word', () => {
    expect(scrabble('f')).toEqual(4)
  })

  it('scores a simple word', () => {
    expect(scrabble('street')).toEqual(6)
  })

  it('scores a more complicated word', () => {
    expect(scrabble('quirky')).toEqual(22)
  })

  it('scores a case-insensitive word', () => {
    expect(scrabble('OXYPHENBUTAZONE')).toEqual(41)
  })
  it('scores a double letter', () => {
    expect(scrabble('double{t}{h}{e}{s}{e}')).toEqual(25)
  })
  it('scores a triple letter', () => {
    expect(scrabble('tri[p]le[p]')).toEqual(23)
  })
  it('scores a double word', () => {
    expect(scrabble('{twice}')).toEqual(20)
  })
  it('scores a triple word', () => {
    expect(scrabble('[c[h]oreo{g}raphy]')).toEqual(108)
  })
})
