arr = list(map(int, input().split()))

mx = 0
mn = 1000
for el in arr:
    if el < 500:
        if mx < el:
            mx = el
    elif el > 500:
        if mn > el:
            mn = el

print(mx, mn)