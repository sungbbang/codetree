s, q = input().split()
for _ in range(int(q)):
    c, a, b = input().split()
    c = int(c)
    temp = ''

    if c == 1:
        a, b = int(a)-1, int(b)-1
        for i in range(len(s)):
            if i == a:
                temp += s[b]
            elif i == b:
                temp += s[a]
            else:
                temp += s[i]
    else:
        for i in range(len(s)):
            if s[i] == a:
                temp += b
            else:
                temp += s[i]
    
    s = temp
    print(s)