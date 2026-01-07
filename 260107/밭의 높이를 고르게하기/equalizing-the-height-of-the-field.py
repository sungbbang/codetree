import sys
n, h, t = map(int, input().split())
arr = list(map(int, input().split()))

def calc(arr):
    result = 0
    for i in range(t):
        if arr[i] < h:
            result += (h - arr[i]) * 2
    
    return result

def check(arr):
    if sum(arr) // t != h:
        return False
        
    return True

ans = sys.maxsize
for i in range(n-t+1):
    temp = []
    for j in range(t):
        temp.append(arr[i+j])
    if check(temp):
        ans = min(ans, calc(temp))

print(ans)