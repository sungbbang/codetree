n = int(input())

for i in range(n):
    for j in range(n):
        if i == 0:
            print('*', end=' ')
        else:
            if j < i:
                print('*', end=' ')
            elif j == n - 1:
                print('*', end=' ')
            else:
                print(' ', end=' ')
    print()