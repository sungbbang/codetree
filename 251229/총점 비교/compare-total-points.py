class Person:
    def __init__(self, name, sub1, sub2, sub3):
        self.name = name
        self.sub1 = sub1
        self.sub2 = sub2
        self.sub3 = sub3


n = int(input())
arr = []
for _ in range(n):
    name, sub1, sub2, sub3 = input().split()
    arr.append(Person(name, int(sub1), int(sub2), int(sub3)))

arr.sort(key=lambda x: x.sub1 + x.sub2 + x.sub3)
for el in arr:
    print(el.name, el.sub1, el.sub2, el.sub3)