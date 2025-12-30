n = int(input())

arr = []
while n >= 1:
    arr.append(n % 2)
    n //= 2

for el in arr[::-1]:
    print(el, end='')