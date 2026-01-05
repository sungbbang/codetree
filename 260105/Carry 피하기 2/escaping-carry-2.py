n = int(input())
arr = [int(input()) for _ in range(n)]

def is_carry(a, b, c):
    while True:
        if a % 10 + b % 10 + c % 10 >= 10:
            return True
        
        a //= 10
        b //= 10
        c //= 10

        if a == 0 and b == 0 and c == 0:
            break

    return False


ans = -1
for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            if is_carry(arr[i], arr[j], arr[k]):
                continue
            ans = max(ans, arr[i] + arr[j] + arr[k])

print(ans)