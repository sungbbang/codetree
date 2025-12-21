a, b = map(int, input().split())

big, small = a, b
if b > a:
    big, small = small, big

for i in range(big, small - 1, -1):
    print(i, end=' ')