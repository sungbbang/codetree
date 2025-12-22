n = int(input())

for i in range(n):
    # 공백  출력
    for _ in range(2 * i):
        print(' ', end='')
    # 별 출력
    for _ in range((n-i)*2-1):
        print('* ', end='')
    print()