def is_isogram(string):
    for i in range(len(string)):
        for j in range(i+1,len(string)):
            if (string[i].lower() == string[j].lower()):
                return False
    return True
