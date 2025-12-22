n = int(input())

i = 1
while i <= n:
    if i % 3 == 0:
        print(0, end=' ')
    else:
        num = i
        flag = False
        while num > 0:
            mod = num % 10
            if mod == 3 or mod == 6 or mod == 9:
                print(0, end=' ')
                flag = True
                break
            num //= 10
        
        if flag: print(0, end=' ')
        else: print(i, end=' ')
    i += 1