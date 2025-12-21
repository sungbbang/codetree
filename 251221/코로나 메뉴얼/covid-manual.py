arr = [list(input().split()) for _ in range(3)]

cnt = 0
for el in arr:
    if el[0] == 'Y' and int(el[1]) >= 37:
        cnt += 1
    
    if cnt >= 2:
        break

print('E' if cnt >= 2 else 'N')