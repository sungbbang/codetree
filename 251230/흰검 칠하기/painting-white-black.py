n = int(input())
commands = [input().split() for _ in range(n)]

MAX = n * 100
arr = [''] * (2*MAX+1)
curr = 0
for x, dr in commands:
    x = int(x)
    next_pos = curr - x if dr == 'L' else curr + x
    a, b = min(curr, next_pos), max(curr, next_pos)

    for i in range(a+MAX, b+MAX):
        if dr == 'L':
            arr[i] += 'w'
        else:
            arr[i] += 'b'

    curr = next_pos

white, black, gray = 0, 0, 0
for el in arr:
    if el == '':
        continue

    if len(el) >= 4:
        gray += 1
    elif el[-1] == 'w':
        white += 1
    elif el[-1] == 'b':
        black += 1

print(white, black, gray)