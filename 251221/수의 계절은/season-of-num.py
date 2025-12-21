m = int(input())

if m <= 2 or m == 12:
    print('Winter')
elif 3 <= m and m <= 5:
    print('Spring')
elif 6 <= m and m <= 8:
    print('Summer')
else:
    print('Fall')