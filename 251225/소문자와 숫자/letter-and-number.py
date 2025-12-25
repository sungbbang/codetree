s = input()

for c in s:
    if c.isdigit() or c.isalpha():
        print(c.lower(), end='')
        