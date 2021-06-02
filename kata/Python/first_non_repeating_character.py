def first_non_repeating_letter(s):
    for c in s:
        if s.lower().count(c.lower()) == 1:
            return c
    return ''
