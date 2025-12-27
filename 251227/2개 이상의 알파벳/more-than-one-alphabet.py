A = input()

# Please write your code here.
def solve(s):
    cnt = 0
    curr = '1'
    for i in s:
        if curr != i:
            cnt += 1
            curr = i
    
    if cnt >= 2:
        return True
    
    return False


print('Yes' if solve(A) else 'No')
