n1, n2 = map(int, input().split())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

# Please write your code here.
def solve(arr1, arr2):
    for a, b in zip(arr1, arr2):
        if a != b:
            return False
    
    return True

result = 'No'
for i in range(n1-n2+1):
    if solve(a[i:i+n2], b):
        result = 'Yes'
        break

print(result)