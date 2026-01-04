n, t = map(int, input().split())
commands = input()
board = [list(map(int, input().split())) for _ in range(n)]

dxs = [0, 1, 0, -1]
dys = [1, 0, -1, 0]


def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

x = y = n//2
total = board[x][y]
move_dir = 3
for command in commands:
    if command == 'L':
        move_dir = (move_dir - 1 + 4) % 4
    elif command == 'R':
        move_dir = (move_dir + 1) % 4
    
    elif command == 'F':
        nx = x + dxs[move_dir]
        ny = y + dys[move_dir]
        
        if in_range(nx, ny):
            total += board[nx][ny]
            x, y = nx, ny
    
print(total)