n1, n2 = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

for i in range(n1-n2+1):
    flag = True
    sl = a[i:i+n2]
    for j in range(n2):
        if sl[j] != b[j]: 
            flag = False
            break
    if flag:
        print('Yes')
        break

if not flag:
    print('No')