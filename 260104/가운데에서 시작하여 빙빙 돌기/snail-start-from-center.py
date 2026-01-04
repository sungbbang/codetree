n = int(input())
grid = [[0] * n for _ in range(n)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n


dxs = [0, -1, 0, 1]
dys = [-1, 0, 1, 0]
dir_num = 0
x = y = n-1
grid[x][y] = n * n
for i in range(n*n-1, 0, -1):
    nx = x + dxs[dir_num]
    ny = y + dys[dir_num]

    if not in_range(nx, ny) or grid[nx][ny] != 0:
        dir_num = (dir_num + 1) % 4
    
    x = x + dxs[dir_num]
    y = y + dys[dir_num]

    grid[x][y] = i


for row in grid:
    print(*row)