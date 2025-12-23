import sys
n = int(input())
nums = list(map(int, input().split()))

# Please write your code here.
cnt_arr = [0] * 1001
mx = nums[0]

for num in nums:
    cnt_arr[num] += 1

for i in range(len(cnt_arr)-1, 0, -1):
    if cnt_arr[i] == 1:
        print(i)
        sys.exit()

print(-1)
