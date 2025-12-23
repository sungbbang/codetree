n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
mx_idx = n
mx = 0
ans = []
while mx_idx != 0:
    for i in range(mx_idx):
        if a[i] > mx:
            mx = a[i]
            mx_idx = i+1
    ans.append(mx_idx)

print(mx_idx)