n = int(input())

idx = ord('A')

for i in range(n):
    for j in range(i+1):
        print(chr(idx), end='')
        idx += 1
    print()