arr = [input() for _ in range(10)]
c = input()

flag = False
for s in arr:
    if s[-1] == c:
        flag = True
        print(s)

if not flag:
    print('None')