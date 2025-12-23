n = int(input())

cnt = 0
for i in range(n, 100000, n):
    if i % 5 == 0: cnt += 1
    print(i, end=' ')
    if cnt == 2: break