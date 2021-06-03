class infoPeaks():
    def __init__(self):
        self.pos = []
        self.peaks = []
        
def pick_peaks(arr):
    p = infoPeaks()
    for i in range(1, len(arr)-1):
        if arr[i-1]<arr[i]:
            if arr[i+1]<arr[i]:
                p.pos.append(i)
                p.peaks.append(arr[i])
            elif arr[i+1] == arr[i]:
                for j in range(i+2, len(arr)):
                    if arr[i] < arr[j]:
                        break
                    elif arr[i] > arr[j]:
                        p.pos.append(i)
                        p.peaks.append(arr[i])
                        break
    return p.__dict__
    
# self-feedback:
#
# better way of dealing with a plateau:
#
# def pick_peaks(arr):
#     pos = []
#     prob_peak = False
#     for i in range(1, len(arr)):
#         if arr[i] > arr[i-1]:
#             prob_peak = i
#         elif arr[i] < arr[i-1] and prob_peak:
#             pos.append(prob_peak)
#             prob_peak = False
#     return {'pos':pos, 'peaks':[arr[i] for i in pos]}
