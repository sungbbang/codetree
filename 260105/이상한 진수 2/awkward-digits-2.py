a = list(map(int, list(input())))
n = len(a)

def change_10(binary_num):
    num = 0
    for i in range(len(binary_num)):
        num = num * 2 + int(binary_num[i])
    return num

max_num = 0
for i in range(n):
    a[i] = 1 - a[i]
    max_num = max(max_num, change_10(a))
    a[i] = 1 - a[i]

print(max_num)