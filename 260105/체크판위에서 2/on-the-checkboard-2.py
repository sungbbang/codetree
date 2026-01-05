r, c = map(int, input().split())
arr = [list(input().split()) for _ in range(r)]

cnt = 0
for i in range(1, r):
    for j in range(1, c):
        if arr[i][j] != arr[0][0]:
            for k in range(i+1, r-1):
                for l in range(j+1, c-1):
                    if arr[k][l] != arr[i][j] and arr[r-1][c-1] != arr[k][l]:
                        cnt += 1


print(cnt)