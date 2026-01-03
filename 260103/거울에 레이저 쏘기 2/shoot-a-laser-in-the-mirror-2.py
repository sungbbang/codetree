n = int(input())
grid = [list(input()) for _ in range(n)]
k = int(input())

mapper = {
    'E': 0,
    'S': 1,
    'W': 2,
    'N': 3
}


dxs = [0, 1, 0, -1]
dys = [1, 0, -1, 0]
dir_num = 0
if k <= n:
    x = 0
    y = k-1
    dir_num = mapper['W'] if grid[x][y] == '/' else mapper['E']
elif n < k and k <= 2*n:
    x = k-n-1
    y = n-1
    dir_num = mapper['S'] if grid[x][y] == '/' else mapper['N']
elif 2*n < k and k <= 3*n:
    x = n-1
    y = 3*n-k
    dir_num = mapper['E'] if grid[x][y] == '/' else mapper['W']
elif 3*n < k:
    x = 4*n-k
    y = 0
    dir_num = mapper['N'] if grid[x][y] == '/' else mapper['S']

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

def next_dir(x, y, dir_num):
    next_dir_num = 0
    # 'S'
    if dir_num == 1:
        next_dir_num = mapper['W'] if grid[x][y] == '/' else mapper['E']
    # 'N'
    elif dir_num == 3:
        next_dir_num = mapper['E'] if grid[x][y] == '/' else mapper['W']
    # 'E'
    elif dir_num == 0:
        next_dir_num = mapper['N'] if grid[x][y] == '/' else mapper['S']
    # 'W'
    elif dir_num == 2:
        next_dir_num = mapper['S'] if grid[x][y] == '/' else mapper['N']
    
    return next_dir_num

cnt = 0
while True:
    cnt += 1
    nx = x + dxs[dir_num]
    ny = y + dys[dir_num]
    
    x, y = nx, ny
    if not in_range(nx, ny):
        break

    dir_num = next_dir(x, y, dir_num)


print(cnt)