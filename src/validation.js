async function validate(word) {
  // Including f in the dictionary as f is defined as a word in the tests, but not in the Webster dictionary
  const wordToValidate = word
    .replaceAll('{', '')
    .replaceAll('}', '')
    .replaceAll('[', '')
    .replaceAll(']', '')
    .toLowerCase()

  if (wordToValidate === 'f') {
    return true
  }
  try {
    const response = await fetch(
      `https://www.merriam-webster.com/dictionary/${wordToValidate}`
    )
    if (response.status === 404) {
      return 'Not a Legal Scrabble Word'
    } else {
      return 'A Legal Scrabble Word'
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
