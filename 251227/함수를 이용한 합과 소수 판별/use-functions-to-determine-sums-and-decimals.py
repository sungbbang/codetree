a, b = map(int, input().split())

# Please write your code here.
def solve(x):
    if x == 1:
        return False
    
    for i in range(2, x):
        if x % i == 0:
            return False

    sum_ = 0
    while x > 0:
        sum_ += x % 10
        x //= 10
    
    if sum_ % 2 != 0:
        return False
    
    return True


cnt = 0
for i in range(a, b+1):
    if solve(i):
        cnt += 1

print(cnt)