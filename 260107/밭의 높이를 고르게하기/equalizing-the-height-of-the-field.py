import sys
n, h, t = map(int, input().split())
arr = list(map(int, input().split()))

def calc(arr):
    result = 0
    for el in arr:
        result += abs(h - el)
    
    return result


def check(arr):
    return sum(arr) == h * t

ans = sys.maxsize
for i in range(n-t+1):
    temp = []
    for j in range(t):
        temp.append(arr[i+j])
    if check(temp):
        ans = min(ans, calc(temp))

print(ans)