code, point, time = input().split()
time = int(time)

class Secret:
    def __init__(self, code, point, time):
        self.code = code
        self.point = point
        self.time = time

secret = Secret(code, point, time)
print(f'secret code : {secret.code}')
print(f'meeting point : {secret.point}')
print(f'time : {secret.time}')
