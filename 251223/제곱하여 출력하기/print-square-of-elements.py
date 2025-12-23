n = int(int(input()))
arr = list(map(int, input().split()))

print(*[el ** 2 for el in arr])