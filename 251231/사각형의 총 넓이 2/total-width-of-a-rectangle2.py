MAX = 100

n = int(input())
arr = [[0] * (2*MAX+1) for _ in range(2*MAX+1)]
for _ in range(n):
    x1, y1, x2, y2 = map(int, input().split())
    
    for i in range(x1+MAX, x2+MAX):
        for j in range(y1+MAX, y2+MAX):
            arr[i][j] = 1

cnt = 0
for row in arr:
    for el in row:
        if el == 1: cnt += 1

print(cnt)