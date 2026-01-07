n, m = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))
B.sort()
ans = 0
for i in range(n-m+1):
    temp = []
    for j in range(i, i+m):
        temp.append(A[j])
    
    if sorted(temp) == B:
        ans += 1

print(ans)