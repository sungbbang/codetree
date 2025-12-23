n = int(input())
arr = list(map(int, input().split()))

cnt = 0
for idx, val in enumerate(arr, start=1):
    if val == 2:
        cnt += 1
    
    if cnt == 3:
        print(idx)
        break