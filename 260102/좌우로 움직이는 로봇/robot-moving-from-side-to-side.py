n, m = map(int, input().split())
MAX = 1000000
A = [0] * (2*MAX+1)
B = [0] * (2*MAX+1)

time_a = 1
for _ in range(n):
    t, d = input().split()
    for _ in range(int(t)):
        A[time_a] = A[time_a - 1] + (1 if d == 'R' else -1)
        time_a += 1

time_b = 1
for _ in range(m):
    t, d = input().split()
    for _ in range(int(t)):
        B[time_b] = B[time_b - 1] + (1 if d == 'R' else -1)
        time_b += 1

if time_a > time_b:
    for i in range(time_b, time_a):
        B[i] = B[time_b - 1]
elif time_a < time_b:
    for i in range(time_a, time_b):
        A[i] = A[time_a - 1]


max_time = max(time_a, time_b)

cnt = 0
for i in range(1, max_time):
    if A[i-1] != B[i-1] and A[i] == B[i]:
        cnt += 1

print(cnt)