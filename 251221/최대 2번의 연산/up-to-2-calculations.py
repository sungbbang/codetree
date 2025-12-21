a = int(input())

if not a % 2:
    a //= 2
if a % 2:
    a = (a + 1) // 2


print(a)