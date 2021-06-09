def sum_of_intervals(intervals):
    intervals = sorted(intervals)
    sum, temp = 0, intervals[0]
    for i in intervals:
        if i[0]<=temp[1]:
            temp = (temp[0], max(i[1], temp[1]))
        else:
            sum += temp[1]-temp[0]
            temp = i
    sum += temp[1]-temp[0]
    return sum
