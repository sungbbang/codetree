a, b, c = map(int, input().split())

def get_total_minute(d, h, m):
    return d * 24 * 60 + h * 60 + m


start_total_minute = get_total_minute(11, 11, 11)
end_total_minute = get_total_minute(a, b, c)

if start_total_minute > end_total_minute:
    print(-1)
else:
    print(end_total_minute - start_total_minute)