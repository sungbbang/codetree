n, m = map(int, input().split())
MAX = 1000 * 1000
A = [0] * (MAX+1)
B = [0] * (MAX+1)

time_a = 1
for _ in range(n):
    v, t = map(int, input().split())
    for _ in range(t):
        A[time_a] = A[time_a - 1] + v
        time_a += 1

time_b = 1
for _ in range(m):
    v, t = map(int, input().split())
    for _ in range(t):
        B[time_b] = B[time_b - 1] + v
        time_b += 1

time_a -= 1
time_b -= 1

cnt = 0
lead = 0
for i in range(1, time_a + 1):
    if A[i] > B[i] and lead != 1:
        lead = 1
        cnt += 1
    
    elif A[i] < B[i] and lead != 2:
        lead = 2
        cnt += 1
    
    elif A[i] == B[i] and lead != 3:
        lead = 3
        cnt += 1

print(cnt)