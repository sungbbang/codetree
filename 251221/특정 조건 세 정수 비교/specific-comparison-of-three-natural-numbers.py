a, b, c = map(int, input().split())

min_num = a

if b < a:
    if b < c: min_num = b
    else: min_num = c
elif c < a:
    if b < c: min_num = b
    else: min_num = c

if min_num == a:
    print(1, end=' ')
else:
    print(0, end=' ')

if a == b == c:
    print(1)
else:
    print(0)