cnt = 0
sum_ = 0
while True:
    age = int(input())
    if age < 20 or age >= 30:
        avg = sum_ / cnt
        print(f'{avg:.2f}')
        break
    
    cnt += 1
    sum_ += age
        