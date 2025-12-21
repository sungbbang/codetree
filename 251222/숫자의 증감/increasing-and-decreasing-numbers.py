c, n = input().split()

n = int(n)
for i in range(1, n + 1):
    if c == 'A':
        print(i, end=' ')
    else:
        print(n - i + 1, end=' ')