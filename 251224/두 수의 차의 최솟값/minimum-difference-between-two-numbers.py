n = int(input())
arr = list(map(int, input().split()))

a = arr[0]
b = arr[1]

min_diff = 100
for i in range(n):
    for j in range(i+1, n):
        if arr[j] - arr[i] < min_diff:
            min_diff = arr[j] - arr[i]

print(min_diff)