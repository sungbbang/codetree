n = int(input())

arr = [1, n]
for i in range(2, 100000):
    curr = arr[i-2] + arr[i-1]
    arr.append(curr)
    if curr >= 100:
        break

print(*arr)