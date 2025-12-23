n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
mx1 = a[0]
mx_idx = 0
for idx, val in enumerate(a):
    if val > mx1:
        mx1 = val
        mx_idx = idx

mx2 = a[0]
for idx, val in enumerate(a):
    if val > mx2:
        if val == mx1:
            if mx_idx != idx:
                mx2 = val
        else:
            mx2 = val

print(mx1, mx2)