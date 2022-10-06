const controller = {

    welcome(req, res) {
        return res.status(200).send({
                message: "Hello World" 
            });
    }
}

export default controller;