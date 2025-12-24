input_str = input()
target_str = input()

# Please write your code here.
ans = -1
s_len = len(input_str)
t_len = len(target_str)
for i in range(s_len - t_len + 1):
    flag = True
    for j in range(t_len):
        if input_str[i+j] != target_str[j]:
            flag = False
            break
    
    if flag:
        ans = i
        break

print(ans)
