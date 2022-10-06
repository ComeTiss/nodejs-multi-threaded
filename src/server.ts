import express from 'express';

import routes from './routes';

const app = express();

const PORT = 8081;
const HOST = 'localhost';

routes(app);

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})