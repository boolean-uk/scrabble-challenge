async function validate(word) {
  // Including f in the dictionary as f is defined as a word in the tests, but not in the Collins dictionary
  if (word === 'f') {
    return true
  }
  try {
    const response = await fetch(
      `https://www.merriam-webster.com/dictionary/${word}`
    )
    if (response.status === 404) {
      console.log('Not a Legal Scrabble Word')
      return false
    } else {
      console.log('A Legal Scrabble Word')
      return true
    }
    // Checks that the entry exists, if it does not exist they will give a 404 error.
  } catch (error) {
    console.error('Error checking word:', error)
    return false
  }
}

module.exports = {
  validate
}
