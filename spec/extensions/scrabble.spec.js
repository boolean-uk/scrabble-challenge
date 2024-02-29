// Extend these specs as you like

const { scrabble, fullScrabble } = require('../../src/scrabble')
const { validate } = require('../../src/validation.js')

describe('Scrabble', () => {
  describe('letter multipliers', () => {
    it('returns 6 for double letter o', () => {
      expect(scrabble('d{o}g')).toEqual(6)
    })

    it('returns 6 for triple letter o', () => {
      expect(scrabble('d[o]g')).toEqual(7)
    })

    it('returns 0 for invalid multiplier', () => {
      expect(scrabble('d{og')).toEqual(0)
    })

    it('returns 0 for invalid multiplier', () => {
      expect(scrabble('do}g')).toEqual(0)
    })
  })

  describe('word multipliers', () => {
    it('returns 10 for double letter o', () => {
      expect(scrabble('{dog}')).toEqual(10)
    })

    it('returns 15 for triple letter o', () => {
      expect(scrabble('[dog]')).toEqual(15)
    })

    it('returns 0 for invalid multiplier', () => {
      expect(scrabble('{dog')).toEqual(0)
    })
    it('returns 0 for invalid multiplier', () => {
      expect(scrabble('dog}')).toEqual(0)
    })
  })

  describe('edge cases', () => {
    it('returns 18 for letter and word multiplier', () => {
      expect(scrabble('{[d]og}')).toEqual(18)
    })

    it('returns 30 for two word multipliers', () => {
      expect(scrabble('[{dog}]')).toEqual(30)
    })
    it('returns 9 for two end letter multipliers', () => {
      expect(scrabble('{d}o{g}')).toEqual(9)
    })

    it('returns 0 for incorrect tokens', () => {
      expect(scrabble('|d|og')).toEqual(0)
    })
  })
})

describe('word legality checks', () => {
  it('returns "not a legal word"', async () => {
    expect(await validate('lhasiasipg')).toEqual('Not a Legal Scrabble Word')
  })

  it('returns "not a legal word"', async () => {
    expect(await validate('jafihasfipa')).toEqual('Not a Legal Scrabble Word')
  })

  it('returns "legal word"', async () => {
    expect(await validate('cat')).toEqual('A Legal Scrabble Word')
  })

  it('returns "legal word"', async () => {
    expect(await validate('dog')).toEqual('A Legal Scrabble Word')
  })
  it('returns "legal word"', async () => {
    expect(await validate('OXYPHENBUTAZONE')).toEqual('A Legal Scrabble Word')
  })
})

describe('final output checks', () => {
  it('returns "not a legal word"', async () => {
    expect(await fullScrabble('lhasiasipg')).toEqual(
      'This word would score 16, and it is Not a Legal Scrabble Word'
    )
  })

  it('returns "not a legal word"', async () => {
    expect(await fullScrabble('jafihasfipa')).toEqual(
      'This word would score 29, and it is Not a Legal Scrabble Word'
    )
  })

  it('returns "legal word"', async () => {
    expect(await fullScrabble('c{a}t')).toEqual(
      'This word would score 6, and it is A Legal Scrabble Word'
    )
  })

  it('returns "legal word"', async () => {
    expect(await fullScrabble('[dog]')).toEqual(
      'This word would score 15, and it is A Legal Scrabble Word'
    )
  })
  it('returns "legal word"', async () => {
    expect(await fullScrabble('{OXYPHENBUTAZONE}')).toEqual(
      'This word would score 82, and it is A Legal Scrabble Word'
    )
  })
  it('returns "invalid word"', async () => {
    expect(await fullScrabble('{OXY{PHE[NBU}TAZONE}')).toEqual(
      'This word is not valid, and would score 0'
    )
  })
})
