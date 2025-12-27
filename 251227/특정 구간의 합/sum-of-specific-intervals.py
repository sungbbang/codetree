n, m = map(int, input().split())
arr = list(map(int, input().split()))
queries = [tuple(map(int, input().split())) for _ in range(m)]

# Please write your code here.
for a, b in queries:
    print(sum(arr[i] for i in range(a-1, b)))