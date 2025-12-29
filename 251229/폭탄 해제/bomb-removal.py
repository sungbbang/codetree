class Bomb:
    def __init__(self, code, line_color, second):
        self.code = code
        self.line_color = line_color
        self.second = second


code, color, second = input().split()

bomb = Bomb(code, color, int(second))
print(f'code : {bomb.code}')
print(f'color : {bomb.line_color}')
print(f'second : {bomb.second}')