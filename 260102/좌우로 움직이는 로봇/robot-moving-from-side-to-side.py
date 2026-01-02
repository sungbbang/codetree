n, m = map(int, input().split())
MAX = 1000000
A = [0] * (2*MAX+1)
B = [0] * (2*MAX+1)

time_a = 1
last_time_a = 0
for _ in range(n):
    t, d = input().split()
    t = int(t)
    if d == 'R':
        for _ in range(t):
            A[time_a] = A[time_a - 1] + 1
            time_a += 1
    else:
        for _ in range(t):
            A[time_a] = A[time_a - 1] - 1
            time_a += 1
    last_time_a = time_a

time_b = 1
last_time_b = 0
for _ in range(n):
    t, d = input().split()
    t = int(t)
    if d == 'R':
        for _ in range(t):
            B[time_b] = B[time_b - 1] + 1
            time_b += 1
    else:
        for _ in range(t):
            B[time_b] = B[time_b - 1] - 1
            time_b += 1
    last_time_b = time_b

if last_time_a > last_time_b:
    for i in range(last_time_b, last_time_a):
        B[i] = B[last_time_b]
elif last_time_a < last_time_b:
    for i in range(last_time_a, last_time_b):
        A[i] = A[last_time_a]


cnt = 0
for i in range(2*MAX+1):
    if i >= 1 and A[i-1] != B[i-1] and A[i] == B[i]:
        cnt += 1

print(cnt)