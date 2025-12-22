n = int(input())
arr = [int(input()) for _ in range(n)]

for el in arr:
    if el % 2 and el % 3 == 0:
        print(el)