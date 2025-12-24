n = int(input())
arr = [input() for _ in range(n)]
c = input()

cnt = 0
sum_ = 0
for s in arr:
    if s[0] == c:
        cnt += 1
        sum_ += len(s)

print(f'{cnt} {(sum_ / cnt):.2f}')