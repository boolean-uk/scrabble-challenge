// Note: you shouldn't need to change anything in this file.

const scrabble = require('../src/scrabble')

describe('Scrabble', () => {
  it('returns 0 for empty words', () => {
    expect(scrabble('')).toEqual(0)
  })

  it('returns 0 for whitespace', () => {
    expect(scrabble(' \t\n')).toEqual(0)
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
  it('scores double letters', () => {
    expect(scrabble('g{o}{o}d')).toEqual(8)
  })
  it('scores triple letters', () => {
    expect(scrabble('g[o][o]d')).toEqual(10)
  })
  it('scores double letters', () => {
    expect(scrabble('s{t}re{e}t')).toEqual(8)
  })
  it('scores double and triple letters', () => {
    expect(scrabble('s{t}re[e]t')).toEqual(9)
  })
  it('scores double words', () => {
    expect(scrabble('{good}')).toEqual(12)
  })
  it('scores triple words', () => {
    expect(scrabble('[good]')).toEqual(18)
  })
})
