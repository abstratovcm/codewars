function count (string) {  
  var count = {}
  string.split('').forEach(s => count[s] ? count[s]++ : count[s] = 1)
  return count
}

/*
I Just wanted to remember about this cool solution I saw on codewars:

var count = str => 
  [...str].reduce((c,s) => (c[s] = -~c[s], c), {})

Note that c[s] = -~c[s] is equivalent to c[s] ? c[s]++ : c[s]
~: bitwise NOT operator (each bit in the operand is inverted in the result)
The secret here is that ~null = -1 and ~a = -(a+1)
*/
