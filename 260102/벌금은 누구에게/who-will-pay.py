n, m, k = map(int, input().split())
nums = [int(input()) for _ in range(m)]

arr = [0] * (n+1)

flag = False
for num in nums:
    arr[num] += 1
    if arr[num] >= k:
        flag = True
        print(num)
        break

if not flag:
    print(-1)