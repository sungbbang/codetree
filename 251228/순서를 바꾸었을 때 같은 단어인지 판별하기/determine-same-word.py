word1 = input()
word2 = input()

# Please write your code here.
def solve(s1, s2):
    if len(s1) != len(s2):
        return False
    
    return sorted(s1) == sorted(s2)


print('Yes' if solve(word1, word2) else 'No')