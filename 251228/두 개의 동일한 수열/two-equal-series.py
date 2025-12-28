n = int(input())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

A.sort()
B.sort()

flag = True
for a, b in zip(A, B):
    if a != b:
        flag = False
        break

if flag:
    print('Yes')
else:
    print('No')