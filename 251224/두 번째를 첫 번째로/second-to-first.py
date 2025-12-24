s = input()

first = s[0]
second = s[1]
result = ''
for i in s:
    if i == second:
        result += first
    else:
        result += i

print(result)