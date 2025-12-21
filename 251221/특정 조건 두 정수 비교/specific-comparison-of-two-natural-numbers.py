a, b = map(int, input().split())

res1 = 0
if a < b: res1 = 1

res2 = 0
if a == b: res2 = 1

print(res1, res2)