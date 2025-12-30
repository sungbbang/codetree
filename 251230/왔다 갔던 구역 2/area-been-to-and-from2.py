MAX = 1000

n = int(input())
commands = [input().split() for _ in range(n)]

arr = [0] * (2*MAX+1)

pos = []
curr = 0
for x, dr in commands:
    x = int(x)
    if dr == 'L':
        pos.append((curr-x, curr))
        curr -= x
    else:
        pos.append((curr, curr+x))
        curr += x

for a, b in pos:
    for i in range(a+1000, b+1000):
        arr[i] += 1

cnt = 0
for el in arr:
    if el >= 2:
        cnt += 1

print(cnt)