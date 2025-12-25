s1 = input()
s2 = input()

num1 = ''
for i in s1:
    if i.isdigit():
        num1 += i
num2 = ''
for i in s2:
    if i.isdigit():
        num2 += i

print(int(num1) + int(num2))