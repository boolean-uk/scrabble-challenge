// Note: you shouldn't need to change anything in this file.

Scrabble = require('../src/scrabble')
let scrabble;

describe("Scrabble", function() {
  it('returns 0 for empty words', function() {
    scrabble = new Scrabble('')

    expect(scrabble.score()).toEqual(0)
  })

  it('returns 0 for whitespace', function() {
    scrabble = new Scrabble(" \t\n")

    expect(scrabble.score()).toEqual(0)
  })

  it('returns 0 for null', function() {
    scrabble = new Scrabble(null)

    expect(scrabble.score()).toEqual(0)
  })

  it('scores short word', function() {
    scrabble = new Scrabble('a')

    expect(scrabble.score()).toEqual(1)
  })

  it('scores short word', function() {
    scrabble = new Scrabble('f')

    expect(scrabble.score()).toEqual(4)
  })

  it('scores a simple word', function() {
    scrabble = new Scrabble('street')

    expect(scrabble.score()).toEqual(6)
  })

  it('scores a more complicated word', function() {
    scrabble = new Scrabble('quirky')

    expect(scrabble.score()).toEqual(22)
  })

  it('scores a case-insensitive word', function() {
    scrabble = new Scrabble('OXYPHENBUTAZONE')

    expect(scrabble.score()).toEqual(41)
  })

  it('scores double points for word in curly braces', function() {
    scrabble = new Scrabble('{dog}')

    expect(scrabble.score()).toEqual(10)
  })

  it('scores triple points for word in square brackets', function() {
    scrabble = new Scrabble('[mug]')

    expect(scrabble.score()).toEqual(18)
  })

  it('scores double points for letter in curly braces', function() {
    scrabble = new Scrabble('du{c}k')

    expect(scrabble.score()).toEqual(14)
  })

  it('scores triple points for letter in square brackets', function() {
    scrabble = new Scrabble('gla[s]s')

    expect(scrabble.score()).toEqual(14)
  })
})
