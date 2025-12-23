cnt = 0
for _ in range(int(input())):
    arr = list(map(int, input().split()))

    if sum(arr) / len(arr) >= 60:
        cnt += 1
        print('pass')
    else:
        print('fail')

print(cnt)