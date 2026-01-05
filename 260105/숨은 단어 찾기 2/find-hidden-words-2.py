n, m = map(int, input().split())
arr = [input() for _ in range(n)]

dxs = [-1, -1, -1, 0, 0, 1, 1, 1]
dys = [-1, 0, 1, -1, 1, -1, 0, 1]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < m

def is_correct(s):
    return s == 'LEE' or s == 'EEL'

ans = 0
for i in range(n):
    for j in range(m):
        for dx, dy in zip(dxs, dys):
            temp = ''
            for k in range(3):
                nx = i + dx * k
                ny = j + dy * k

                if not in_range(nx, ny):
                    break

                temp += arr[nx][ny]

            if is_correct(temp):
                ans += 1

print(ans // 2)
