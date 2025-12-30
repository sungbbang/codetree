m1, d1, m2, d2 = map(int, input().split())

num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

start_total_day = sum(num_of_days[:m1]) + d1
end_total_day = sum(num_of_days[:m2]) + d2

print(days[(end_total_day % 7) - (start_total_day % 7)])
