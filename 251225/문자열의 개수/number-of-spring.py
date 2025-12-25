arr = []
while True:
    s = input()
    if s == '0':
        break
    
    arr.append(s)

print(len(arr))
for i in range(len(arr)):
    if i % 2 == 1:
        print(arr[i])