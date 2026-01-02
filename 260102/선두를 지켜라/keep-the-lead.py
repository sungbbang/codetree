n, m = map(int, input().split())
A = [tuple(map(int, input().split())) for _ in range(n)]
B = [tuple(map(int, input().split())) for _ in range(m)]

a = [0]
curr = 0
for v, t in A:
    for _ in range(1, t+1):
        a.append(curr+v)
        curr += v

b = [0]
curr = 0
for v, t in B:
    for _ in range(1, t+1):
        b.append(curr+v)
        curr += v

head = 0
cnt = 0
for i in range(1, len(a)):
    if a[i] > b[i]:
        if head == 2:
            cnt += 1
        head = 1

    elif a[i] < b[i]:
        if head == 1:
            cnt += 1
        head = 2

print(cnt)