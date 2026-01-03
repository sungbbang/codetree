commands = input()

dxs = [-1, 0, 1, 0]
dys = [0, 1, 0, -1]

x = y = 0
dir_num = 0

flag = False
t = 0
for command in commands:
    t += 1
    if command == 'L':
        dir_num = (dir_num - 1 + 4) % 4
    elif command == 'R':
        dir_num = (dir_num + 1) % 4
    elif command == 'F':
        x = x + dxs[dir_num]
        y = y + dys[dir_num]

    if x == y == 0:
        flag = True
        break

if flag:
    print(t)
else:
    print(-1)