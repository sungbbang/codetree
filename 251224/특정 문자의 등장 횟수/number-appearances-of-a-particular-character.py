s = input()

ee = eb = 0
for i in range(len(s) - 1):
    if s[i:i+2] == 'ee':
        ee += 1
    if s[i:i+2] == 'eb':
        eb += 1

print(ee, eb)