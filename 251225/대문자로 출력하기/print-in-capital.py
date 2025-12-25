s = input()
result = ''
for i in s:
    if i.isalpha():
        result += i.upper()

print(result)