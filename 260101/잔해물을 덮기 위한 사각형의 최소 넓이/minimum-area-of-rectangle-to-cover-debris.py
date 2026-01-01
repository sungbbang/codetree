coord = [list(map(int, input().split())) for _ in range(2)]

MAX = 1000
arr = [[0] * (2*MAX+1) for _ in range(2*MAX+1)]

for idx, (x1, y1, x2, y2) in enumerate(coord, start=1):
    for i in range(x1+MAX, x2+MAX):
        for j in range(y1+MAX, y2+MAX):
            arr[i][j] = idx


first_rect = coord[0]
x1, y1, x2, y2 = first_rect
x1 = x1 + MAX
y1 = y1 + MAX
x2 = x2 + MAX
y2 = y2 + MAX

min_x = 2*MAX+1
min_y = 2*MAX+1
max_x = 0
max_y = 0

flag = False
for i in range(x1, x2):
    for j in range(y1, y2):
        if arr[i][j] == 1:
            flag = True
            min_x = min(min_x, i)
            min_y = min(min_y, j)
            max_x = max(max_x, i)
            max_y = max(max_y, j)

if not flag:
    print(0)
else:
    print((max_x - min_x + 1) * (max_y - min_y + 1))