n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

ans = []
for i in range(n):
    for j in range(n-2):
        ans.append(arr[i][j] + arr[i][j+1] + arr[i][j+2])
    
ans.sort(reverse=True)
print(ans[0] + ans[1])