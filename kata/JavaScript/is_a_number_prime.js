function isPrime(num) {
  if (num < 5) return (num == 2 || num == 3)? true:false
  if (!(num % 2) || !(num % 3)) return false
  for (n = 5; n <= Math.sqrt(num); n += (n%6+1)? 2:4)
    if (!(num % n)) return false
  return true
}
