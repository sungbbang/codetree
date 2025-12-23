arr = list(map(int, input().split()))

zero = 0
for i in range(len(arr)):
    if arr[i] == 0:
        zero = i
        print(zero)
        break

# print(arr[:zero:-1])