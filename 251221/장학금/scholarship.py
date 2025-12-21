mid, fin = map(int, input().split())

money = 0
if mid >= 90:
    if fin >= 95:
        money = 100000
    elif fin >= 90:
        money = 50000

print(money)