input_str, q = input().split()
q = int(q)
queries = [int(input()) for _ in range(q)]

# Please write your code here.
for num in queries:
    if num == 1:
        input_str = input_str[1:] + input_str[0]
    elif num == 2:
        input_str = input_str[-1] + input_str[:-1]
    else:
        input_str = input_str[::-1]
    
    print(input_str)