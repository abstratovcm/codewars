def iq_test(numbers):
    betterNumbers = [n%2 for n in map(int, numbers.split(" "))]

    if betterNumbers.count(0) > 1:
        return betterNumbers.index(1)+1
    return betterNumbers.index(0)+1
