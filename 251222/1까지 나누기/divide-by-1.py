n = int(input())

i = 1
while True:
    n //= i
    if n <= 1:
        print(i)
        break
    i += 1