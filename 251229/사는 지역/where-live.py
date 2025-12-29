class Person:
    def __init__(self, name, bunji, region):
        self.name = name
        self.bunji = bunji
        self.region = region

n = int(input())
arr = [tuple(input().split()) for _ in range(n)]
people = [Person(name, bunji, region) for name, bunji, region in arr]

target_idx = 0
for idx, val in enumerate(people):
    if val.name > people[target_idx].name:
        target_idx = idx

print(f'name {people[target_idx].name}')
print(f'addr {people[target_idx].bunji}')
print(f'city {people[target_idx].region}')