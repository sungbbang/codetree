n = int(input())
pos = [tuple(map(int, input().split())) for _ in range(n)]
MAX = 100
arr = [[0] * (2*MAX+1) for _ in range(2*MAX+1)]

for x, y in pos:
    x += MAX
    y += MAX

    for i in range(x, x+8):
        for j in range(y, y+8):
            arr[i][j] = 1


cnt = 0
for row in arr:
    for el in row:
        if el: cnt += 1

print(cnt)