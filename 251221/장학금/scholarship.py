mid, fin = map(int, input().split())

money = 0
if mid >= 90:
    if fin >= 95:
        money = 10
    elif fin >= 90:
        money = 5

print(money)