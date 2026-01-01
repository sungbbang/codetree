n, m = map(int, input().split());
a_dt = [tuple(input().split()) for _ in range(n)]
b_dt = [tuple(input().split()) for _ in range(m)]

MAX = 1000 * 1000
a = [0] * (2*MAX+1)
b = [0] * (2*MAX+1)

curr = 0
for d, t in a_dt:
    t = int(t)
    if d == 'R':
        for i in range(curr+1+MAX, curr+1+t+MAX):
            a[i] = a[i-1] + 1            
    else:
        for i in range(curr+1+MAX, curr+1+t+MAX):
            a[i] = a[i-1] - 1
    curr += t

curr = 0
for d, t in b_dt:
    t = int(t)
    if d == 'R':
        for i in range(curr+1+MAX, curr+1+t+MAX):
            b[i] = b[i-1] + 1            
    else:
        for i in range(curr+1+MAX, curr+1+t+MAX):
            b[i] = b[i-1] - 1
    curr += t


second = 0
flag = False
for i in range(MAX, 2*MAX+1):
    if a[i] != 0 and b[i] != 0 and a[i] == b[i]:
        second = i
        flag = True
        break

if not flag:
    print(-1)
else:
    print(second - MAX)
