function zeros (n) {
  var count = 0
  for (i = 5; i <= n; i *= 5)
    count += ~~(n / i)
  return count
}

/*
One line solution with recursion:

var zeros = n => n<5? 0 : ~~(n/5) + zeros(n/5)
*/
