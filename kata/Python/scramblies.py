def scramble(s1, s2):

    l1 = sorted(s1)
    l2 = sorted(s2)
    
    lower_bound = 0
    for i in range(len(l2)):
        for j in range(lower_bound, len(l1)):
            if l2[i] < l1[j]:
                return False
            elif l2[i] == l1[j]:
                lower_bound = j+1
                break
    return True
