def is_perfect(x):
    if x == 1: return True

    div_sum = 0
    for i in range(1, x):
        if x % i == 0: div_sum += i
    
    if div_sum == x: return True

    return False

n = int(input())

print('P' if is_perfect(n) else 'N')