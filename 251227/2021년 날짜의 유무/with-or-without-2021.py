M, D = map(int, input().split())

# Please write your code here.
days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

def solve(m, d):
    if days[m-1] <= d:
        return True
    return False

print('Yes' if solve(M, D) else 'No')