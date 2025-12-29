class Agent:
    def __init__(self, code_name, score):
        self.code_name = code_name
        self.score = score

arr = []
for _ in range(5):
    code_name, score = input().split()
    score = int(score)
    arr.append(Agent(code_name, score))

min_val = arr[0]
for agent in arr:
    if agent.score <= min_val.score:
        min_val = agent


print(min_val.code_name, min_val.score)