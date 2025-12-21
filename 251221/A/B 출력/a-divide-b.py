a, b = map(int, input().split())

for i in range(21):
    print(a // b, end='')
    if i == 0: print('.', end='')
    a %= b
    a *= 10
