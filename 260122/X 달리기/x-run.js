const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const x = Number(input[0]);

for (let t = 1; t <= x; t++) {
    // t초 동안 이동할 수 있는 최소/최대 거리 계산
    
    // 최소 거리: 계속 1m/s 유지
    // 1 → 1 → 1 → ... → 1 (t번)
    let minDist = t;
    
    // 최대 거리: 최대한 올렸다가 내려오기
    // t=1: 1 → 최대 1
    // t=2: 1,1 → 최대 2 (1→2는 끝이 1이 아님)
    // t=3: 1,2,1 → 최대 4
    // t=4: 1,2,2,1 → 최대 6
    // t=5: 1,2,3,2,1 → 최대 9
    
    // 최대 속도 k까지 올라갔다 내려오면: 2k-1 초 소요, 거리 k²
    // 남은 시간에 속도 유지로 거리 추가 가능
    
    let maxDist = 0;
    let maxSpeed = Math.floor((t + 1) / 2);  // t초에 가능한 최대 속도
    
    // 기본 거리 (1→2→...→maxSpeed→...→2→1)
    let baseTime = 2 * maxSpeed - 1;
    let baseDist = maxSpeed * maxSpeed;
    
    // 남은 시간에 최대 속도로 유지
    let remainTime = t - baseTime;
    maxDist = baseDist + remainTime * maxSpeed;
    
    // x가 [minDist, maxDist] 범위 안에 있으면 가능!
    if (minDist <= x && x <= maxDist) {
        console.log(t);
        break;
    }
}