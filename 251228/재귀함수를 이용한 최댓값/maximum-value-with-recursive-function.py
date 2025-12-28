n = int(input())
arr = list(map(int, input().split()))

max_val = -1
def f(n):
    global max_val
    if n == -1: return
    f(n-1)
    max_val = max(arr[n], max_val)

f(n-1)
print(max_val)