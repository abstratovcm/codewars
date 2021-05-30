import string

def is_pangram(s):
    return string.ascii_lowercase[:27] in ''.join(sorted(set(s.lower())))
