n = int(input())
arr = list(map(int, input().split()))

# Please write your code here.
def lcm(a, b):
    prod = a * b
    while b != 0:
        a, b = b, a % b
    
    return prod // a


def f(n):
    if n == 0: return arr[0]

    return lcm(arr[n], f(n-1))


print(f(n-1))
