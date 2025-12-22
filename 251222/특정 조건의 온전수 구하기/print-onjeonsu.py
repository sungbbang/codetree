for i in range(1, int(input())+1):
    if i % 2 == 0: continue
    if i % 10 == 5 or i % 100 == 5: continue
    if i % 3 == 0 and i % 9 != 0: continue

    print(i, end=' ')