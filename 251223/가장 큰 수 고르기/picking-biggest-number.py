import sys

arr = map(int, input().split())

mx = -sys.maxsize

for el in arr:
    if el >= mx:
        mx = el

print(mx)