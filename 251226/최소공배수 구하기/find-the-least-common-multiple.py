n, m = map(int, input().split())

# Please write your code here.
def lcm(a, b):
    prod = a * b
    while b != 0:
        a, b = b, a % b
    
    print(prod // a)

lcm(n, m)