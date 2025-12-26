a, b = map(int, input().split())

# Please write your code here.
def in_369(num):
    while num > 0:
        if num % 10 == 3 or num % 10 == 6 or num % 10 == 9:
            return True
        num //= 10
    return False

def solution(num):
    return num % 3 == 0 or in_369(num)

cnt = 0
for i in range(a, b+1):
    if solution(i): cnt += 1

print(cnt)