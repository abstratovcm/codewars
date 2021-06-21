function tribonacci(signature,n){
  for (i = 3; i < n; i++) tribo(signature, i);
  return signature.slice(0,n);
}

function tribo(sig,n){
  if (n < sig.length) return sig[n];
  else
    sig.push(tribo(sig, n-1) + tribo(sig, n-2) + tribo(sig, n-3));
}

/*
Could have just done

function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) {
    signature.push(signature[i] + signature[i+1] + signature[i+2]);
  }
  return signature.slice(0, n);
}

But I still see some value in my solution
*/
