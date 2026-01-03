n = int(input())
commands = [input().split() for _ in range(n)]

dxs = [0, 1, 0, -1]
dys = [1, 0, -1, 0]
mapper = {
    'E': 0,
    'S': 1,
    'W': 2,
    'N': 3 
}

dir_num = 0
x = y = 0
time = 0

flag = False
for command in commands:
    dr, t = command
    dir_num = mapper[dr]
    for _ in range(int(t)):
        x = x + dxs[dir_num]
        y = y + dys[dir_num]
        time += 1

        if x == 0 and y == 0:
            flag = True
            break
    if flag:
        break
        
if flag:
    print(time)
else:
    print(-1)