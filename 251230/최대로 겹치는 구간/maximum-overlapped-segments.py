MAX = 100

n = int(input())
segments = [tuple(map(int, input().split())) for _ in range(n)]

arr = [0] * (2*MAX+1)
for a, b in segments:
    for i in range(a, b):
        arr[i] += 1

print(max(arr))