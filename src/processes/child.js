
process.on('message', (message) => {
    console.log("input message: " + message)
    
    let result = count();
    process.send(result);

    setTimeout(process.exit, 1000)
});


function count() {
    let total = 0;
    for (let i=0; i < 10000000000; i++) {
        total++;
    }
    return total;
}