n = int(input())
arr = list(map(int, input().split()))

def f(n):
    if n == 0: return arr[n]

    return max(f(n-1), arr[n])

print(f(n-1))