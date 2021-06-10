def max_sequence(arr):
    totalSum, tempSum = 0, 0
    for i in range(len(arr)):
        tempSum = max(arr[i], tempSum + arr[i])
        totalSum = max(tempSum, totalSum)
    return totalSum
