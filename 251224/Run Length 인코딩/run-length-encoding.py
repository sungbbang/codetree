A = input()

# Please write your code here.
curr = A[0]
cnt = 1
result = ''
for c in A[1:]:
    if curr == c:
        cnt += 1
    else:
        result += f'{curr}{cnt}'
        curr = c
        cnt = 1

result += f'{curr}{cnt}'
print(len(result))
print(result)