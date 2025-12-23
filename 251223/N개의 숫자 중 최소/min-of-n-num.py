n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
mn = a[0]
for el in a:
    if el <= mn:
        mn = el

print(mn, a.count(mn))