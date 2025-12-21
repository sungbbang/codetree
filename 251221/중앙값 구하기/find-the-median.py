a, b, c = map(int, input().split())

# a가 b보다 크거나 같을 때
if a >= b:
    if b >= c:
        print(b)
    else:
        if a <= c:
            print(a)
        else:
            print(c)
# b가 a보다 크거나 같을 때
else:
    if a >= c:
        print(a)
    else:
        if b >= c:
            print(c)
        else:
            print(b)