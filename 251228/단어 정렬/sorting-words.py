n = int(input())
word = [input() for _ in range(n)]

word.sort()
for el in word:
    print(el)