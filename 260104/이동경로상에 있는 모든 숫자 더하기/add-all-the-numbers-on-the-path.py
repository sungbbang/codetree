n, t = map(int, input().split())
commands = input()
board = [list(map(int, input().split())) for _ in range(n)]

dxs = [0, 1, 0, -1]
dys = [1, 0, -1, 0]

mapper = {
    'E': 0,
    'S': 1,
    'W': 2,
    'N': 3
}


def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

x = y = n//2
total = board[x][y]
move_dir = 'N'
for command in commands:
    if command == 'L':
        if move_dir == 'N':
            move_dir = 'W'
        elif move_dir == 'S':
            move_dir = 'E'
        elif move_dir == 'E':
            move_dir = 'N'
        elif move_dir == 'W':
            move_dir = 'S'
    elif command == 'R':
        if move_dir == 'N':
            move_dir = 'E'
        elif move_dir == 'S':
            move_dir = 'W'
        elif move_dir == 'E':
            move_dir = 'S'
        elif move_dir == 'W':
            move_dir = 'N'
    
    elif command == 'F':
        nx = x + dxs[mapper[move_dir]]
        ny = y + dys[mapper[move_dir]]
        
        if in_range(nx, ny):
            total += board[nx][ny]
            x, y = nx, ny
    
print(total)