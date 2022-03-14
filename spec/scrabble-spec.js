// Note: you shouldn't need to change anything in this file.

Scrabble = require('../src/scrabble')
let scrabble

describe('Scrabble', function () {
  it('returns 0 for empty words', function () {
    scrabble = new Scrabble('')

    expect(scrabble.score()).toEqual(0)
  })

  it('returns 0 for whitespace', function () {
    scrabble = new Scrabble(' \t\n')

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

  it('scores short word', function () {
    scrabble = new Scrabble('f')

    expect(scrabble.score()).toEqual(4)
  })

  it('scores a simple word', function () {
    scrabble = new Scrabble('street')

    expect(scrabble.score()).toEqual(6)
  })

  it('scores a more complicated word', function () {
    scrabble = new Scrabble('quirky')

    expect(scrabble.score()).toEqual(22)
  })

  it('scores a case-insensitive word', function () {
    scrabble = new Scrabble('OXYPHENBUTAZONE')

    expect(scrabble.score()).toEqual(41)
  })

  // -------extension tests added below-----------

  it('short word with double points', function () {
    scrabble = new Scrabble('{a}')

    expect(scrabble.score()).toEqual(2)
  })

  it('short word with triple points', function () {
    scrabble = new Scrabble('[j]')

    expect(scrabble.score()).toEqual(24)
  })

  it('case-sensitive longer word with doulbe and triple letter', function () {
    scrabble = new Scrabble('Su{p}er[m]an')

    expect(scrabble.score()).toEqual(21)
  })

  it('short word with double letter', function () {
    scrabble = new Scrabble('{a}ei')

    expect(scrabble.score()).toEqual(4)
  })

  // ---------extension tests for double and tripple words ------------

  //   it('double word', function() {
  //     scrabble = new Scrabble('{Knife}')

  //     expect(scrabble.score()).toEqual(24)
  //   })

  //   it('triple word', function() {
  //     scrabble = new Scrabble('[XRAY]')

  //     expect(scrabble.score()).toEqual(28)
  //   })
})
