n = int(input())

idx = ord('A')

for i in range(n):
    for j in range(i+1):
        print(chr(idx), end='')
        if chr(idx) == 'Z':
            idx = ord('A')
        else:
            idx += 1

    print()