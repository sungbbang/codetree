MAX = 100
n = int(input())
arr = [0] * (MAX+1)
for _ in range(n):
    pos, alpha = input().split()
    arr[int(pos)] = alpha

def check(arr):
    g = h = zero = 0
    
    for el in arr:
        if el == 'G':
            g += 1
        elif el == 'H':
            h += 1
        elif el == 0:
            zero += 1
    
    if g == 0 and h == 0:
        return False
    
    if g == h:
        return True

    
    if g > 0 and h == 0:
        return True
    
    if g == 0 and h > 0:
        return True
    
    return False

ans = 0
for i in range(MAX+1):
    for j in range(i, MAX+1):
        if j == 0: continue
        temp = []
        for k in range(i, j+1):
            temp.append(arr[k])
        
        if temp[0] == 0 or temp[-1] == 0:
            continue

        if check(temp):
            ans = max(ans, j-i)

print(ans)