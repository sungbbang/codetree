a = int(input())

if a % 2:
    a = (a + 1) // 2
if not a % 2:
    a //= 2

print(a)