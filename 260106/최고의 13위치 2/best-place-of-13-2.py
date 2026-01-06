n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

# 서로 다른 행에 두 격자
max_val1 = 0
for i in range(n):
    for j in range(n-2):
        for k in range(i+1, n):
            for l in range(n-2):
                grid1_sum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                grid2_sum = arr[k][l] + arr[k][l+1] + arr[k][l+2]
                max_val1 = max(max_val1, grid1_sum + grid2_sum)

# 같은 행에 두 격자(n >= 6)
max_val2 = 0
for i in range(n):
    for j in range(n-2):
        for k in range(j+3, n-2):
            grid1_sum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
            grid2_sum = arr[i][k] + arr[i][k+1] + arr[i][k+2]
            max_val2 = max(max_val2, grid1_sum + grid2_sum)

print(max(max_val1, max_val2))