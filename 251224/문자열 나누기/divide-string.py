n = int(input())
arr = input().split()
s = ''.join(arr)
for i in range(0, len(s), 5):
    print(s[i:i+5])