const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("!@#$%^&*(\\'\"<>?:;"); // 특수 문자 출력

rl.on('close', function () {
    // 프로그램이 종료될 때 실행될 코드를 작성할 수 있습니다.
});

// 입력을 기다리지 않고 바로 종료하고 싶다면 다음 코드를 추가합니다.
rl.close();
