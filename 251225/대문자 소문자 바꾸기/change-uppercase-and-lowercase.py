s = input()

for i in s:
    if 'a' <= i and i <= 'z':
        print(i.upper(), end='')
    else:
        print(i.lower(), end='')