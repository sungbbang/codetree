s = list(input())
leng = len(s)
while len(s) != 1:
    n = int(input())
    if leng <= n:
        s.pop()
    else:
        s.pop(n)
    leng -= 1
    print(''.join(s))
