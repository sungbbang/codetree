n = int(input())
arr = [int(input()) for _ in range(n)]

def is_carry(a, b, c):
    zero = 0
    while zero < 2:
        if a % 10 + b % 10 + c % 10 >= 10:
            return True
        
        a //= 10
        b //= 10
        c //= 10

        if a == 0: zero += 1
        if b == 0: zero += 1
        if c == 0: zero += 1

    return False


ans = -1
for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            if not is_carry(arr[i], arr[j], arr[k]):
                ans = max(ans, arr[i] + arr[j] + arr[k])

print(ans)