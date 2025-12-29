n = int(input())
arr = list(map(int, input().split()))
nums = [(num, i) for i, num in enumerate(arr)]
ans = [0] * n

nums.sort(key=lambda x: (x[0], x[1]))

for i, num in enumerate(nums, start=1):
    ans[num[1]] = i

print(*ans)