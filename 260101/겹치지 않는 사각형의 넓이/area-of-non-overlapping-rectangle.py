coord = [list(map(int, input().split())) for _ in range(3)]

MAX = 1000
arr = [[0] * (2*MAX+1) for _ in range(2*MAX+1)]
for x1, y1, x2, y2 in coord[:-1]:
    for i in range(x1+MAX, x2+MAX):
        for j in range(y1+MAX, y2+MAX):
            arr[i][j] += 1

x1, y1, x2, y2 = coord[-1]
for i in range(x1+MAX, x2+MAX):
        for j in range(y1+MAX, y2+MAX):
            arr[i][j] = 0

cnt = 0
for row in arr:
    for el in row:
        if el: cnt += 1
    
print(cnt)