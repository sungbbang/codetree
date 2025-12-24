s = input()

s_even = [s[i] for i in range(len(s)) if i % 2 == 1]

for i in range(len(s_even)-1, -1, -1):
    print(s_even[i], end='')