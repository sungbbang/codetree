a = input()
commands = input()

for i in commands:
    if i == 'L':
        a = a[1:] + a[0]
    else:
        a = a[-1] + a[:-1]

print(a)