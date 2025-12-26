y = int(input())

# Please write your code here.
def is_yoon(year):
    if year % 100 == 0 and year % 400 != 0:
        return False
    
    if year % 4 == 0:
        return True
    
    return False


print('true' if is_yoon(y) else 'false')