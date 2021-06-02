def decrypt(t, n):
    if n <= 0: return t

    s = [None]*len(t)
    for i in range(n):
        s[0::2], s[1::2] = t[len(t)//2:], t[:len(t)//2]
        t = "".join(s)
    return t

def encrypt(t, n):
    if n <= 0: return t

    for i in range(n):
        t = t[1::2] + t[0::2]
    return t
