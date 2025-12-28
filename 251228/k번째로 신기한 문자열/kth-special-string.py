n, k, t = input().split()
n, k = int(n), int(k)
s = [input() for _ in range(n)]

arr = []
for i in s:
    if t in i and i.index(t) == 0:
        arr.append(i)

arr.sort()
print(arr[k-1])