n = int(input())
arr = []
for _ in range(n):
    name, k, e, m = input().split()
    arr.append((name, int(k), int(e), int(m)))

arr.sort(key=lambda x: (-x[1], -x[2], -x[3]))

for el in arr:
    print(*el)