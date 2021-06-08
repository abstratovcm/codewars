def loop_size(node):
    s = set()
    while(node not in s): 
        s.add(node)
        node = node.next
        
    n, i = node.next, 1
    while(node != n):
        i = i+1
        n = n.next
    return i
