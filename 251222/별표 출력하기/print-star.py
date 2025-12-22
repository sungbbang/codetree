n = int(input())

for i in range(n):
    for _ in range(i+1):
        print('*', end=' ')
    print()

for i in range(n - 2, 0, -1):
    for _ in range(i+1):
        print('*', end=' ')
    print()