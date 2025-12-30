start_h, start_m, end_h, end_m = map(int, input().split())

def get_total_minute(h, m):
    return h * 60 + m


start_total_minute = get_total_minute(start_h, start_m)
end_total_minute = get_total_minute(end_h, end_m)

print(end_total_minute - start_total_minute)