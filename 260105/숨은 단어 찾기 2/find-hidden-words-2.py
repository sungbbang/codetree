n, m = map(int, input().split())
arr = [input() for _ in range(n)]

dxs = [1, 1, 1, -1, -1, -1, 0, 0]
dys = [-1, 0, 1, -1, 0, 1, -1, 1]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < m

ans = 0
for i in range(n):
    for j in range(m):
        if arr[i][j] != 'L':
            continue

        for dx, dy in zip(dxs, dys):
            cnt = 1
            x, y = i, j
            while True:
                nx = x + dx
                ny = y + dy
                if not in_range(nx, ny):
                    break
                
                if arr[nx][ny] != 'E':
                    break
                
                cnt += 1
                x, y = nx, ny
        
            if cnt == 3:
                ans += 1

print(ans)