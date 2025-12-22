a, b, c = map(int, input().split())

flag = False
for i in range(a, b + 1):
    if i % c == 0:
        flag = True
        break

print('YES' if flag else 'NO')