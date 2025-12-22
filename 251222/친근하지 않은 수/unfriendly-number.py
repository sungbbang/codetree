cnt = 0
for i in range(1, int(input()) + 1):
    if i % 2 == 0:
        cnt += 1
        continue
    elif i % 3 == 0:
        cnt += 1
        continue
    elif i % 5 == 0:
        cnt += 1
        continue

print(cnt)