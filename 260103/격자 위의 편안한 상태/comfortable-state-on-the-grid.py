n, m = map(int, input().split())
points = [tuple(map(int, input().split())) for _ in range(m)]
grid = [[0] * n for _ in range(n)]

dxs = [0, 1, 0, -1]
dys = [1, 0, -1, 0]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n


def is_comportable(x, y):
    cnt = 0
    for dx, dy in zip(dxs, dys):
        nx = x + dx
        ny = y + dy
        if in_range(nx, ny) and grid[nx][ny] == 1:
            cnt += 1
    
    return True if cnt == 3 else False

for x, y in points:
    x -= 1
    y -= 1
    grid[x][y] = 1

    if is_comportable(x, y):
        print(1)
    else:
        print(0)



