m1, d1, m2, d2 = map(int, input().split())
A = input()

num_of_days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
day_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

start_total_date = sum(num_of_days[:m1]) + d1
end_total_date = sum(num_of_days[:m2]) + d2


diff = end_total_date - start_total_date
end_day = day_of_week[diff % 7]

ans = diff // 7
if A == day_of_week[diff % 7]:
    ans += 1

print(ans)