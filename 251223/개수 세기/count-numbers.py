n, m = map(int, input().split())
arr = list(map(int, input().split()))

cnt = 0
for el in arr:
    if el == m:
        cnt += 1

print(cnt)