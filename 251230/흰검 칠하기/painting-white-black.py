n = int(input())
commands = [input().split() for _ in range(n)]

MAX = n * 100
arr = [''] * (2*MAX+1)
curr = MAX
for x, dr in commands:
    x = int(x)
    if dr == 'L':
        for i in range(x):
            arr[curr - i] += 'w'
        curr = curr - x + 1
    else:
        for i in range(x):
            arr[curr + i] += 'b'
        curr = curr + x - 1

w = b = g = 0
for el in arr:
    if el == '':
        continue

    if el.count('w') >= 2 and el.count('b') >= 2:
        g += 1
    
    elif el[-1] == 'w':
        w += 1
    
    else:
        b += 1
    
print(w, b, g)