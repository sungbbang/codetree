import sys
n = int(input())
a = [int(input()) for _ in range(n)]

ans = sys.maxsize

for i in range(n):
    total = 0
    curr_room = i
    for j in range(n):
        total += a[curr_room] * j
        curr_room = (curr_room + 1) % n

    ans = min(ans, total)

print(ans)