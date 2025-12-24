a = input()
b = input()
c = input()

a_len = len(a)
b_len = len(b)
c_len = len(c)

max_len = max(a_len, b_len, c_len)
min_len = min(a_len, b_len, c_len)

print(max_len - min_len)