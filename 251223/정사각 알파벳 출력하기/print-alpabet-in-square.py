n = int(input())

i = ord('A')
for _ in range(n):
    for _ in range(n):
        print(chr(i), end='')
        i += 1
    print()
