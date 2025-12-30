a, b = map(int, input().split())
n  = input()

num = 0
for i in range(len(n)):
    num = num * a + int(n[i])

arr = []
while num > 0:
    arr.append(num % b)
    num //= b


for el in arr[::-1]:
    print(el, end='')