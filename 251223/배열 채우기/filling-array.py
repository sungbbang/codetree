arr = list(map(int, input().split()))

zero = len(arr) - 1
for i in range(len(arr)):
    if arr[i] == 0:
        zero = i
        break

print(*arr[zero-1::-1])