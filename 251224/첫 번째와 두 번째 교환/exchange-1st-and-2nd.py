s = input()

first = s[0]
second = s[1]
result = ''
for i in s:
    if i == first: result += second
    elif i == second: result += first
    else: result += i

print(result)