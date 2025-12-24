n = int(input())
arr = [[1] * (i+1) for i in range(n)]

for row in arr:
    print(*row)