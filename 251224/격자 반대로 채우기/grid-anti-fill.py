n = int(input())

arr = [[0] * n for _ in range(n)]
num = 1
col = n-1
reverse = True
while col >= 0:
    if reverse:
        for i in range(n-1, -1, -1):
            arr[i][col] = num
            num += 1
        reverse = False
        col -= 1
    else:
        for i in range(n):
            arr[i][col] = num
            num += 1
        reverse = True
        col -= 1

for row in arr:
    print(*row)
    