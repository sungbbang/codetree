n = int(input())
arr = []
for _ in range(n):
    name, height, weight = input().split()
    arr.append((name, int(height), int(weight)))

arr.sort(key=lambda x: (x[1], -x[2]))

for el in arr:
    print(*el)