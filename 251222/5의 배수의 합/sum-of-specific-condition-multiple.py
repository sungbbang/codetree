a, b = map(int, input().split())

big, small = a, b
if a < b: big, small = b, a

cnt = 0
for i in range(small, big + 1):
    if i % 5 == 0: cnt += 1

print(cnt)