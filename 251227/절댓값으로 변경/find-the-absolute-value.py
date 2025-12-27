n = int(input())
arr = list(map(int, input().split()))

# Please write your code here.
def solve(arr):
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i] *= -1

solve(arr)
for el in arr:
    print(el, end=' ')