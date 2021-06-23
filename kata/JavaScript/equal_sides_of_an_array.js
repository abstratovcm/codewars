function findEvenIndex(arr) {
  for (N = 0; N <= arr.length; N++) {
    if (sum(arr.slice(0,N)) == sum(arr.slice(N+1)))
      return N  
  }
  return -1
}

var sum = arr => arr.reduce((a,b) => a+b, 0)

/*
Better way of dealing with the problem:

function findEvenIndex(arr)
{
  let left = 0;
  let right = arr.reduce((s,n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}

*/
