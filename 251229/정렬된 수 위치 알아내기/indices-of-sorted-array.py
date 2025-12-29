n = int(input())
arr = list(map(int, input().split()))
nums = [(num, i) for i, num in enumerate(arr)]
ans = [0] * n

nums.sort(key=lambda x: (x[0], x[1]))
print(nums)


for i, num in enumerate(nums):
    ans[num[1]] = i + 1

print(*ans)