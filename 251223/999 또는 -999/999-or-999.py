arr = list(map(int, input().split()))

mx = mn = arr[0]
for el in arr:
    if el == 999 or el == -999:
        break
    
    if el >= mx: mx = el
    if el <= mn: mn = el

print(mx, mn)