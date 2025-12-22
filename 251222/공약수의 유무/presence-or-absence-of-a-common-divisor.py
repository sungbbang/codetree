a, b = map(int, input().split())

flag = False
for i in range(a, b+1):
    if 1920 % i == 0 and 2880 % i == 0:
        flag = True

print(1 if flag else 0)