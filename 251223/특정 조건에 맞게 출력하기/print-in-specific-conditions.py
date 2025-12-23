arr = list(map(int, input().split()))

for el in arr:
    if el == 0: break

    if el % 2 == 1:
        print(el + 3, end=' ')
    else:
        print(el // 2, end=' ')
