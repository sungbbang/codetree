n, t = map(int, input().split())
r, c, d = input().split()
r, c = int(r) - 1, int(c) - 1

dxs = [0, 1, -1, 0]
dys = [1, 0, 0, -1]
mapper = {
    'R': 0,
    'D': 1,
    'U': 2,
    'L': 3
}

grid = [[0 for _ in range(n)] for _ in range(n)]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

dir_num = mapper[d]
x, y = r, c
while t > 0:
    nx = x + dxs[dir_num]
    ny = y + dys[dir_num]

    if not in_range(nx, ny):
        dir_num = 3 - dir_num
    
    else:
        x, y = nx, ny
    
    t -= 1

print(x+1, y+1)

