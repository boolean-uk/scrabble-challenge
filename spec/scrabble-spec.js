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

  it('returns 0 for null', function () {
    scrabble = new Scrabble(null)

    expect(scrabble.score()).toEqual(0)
  })

  it('scores short word', function () {
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

  it('sets a double letter', function() {
    scrabble = new Scrabble('dog')
    scrabble.setDoubleLetter('o')
    expect(scrabble.word).toEqual('d{o}g')
  })

  it('sets a double letter multiple times', function() {
    scrabble = new Scrabble('banAna')
    scrabble.setDoubleLetter('a')
    expect(scrabble.word).toEqual('b{a}n{a}n{a}')
  })

  it('sets a triple letter', function() {
    scrabble = new Scrabble('MOnkey')
    scrabble.setTripleLetter('o')
    expect(scrabble.word).toEqual('M[o]nkey')
  })

  it('sets a triple letter multiple times', function() {
    scrabble = new Scrabble('antena')
    scrabble.setTripleLetter('a')
    expect(scrabble.word).toEqual('[a]nten[a]')
  })

  it('sets a double points word', function() {
    scrabble = new Scrabble('duck')
    scrabble.setDoubleWord()
    expect(scrabble.word).toEqual('{duck}')
  })

  it('sets a triple points word', function() {
    scrabble = new Scrabble('camera')
    scrabble.setTripleWord()
    expect(scrabble.word).toEqual('[camera]')
  })

  it('double word', function() {
    scrabble = new Scrabble('envelope')
    scrabble.setDoubleWord()
    expect(scrabble.score()).toEqual(26)
  })

  it('triple word', function() {
    scrabble = new Scrabble('dog')
    scrabble.setTripleWord()
    expect(scrabble.score()).toEqual(15)
  })

  it('double letter', function() {
    scrabble = new Scrabble('creme')
    scrabble.setDoubleLetter('e')
    expect(scrabble.score()).toEqual(11)
  })

  it('triple letter', function() {
    scrabble = new Scrabble('bottle')
    scrabble.setTripleLetter('t')
    expect(scrabble.score()).toEqual(12)
  })

  describe("Ed's Edge Cases", function() {
  it('Double double letter or double word?', function() {
    scrabble = new Scrabble('{b}ottl{e}')
    expect(scrabble.score()).toEqual(12)
  })

  it('Double triple letter or triple word?', function() {
    scrabble = new Scrabble('[b]ottl[e]')
    expect(scrabble.score()).toEqual(16)
  })

  it('Both double word and double letters', function() {
    scrabble = new Scrabble('{{b}ottl{e}}')
    expect(scrabble.score()).toEqual(24)
  })

  it('Both triple word and triple letters', function() {
    scrabble = new Scrabble('[[b]ottl[e]]')
    expect(scrabble.score()).toEqual(48)
  })

  it("Deluxe Edition", function() {
    scrabble = new Scrabble('{[[b]{o}tt[l]{e}]]}')
    expect(scrabble.score()).toEqual(108)
  })
})
})
