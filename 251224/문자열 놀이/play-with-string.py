s, q = input().split()

for _ in range(int(q)):
    c, a, b = input().split()
    c = int(c)

    if c == 1:
        a, b = int(a)-1, int(b)-1
        s = s[:a] + s[b] + s[a+1:b] + s[a] + s[b+1:]
    else:
        for i in range(len(s)):
            if s[i] == a:
                s = s[:i] + b + s[i+1:]
    
    print(s)