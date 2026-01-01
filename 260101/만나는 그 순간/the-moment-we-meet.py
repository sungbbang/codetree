n, m = map(int, input().split());
a_dt = [tuple(input().split()) for _ in range(n)]
b_dt = [tuple(input().split()) for _ in range(m)]

MAX = 10
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

print(a)
print(b)