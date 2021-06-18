def mixed_fraction(s):
    n = list(map(int, s.split('/')))
    
    if n[1] == 0: raise ZeroDivisionError
    
    if n[0] == 0: return str(0)

    if n[1] < 0: n[0], n[1] = -n[0], -n[1]
    
    sig = ''
    if n[0] < 0: sig, n[0] = '-', -n[0]
    
    g = gcd(n[0],n[1])
    
    n[0] = n[0] // g
    n[1] = n[1] // g
    
    if n[1] == 1: return sig + str(n[0]) 
    
    r = str(n[0]%n[1]) + '/' + str(n[1])
    
    if n[0] < n[1]: return sig + r

    return sig + str(n[0]//n[1]) + ' ' + r


def gcd(a,b): 
    if b == 0: return a
    return gcd(b, a%b)
