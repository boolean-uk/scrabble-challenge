// Note: you shouldn't need to change anything in this file.

const scrabble = require('../src/new_scrabble.js')

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

  it('scores short word a', () => {
    expect(scrabble('a')).toEqual(1)
  })

  it('scores short word f', () => {
    expect(scrabble('f')).toEqual(4)
  })

  it('scores a simple word street', () => {
    expect(scrabble('street')).toEqual(6)
  })

  it('scores a more complicated word', () => {
    expect(scrabble('quirky')).toEqual(22)
  })

  it('scores a case-insensitive word', () => {
    expect(scrabble('OXYPHENBUTAZONE')).toEqual(41)
  })

  it('scores a doubled character', () => {
    expect(scrabble('d{o}g')).toEqual(6)
  })

  it('scores a tripled character', () => {
    expect(scrabble('d[o]g')).toEqual(7)
  })

  it('scores a doubled word', () => {
    expect(scrabble('{dog}')).toEqual(10)
  })

  it('scores a tripled word', () => {
    expect(scrabble('[dog]')).toEqual(15)
  })
})
