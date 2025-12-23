import sys
n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
mx1 = -sys.maxsize
mx1_idx = 0
for idx, val in enumerate(a):
    if val > mx1:
        mx1 = val
        mx1_idx = idx

mx2 = -sys.maxsize
for idx, val in enumerate(a):
    if idx == mx1_idx:
        continue

    if val > mx2:
        mx2 = val

print(mx1, mx2)