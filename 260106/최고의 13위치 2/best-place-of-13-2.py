n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

ans = -1

for i in range(n):
    for j in range(n-2):
        for k in range(i+1, n):
            for l in range(n-2):
                grid1 = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                grid2 = arr[k][l] + arr[k][l+1] + arr[k][l+2]
                ans = max(ans, grid1 + grid2)
        if n >= 6:
            for k in range(n):
                for l in range(j+1, n-2):
                    grid1 = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    grid2 = arr[k][l] + arr[k][l+1] + arr[k][l+2]
                    ans = max(ans, grid1 + grid2)

print(ans)