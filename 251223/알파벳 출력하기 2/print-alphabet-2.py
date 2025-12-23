n = int(input())

asc = ord('A')

for i in range(n):
    # 공백 출력
    for j in range(i):
        print(' ', end=' ')
    # 문자 출력
    for j in range(n-i, 0, -1):
        print(chr(asc), end=' ')
        asc += 1
        if chr(asc) > chr(ord('Z')):
            asc = ord('A')
                    
    print()