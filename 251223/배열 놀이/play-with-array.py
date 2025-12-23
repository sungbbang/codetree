n, q = map(int, input().split())
arr = list(map(int, input().split()))
q_arr = [list(map(int, input().split())) for _ in range(q)]

for q in q_arr:
    if q[0] == 1:
        print(arr[q[1]-1])
    elif q[0] == 2:
        if q[1] not in arr:
            print(0)
        else:
            print(arr.index(q[1]) + 1)
    else:
        print(*arr[q[1]-1:q[2]])