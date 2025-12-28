n = int(input())

# Please write your code here.
def f(n):
    if n == 1:
        return 2
    
    if n == 2:
        return 4

    return f(n-2) * f(n-1) % 100


print(f(n))