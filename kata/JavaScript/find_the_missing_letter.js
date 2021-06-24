function findMissingLetter(array) {
  var a = array.map(c => c.charCodeAt(0))
  for (i = 0; i < a.length; i++) {
    if (a[0] + i != a[i])
      return String.fromCharCode(a[0] + i)
  }
}

/*
For larger arrays it would be better to use:
(Because map() access every element of the array)

function findMissingLetter(a) {
  var start = a[0].charCodeAt(0)
  for (i = 1; i < a.length; i++) {
    if (start + i != a[i].charCodeAt(0))
      return String.fromCharCode(start + i)
  }
}

Note that i can start at 1 (I just realized that after submitting my code)
*/
