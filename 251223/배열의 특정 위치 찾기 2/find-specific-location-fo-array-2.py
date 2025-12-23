arr = list(map(int, input().split()))

sum_odd = 0
sum_even = 0

for i in range(len(arr)):
    if i % 2 == 0: sum_odd += arr[i]
    else: sum_even += arr[i]

print(sum_odd - sum_even if sum_odd >= sum_even else sum_even - sum_odd)