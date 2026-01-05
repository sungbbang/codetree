a = list(input())
n = len(a)

def change_10(binary_num):
    num = 0
    for i in range(len(binary_num)):
        num = num * 2 + int(binary_num[i])
    return num

max_num = 0
for i in range(n):
    b = a[:]
    b[i] = '1' if b[i] == '0' else '0'
    max_num = max(max_num, change_10(b))

print(max_num)