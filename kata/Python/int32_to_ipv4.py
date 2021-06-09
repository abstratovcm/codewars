def int32_to_ip(int32):
    ip = ['','','','']
    
    for i in range(4):
        power = 2**(8*(3-i))
        ip[i] = str(int32//power)
        int32 -= int(ip[i])*power
    
    return '.'.join(ip)
