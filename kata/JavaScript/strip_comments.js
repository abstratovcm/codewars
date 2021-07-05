function solution(input, markers) {
  var format = ['.','+','*','?','^','$','(',')','[',']','{','}','|','\\']
  for (a of markers) {
    if (format.includes(a)) 
      var re = new RegExp(` *\\${a}.*`, 'gi')
    else 
      var re = new RegExp(` *${a}.*`, 'gi')
    input = input.replace(re, '')
  }
  return input
}

/*
A solution I liked:

function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}
*/
