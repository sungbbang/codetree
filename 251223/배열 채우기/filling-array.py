arr = list(map(int, input().split()))

zero = len(arr)
for i in range(len(arr)):
    if arr[i] == 0:
        zero = i
        break

print(*arr[:zero][::-1])