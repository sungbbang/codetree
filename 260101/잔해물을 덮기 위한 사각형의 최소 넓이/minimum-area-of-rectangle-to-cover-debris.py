coord = [list(map(int, input().split())) for _ in range(2)]

MAX = 1000
arr = [[0] * (2*MAX+1) for _ in range(2*MAX+1)]

for idx, (x1, y1, x2, y2) in enumerate(coord, start=1):
    for i in range(x1+MAX, x2+MAX):
        for j in range(y1+MAX, y2+MAX):
            arr[i][j] = idx


first = []
for i in range(2*MAX+1):
    for j in range(2*MAX+1):
        if arr[i][j] == 1:
            first.append((i, j))

if len(first) == 0:
    print(0)
else:
    print((first[-1][0] - first[0][0] + 1) * (first[-1][1] - first[0][1] + 1))