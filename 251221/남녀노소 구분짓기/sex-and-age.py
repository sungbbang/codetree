is_woman = int(input())
age = int(input())

if is_woman:
    if age >= 19:
        print('WOMAN')
    else:
        print('GIRL')
else:
    if age >= 19:
        print('MAN')
    else:
        print('BOY')
