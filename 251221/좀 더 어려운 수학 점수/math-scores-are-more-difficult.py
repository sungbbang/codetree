a_mat, a_eng = map(int, input().split())
b_mat, b_eng = map(int, input().split())

student = 'A'
if b_mat > a_mat:
    student = 'B'

if a_mat == b_mat and b_eng > a_eng:
    student = 'B'

print(student)