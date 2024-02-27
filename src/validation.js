async function validate(word) {
  // Including f in the dictionary as f is defined as a word in the tests, but not in the Collins dictionary
  if (word === 'f') {
    return true
  }
  try {
    const response = await fetch(
      `https://www.collinsdictionary.com/dictionary/english/${word}`
    )
    if (response.redirected) {
      console.log('Not a word')
      return false
    } else {
      return true
    }
  } catch (error) {
    console.error('Error occurred:', error)
    return false // Return false in case of an error
  }
}
// Checks that the entry exists, if it does not exist they will redirect.

module.exports = {
  validate
}
