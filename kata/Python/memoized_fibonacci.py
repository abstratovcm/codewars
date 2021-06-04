fib_cache = {0: 0, 1: 1}

def fibonacci(n):
    if n in fib_cache:
        return fib_cache[n]
    fib_cache[n] = fibonacci(n-1) + fib_cache[n-2]
    return fib_cache[n]
