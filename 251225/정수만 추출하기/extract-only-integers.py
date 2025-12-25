s1, s2 = input().split()

num1 = ''
for i in s1:
    if i.isdigit():
        num1 += i
    else:
        break

num2 = ''
for i in s2:
    if i.isdigit():
        num2 += i
    else:
        break

print(int(num1) + int(num2))