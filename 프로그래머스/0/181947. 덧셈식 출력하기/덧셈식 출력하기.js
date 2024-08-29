const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [a, b] = input.split(' ').map(Number);
    const c = a + b;
    console.log(`${a} + ${b} = ${c}`);
    rl.close();
});
