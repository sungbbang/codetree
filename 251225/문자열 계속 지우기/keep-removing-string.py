A = input()
B = input()

# Please write your code here.
stack = []
for c in A:
    stack.append(c)
    
    if len(stack) >= len(B):
        is_matched = True
        for i in range(len(B)):
            if stack[-len(B)+i] != B[i]:
                is_matched = False
        
        if is_matched:
            for _ in range(len(B)):
                stack.pop()
    
print(''.join(stack))