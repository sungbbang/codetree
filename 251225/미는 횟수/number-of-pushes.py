a = input()
b = input()

n = 0
for _ in range(len(a)):
    n += 1
    a = a[-1] + a[:-1]
    if a == b:
        break

print(n if n > 0 else -1)