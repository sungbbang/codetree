arr = [list(map(int, input().split())) for _ in range(2)]

for i in range(2):
    sum_ = 0
    for j in range(4):
        sum_ += arr[i][j]
    print(f'{(sum_ / 4):.1f}', end=' ')
print()
for i in range(4):
    sum_ = 0
    for j in range(2):
        sum_ += arr[j][i]
    print(f'{(sum_ / 2):.1f}', end=' ')
print()

sum_ = 0
for i in range(2):
    for j in range(4):
        sum_ += arr[i][j]
print(f'{(sum_ / 8):.1f}', end=' ')
