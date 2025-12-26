a, b = map(int, input().split())

# Please write your code here.
def solution(num):
    for i in range(2, num):
        if num % i == 0:
            return False
    
    return True


cnt = 0
for i in range(a, b+1):
    if solution(i): cnt += i

print(cnt)