import sys
text = input()
pattern = input()

# Please write your code here.
def solve(s):
    return s == pattern

n = len(text)
p = len(pattern)
for i in range(n):
    if i + p > n:
        break
    
    if solve(text[i:i+p]):
        print(i)
        sys.exit()

print(-1)

