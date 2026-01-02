n, m, k = map(int, input().split())
nums = [int(input()) for _ in range(m)]

arr = [0] * (n+1)
for num in nums:
    arr[num] += 1
    if arr[num] >= k:
        print(num)
        break