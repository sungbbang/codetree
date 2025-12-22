n = int(input())

for i in range(n):
    # 공백
    for _ in range(i * 2):
        print(' ', end='')
    # 별
    for _ in range((n-i)*2-1):
        print('*', end=' ')
    print()

for i in range(n - 2, -1, -1):
    # 공백
    for _ in range(i * 2):
        print(' ', end='')
    # 별
    for _ in range((n-i)*2-1):
        print('*', end=' ')
    print()
    