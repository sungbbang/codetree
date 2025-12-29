class Weather:
    def __init__(self, date, day, weather):
        self.date = date
        self.day = day
        self.weather = weather


n = int(input())
arr = [tuple(input().split()) for _ in range(n)]
weathers = [Weather(date, day, w) for date, day, w in arr]

target_idx = -1
for i, w in enumerate(weathers):
    if w.weather == 'Rain':
        if target_idx == -1:
            target_idx = i
        else:
            if arr[target_idx][0] >= w.date:
                target_idx = i

ans = weathers[target_idx]
print(f'{ans.date} {ans.day} {ans.weather}')