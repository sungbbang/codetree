n, m = map(int, input().split());
a_dt = [tuple(input().split()) for _ in range(n)]
b_dt = [tuple(input().split()) for _ in range(m)]

MAX = 1000
a = [0] * (2*MAX+1)
b = [0] * (2*MAX+1)

curr = 0
for d, t in a_dt:
    t = int(t)
    if d == 'R':
        for i in range(curr+MAX, curr+MAX+t+1):
            a[i] = i
            curr += 1
    else:
        for i in range(curr+MAX, curr+MAX+t+1):
            a[curr-i] = i
            curr += 1

for d, t in b_dt:
    t = int(t)
    if d == 'R':
        for i in range(curr+MAX, curr+MAX+t+1):
            b[i] = i
            curr += 1
    else:
        for i in range(curr+MAX, curr+MAX+t+1):
            b[curr-i] = i
            curr += 1

for i in range(1, 2*MAX+1):
    if a[i] == b[i]:
        print(i)
        break

