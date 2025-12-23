n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
mx_idx = n
ans = []
while mx_idx != 0:
    mx = 0
    for i in range(mx_idx):
        if a[i] > mx:
            mx = a[i]
            mx_idx = i
    ans.append(mx_idx+1)

print(*ans)