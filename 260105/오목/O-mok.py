arr = [list(map(int, input().split())) for _ in range(19)]
n = 19

def is_same(arr):
    one = two = 0

    for num in arr:
        if num == 1: one += 1
        elif num == 2: two += 1

    return True if one == 5 or two == 5 else False

winner = 0
r = c = -1
# 세로로 연속적인 경우
for i in range(n-4):
    for j in range(n):
        temp = []
        for k in range(5):
            temp.append(arr[i+k][j])
        if is_same(temp):
            winner = temp[0]
            r = i+1+2
            c = j+1
# 가로로 연속적인 경우
for i in range(n):
    for j in range(n-4):
        temp = []
        for k in range(5):
            temp.append(arr[i][j+k])
        if is_same(temp):
            winner = temp[0]
            r = i+1
            c = j+1+2
# 대각(\)으로 연속적인 경우
for i in range(n-4):
    for j in range(n-4):
        temp = []
        for k in range(5):
            temp.append(arr[i+k][j+k])
        if is_same(temp):
            winner = temp[0]
            r = i+1+2
            c = j+1+2
# 대각(/)으로 연속적인 경우
for i in range(n-4):
    for j in range(4, n-4):
        temp = []
        for k in range(5):
            temp.append(arr[i+k][j-k])
        if is_same(temp):
            winner = temp[0]
            r = i+1-2
            c = j+1-2


if winner:
    print(winner)
    print(r, c)
else:
    print(0)