n = int(input())
arr = list(map(float, input().split()))

avg = sum(arr) / len(arr)
print(avg)

if avg >= 4.0: print('Perfetct')
elif avg >= 3.0: print('Good')
else: print('Poor')