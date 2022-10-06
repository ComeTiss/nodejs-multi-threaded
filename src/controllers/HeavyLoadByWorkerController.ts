const { Worker } = require("worker_threads");

const controller = {

    heavy(req, res) {
        const worker = new Worker('./src/workers/CounterWorker.js');
        worker.on('message', (data) => {
            return res.status(200).send({
                message: 'Hello World',
                total: data,  
            });
        })

        worker.on('error', () => {
            return res.status(500).send({
                error: 'Worker stopped because of uncaught exception'
            })
        })

        worker.on('exit', (code) => {
            if (code != 0) {
                return res.status(500).send({
                    error: `Worker stopped with exit code ${code}`
                })
            }
        })    }
}

export default controller;