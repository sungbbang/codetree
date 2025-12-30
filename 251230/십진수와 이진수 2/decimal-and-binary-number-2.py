n = int(input())
n = str(n)

num = 0
for i in range(len(n)):
    num = num * 2 + int(n[i])

num *= 17
arr = []
while num > 0:
    arr.append(num % 2)
    num //= 2

for el in arr[::-1]:
    print(el, end='')