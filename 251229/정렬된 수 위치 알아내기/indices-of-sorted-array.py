n = int(input())
arr = list(map(int, input().split()))

sorted_arr = sorted(arr)

ans = []
for num in arr:
    for i in range(n):
        if sorted_arr[i] == num:
            idx = i+1
            while idx in ans:
                idx += 1
            ans.append(idx)
            break

print(*ans)