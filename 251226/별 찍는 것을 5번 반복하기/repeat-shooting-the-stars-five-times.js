function print10Stars() {
    for (let i = 0; i < 10; i++) {
        process.stdout.write('*');
    }
}

for (let i = 0; i < 5; i++) {
    print10Stars();
    console.log();
}
