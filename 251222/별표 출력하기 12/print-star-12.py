n = int(input())

for i in range(n):
    if i == 0:
        for _ in range(n):
            print('*', end=' ')
        print()
    else:
        for j in range(n):
            if j >= i and j % 2 == 1:
                print('*', end=' ')
            else:
                print(' ', end=' ')
        print()