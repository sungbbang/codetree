n, b = map(int, input().split())

arr = []
while n > 0:
    arr.append(n % b)
    n //= b

for el in arr[::-1]:
    print(el, end='')