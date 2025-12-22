arr = [int(input()) for _ in range(5)]

flag = True
for el in arr:
    if el % 3 != 0:
        flag = False
        break

print(1 if flag else 0)