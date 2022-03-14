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

  it('scores a full double word', function() {
    scrabble = new Scrabble('{aaf}')

    expect(scrabble.score()).toEqual(12)
  })

  it('scores a double letter', function() {
    scrabble = new Scrabble('z{o}om')

    expect(scrabble.score()).toEqual(16)
  })

  it('scores a triple word', function() {
    scrabble = new Scrabble('[after]')

    expect(scrabble.score()).toEqual(24)
  })

  it('scores a triple letter', function() {
    scrabble = new Scrabble('[z]oom')

    expect(scrabble.score()).toEqual(35)
  })

  it('mix double and triple letter', function() {
    scrabble = new Scrabble('z[o]{o}m')

    expect(scrabble.score()).toEqual(18)
  })

  it('triple letter double word', function() {
    scrabble = new Scrabble('{z[o]om}')

    expect(scrabble.score()).toEqual(34)
  })
  it('double letter triple word', function() {
    scrabble = new Scrabble('[b{o}y]')

    expect(scrabble.score()).toEqual(27)
  })
  it('two double letters', function() {
    scrabble = new Scrabble('b{o}{o}k')

    expect(scrabble.score()).toEqual(12)
  })
  it('two triple letters', function() {
    scrabble = new Scrabble('b[o][o]k')

    expect(scrabble.score()).toEqual(14)
  })
  it('not repeating double letter and double word', function() {
    scrabble = new Scrabble('{o}')

    expect(scrabble.score()).toEqual(2)
  })
  it('ultimate test', function() {
    scrabble = new Scrabble('[t[h]r{o}w]')

    expect(scrabble.score()).toEqual(60)
  })
  it('invalid braces', function() {
    scrabble = new Scrabble('str{{{{[[]]e]et')

    expect(scrabble.score()).toEqual(6)
  })
})
