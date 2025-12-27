A = input()

# Please write your code here.
def is_palindrome(s):
    return s == s[::-1]

print('Yes' if is_palindrome(A) else 'No')