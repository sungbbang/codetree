a, b = map(int, input().split())

def is_true(bool):
    return 1 if bool else 0

print(is_true(a >= b))
print(is_true(a > b))
print(is_true(a <= b))
print(is_true(a < b))