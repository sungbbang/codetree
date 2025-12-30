n = int(input())
commands = [input().split() for _ in range(n)]

MAX = n * 100
arr = [0] * (2 * MAX + 1)
curr = MAX

for x, dr in commands:
    x = int(x)
    if dr == 'L':
        while x:
            x -= 1
            arr[curr] = 1
            if x:
                curr -= 1
    else:
        while x:
            x -= 1
            arr[curr] = 2
            if x:
                curr += 1

w = b = 0
for i in range(2*MAX+1):
    if arr[i] == 1:
        w += 1
    elif arr[i] == 2:
        b += 1

print(w, b)