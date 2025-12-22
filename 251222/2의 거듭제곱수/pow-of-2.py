n = int(input())

x = 1
while True:
    if n == 2:
        break
    
    n //= 2
    x += 1

print(x)