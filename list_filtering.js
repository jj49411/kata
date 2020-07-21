// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// filter_list([1,2,'a','b']) should return [1,2]
// filter_list([1,2,'aasf','1','123',123]) should return [1,2,123]

function filter_list(l) {
  return l.filter(item => typeof(item) == 'number')
}

