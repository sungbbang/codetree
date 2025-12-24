a = input()
b = input()

cnt = 0
for i in range(len(a) - len(b) + 1):
    is_matched = True
    for j in range(len(b)):
        if a[i+j] != b[j]:
            is_matched = False
            break
    
    if is_matched:
        cnt += 1

print(cnt)