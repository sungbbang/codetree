commands = input()

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

x = y = 0
dir_num = 0
for command in commands:
    if command == 'L':
        dir_num = (dir_num - 1 + 4) % 4
    elif command == 'R':
        dir_num = (dir_num + 1) % 4
    elif command == 'F':
        x = x + dx[dir_num]
        y = y + dy[dir_num]
    
print(x, y)