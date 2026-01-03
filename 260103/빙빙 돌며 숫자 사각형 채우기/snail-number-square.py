n, m = map(int, input().split())
arr = [[0] * m for _ in range(n)]

dxs = [0, 1, 0, -1]
dys = [1, 0, -1, 0]
dir_num = 0

arr[0][0] = 1
x = y = 0

def in_range(x, y):
    return 0 <= x < n and 0 <= y < m

for i in range(2, n * m + 1):
    nx = x + dxs[dir_num]
    ny = y + dys[dir_num]

    if not in_range(nx, ny) or arr[nx][ny] != 0:
        dir_num = (dir_num + 1) % 4
    
    x = x + dxs[dir_num]
    y = y + dys[dir_num]

    arr[x][y] = i


for row in arr:
    print(*row)