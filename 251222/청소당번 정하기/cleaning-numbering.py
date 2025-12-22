n = int(input())

classroom = 0
hallway = 0
toilet = 0

day = 1
while day <= n:
    if day % 12 == 0:
        toilet += 1
    elif day % 3 == 0:
        hallway += 1
    elif day % 2 == 0:
        classroom += 1
    day += 1

print(classroom, hallway, toilet)