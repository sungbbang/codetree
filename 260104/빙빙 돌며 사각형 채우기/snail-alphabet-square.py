n, m = map(int, input().split())
grid = [[0] * m for _ in range(n)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < m

dxs = [0, 1, 0, -1]
dys = [1, 0, -1, 0]
dir_num = 0
x = y = 0
grid[0][0] = 'A'
num = ord('A') + 1
for i in range(1, n * m):
    nx = x + dxs[dir_num]
    ny = y + dys[dir_num]

    if not in_range(nx, ny) or grid[nx][ny] != 0:
        dir_num = (dir_num + 1) % 4

    x = x + dxs[dir_num]
    y = y + dys[dir_num]

    if num > ord('Z'):
        num = ord('A')
    grid[x][y] = chr(num)
    num += 1

for row in grid:
    print(*row)