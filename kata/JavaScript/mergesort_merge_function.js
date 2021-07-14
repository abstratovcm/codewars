// TODO: implement 'mergesorted'
// test ensures: a and b are both arrays, consisting entirely of integers...
//...,both arrays are sorted and contain at least 1 integer.
// ALSO: the Array.sort function has been disabled for this excercise.
function mergesorted(a, b) {
  aux = []
  while (a.length && b.length) {
    aux.push((a[0] < b[0])?a.shift():b.shift())
  }
  aux = [...aux, ...a, ...b]
  return aux
}
