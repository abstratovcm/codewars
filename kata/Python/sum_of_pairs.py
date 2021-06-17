def sum_pairs(ints, s):
    seen = set()
    for number in ints:
        if s - number in seen:
            return [s-number, number]
        seen.add(number)
    return None
