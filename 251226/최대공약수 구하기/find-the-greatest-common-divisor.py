n, m = map(int, input().split())

# Please write your code here.
def gcd(a, b):
    while b != 0:
        a, b = b, a % b

    print(a)

gcd(n, m)