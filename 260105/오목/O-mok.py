import sys
arr = [list(map(int, input().split())) for _ in range(19)]
n = 19

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

dxs = [1, 1, 1, -1, -1, -1, 0, 0]
dys = [-1, 0, 1, -1, 0, 1, -1, 1]

for i in range(n):
    for j in range(n):
        if arr[i][j] == 0:
            continue

        for dx, dy in zip(dxs, dys):
            cnt = 1
            x, y = i, j
            for _ in range(5):
                nx = x + dx
                ny = y + dy
                if not in_range(nx, ny):
                    break
                
                if arr[nx][ny] != arr[i][j]:
                    break
                
                cnt += 1
                x, y = nx, ny
        
        if cnt == 5:
            print(arr[i][j])
            print(i + 2 * dx + 1, j + 2 * dy + 1)
            sys.exit()

print(0)