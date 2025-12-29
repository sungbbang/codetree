n = int(input())
arr = list(map(int, input().split()))

ans = [0] * 1000001
sorted_arr = sorted(arr)
for num in arr:
    ans[num] = sorted_arr.index(num) + 1

for i in arr:
    print(ans[i], end=' ')