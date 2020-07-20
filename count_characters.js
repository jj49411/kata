// Count characters in your string

// count("aba") should return { a: 2, b: 1 }
// count("") should return {}

function count (string) { 
  return string.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
  }, {})
}
