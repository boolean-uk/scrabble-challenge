/* eslint-disable prettier/prettier */
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
  it('scores a word containing a single double character', () => {
    expect(scrabble('b{a}ggage')).toEqual(13)
  })
  it('scores a word containing multiple double characters', () => {
    expect(scrabble('Oxy{moro}n')).toEqual(27)
  })
  it('scores a word containing a single triple character', () => {
    expect(scrabble('Anyth[i]ng')).toEqual(23)
  })
  it('scores a word containing multiple triple characters', () => {
    expect(scrabble('Oxy[moro]n')).toEqual(41)
  })
})
