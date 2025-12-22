n = int(input())

i = 1
while i <= n:
    # 3의 배수일 때
    if i % 3 == 0:
        print(0, end=' ')
    
    # 3의 배수가 아닐 때
    else:
        # 3, 6, 9가 들어가는지 판별
        num = i
        flag = False
        while not flag and num > 0:
            mod = num % 10
            num //= 10
            if mod == 3 or mod == 6 or mod == 9:
                flag = True
        
        if flag: print(0, end=' ')
        else: print(i, end=' ')
    i += 1