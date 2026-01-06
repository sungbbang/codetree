n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

grid = []
for i in range(n):
    for j in range(n-2):
        sum_val = arr[i][j] + arr[i][j+1] + arr[i][j+2]
        grid.append((sum_val, [i, j]))


grid.sort(key=lambda x: x[0])

max_grid = grid.pop()
ans = max_grid[0]
x, y = max_grid[1]

while True:
    curr = grid.pop()
    curr_x, curr_y = curr[1]
    if x != curr_x:
        ans += curr[0]
        break
    elif x == curr_x:
        if abs(curr_y - y) < 3:
            continue
        else:
            ans += curr[0]
            break
print(ans)