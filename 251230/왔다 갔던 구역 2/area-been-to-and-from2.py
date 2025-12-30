n = int(input())
commands = [input().split() for _ in range(n)]

arr = [0] * (n * 10 * 2 + 1)
curr = len(arr) // 2

for x, dr in commands:
    x = int(x)
    for _ in range(x):
        arr[curr] += 1
        if dr == 'L':
            curr -= 1
        else:
            curr += 1

cnt = 0
for el in arr:
    if el >= 2:
        cnt += 1

print(cnt)