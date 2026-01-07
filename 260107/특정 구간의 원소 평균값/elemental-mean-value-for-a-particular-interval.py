n = int(input())
arr = list(map(int, input().split()))

ans = 0
for i in range(n):
    for j in range(i, n):
        temp = []
        for k in range(i, j+1):
            temp.append(arr[k])
        
        avg = sum(temp) / len(temp)
        if avg in temp:
            ans += 1

print(ans)