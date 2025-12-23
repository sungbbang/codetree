n = int(input())
arr = list(map(int, input().split()))

ans = [el for el in arr if el % 2 == 0]

print(*ans)