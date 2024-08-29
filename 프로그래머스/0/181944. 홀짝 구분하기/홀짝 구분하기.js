const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const n = Number(line);  // 입력된 문자열을 숫자로 변환

    if (n % 2 === 0) {
        console.log(`${n} is even`);  // 짝수인 경우
    } else {
        console.log(`${n} is odd`);   // 홀수인 경우
    }

    rl.close();  // 입력 인터페이스를 닫습니다.
});
