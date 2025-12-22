n = int(input())
prod = 1
i = 1
while True:
    prod *= i
    if prod >= n:
        print(i)
        break
    i += 1
