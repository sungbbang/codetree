# n = int(input())
# arr = [[1] * (i+1) for i in range(n)]

# for i in range(2, n):
#     for j in range(1, i):
#         arr[i][j] = arr[i-1][j-1] + arr[i-1][j]

# for row in arr:
#     print(*row)

arr = [
    [0 for _ in range(15)]
    for _ in range(15)
]
	
# n을 입력받습니다.
n = int(input())
	
# 배열의 각 행의 첫 열과 마지막 열을 1로 초기화합니다.
for i in range(n):
	arr[i][0] = 1
	arr[i][i] = 1
	
# 배열의 숫자를 채웁니다.
for i in range(n):
	for j in range(1, i):
        print(arr[i-1][j])
		# arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]

# 채워진 배열을 출력합니다.
# for i in range(n):
# 	for j in range(i + 1):
# 		print(arr[i][j], end=" ")
# 	print()