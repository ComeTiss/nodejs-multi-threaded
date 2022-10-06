const { fork } = require('child_process');

const controller = {

    heavy(req, res) {
        const child = fork('./src/processes/child.js');
        
        child.send("Start child process");
        
        child.on('message', (message) => {
            return res.status(200).send({
                message: 'Hello World',
                total: message,  
            });
        });

        
        child.on('error', () => {
            return res.status(500).send({
                error: 'Child process stopped because of uncaught exception'
            })
        })

        child.on('exit', (code) => {
            if (code != 0) {
                return res.status(500).send({
                    error: `Child process stopped with exit code ${code}`
                })
            }
        })
    }
}

export default controller;