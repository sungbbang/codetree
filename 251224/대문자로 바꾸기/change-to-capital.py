arr = [input().split() for _ in range(5)]

for row in arr:
    for el in row:
        print(el.upper(), end=' ')
    print()
