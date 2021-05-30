def square_digits(num):
    final_num = ''
    for c in str(num):
        final_num += str(int(c)**2)
    return int(final_num)
