n = int(input())
arr = []
for i in range(1, n+1):
    h, w = map(int, input().split())
    arr.append((h, w, i))

arr.sort(key=lambda x: (x[0], -x[1]))

for el in arr:
    print(*el)