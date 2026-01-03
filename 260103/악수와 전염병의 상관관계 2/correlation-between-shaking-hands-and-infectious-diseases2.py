n, k, p, t = map(int, input().split())
handshakes = [tuple(map(int, input().split())) for _ in range(t)]
handshakes.sort(key=lambda x: x[0])

devs = [0] * (n+1)
devs[p] = 1

cnt = [0] * (n+1)
for t, a, b in handshakes:
    if devs[a] == 1:
        if cnt[a] < k:
            devs[b] = 1
            cnt[a] += 1
    elif devs[b] == 1:
        if cnt[b] < k:
            devs[a] = 1
            cnt[b] += 1

for el in devs[1:]:
    print(el, end='')