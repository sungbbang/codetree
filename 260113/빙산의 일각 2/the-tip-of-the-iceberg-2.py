n = int(input())
h = [int(input()) for _ in range(n)]
MAX = 1000
ans = 0
for i in range(1, MAX+1):
    new_h = [0 if x - i < 0 else x - i for x in h]
    cnt = 0
    temp = []
    for val in new_h:
        if val > 0: temp.append(val)
        elif val == 0:
            if len(temp) > 0:
                cnt += 1
            temp = []
    
    if len(temp) > 0: cnt += 1
    
    ans = max(ans, cnt)

print(ans)