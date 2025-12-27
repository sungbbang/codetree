Y, M, D = map(int, input().split())

# Please write your code here.
def is_yoon(year):
    if year % 4 == 0:
        if year % 100 == 0 and year % 400 == 0:
            return True

        if year % 100 == 0:
            return False
        
        return True
    
    return False

def last_day(y, m):
    if m == 2:
        if is_yoon(y):
            return 29
        else:
            return 28
    
    if m == 4 or m == 6 or m == 9 or m == 11:
        return 30
    
    return 31

def get_season(m):
    if m == 12 or m <= 2:
        return 'Winter'
    
    if 3 <= m and m <= 5:
        return 'Spring'

    if 6 <= m and m <= 8:
        return 'Summer'

    if 9 <= m and m <= 11:
        return 'Fall'

if last_day(Y, M) >= D:
    print(get_season(M))
else:
    print(-1)