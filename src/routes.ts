import WelcomeController from './controllers/WelcomeController';
import HeavyLoadByWorkerController from './controllers/HeavyLoadByWorkerController';
import HeavyLoadByChildProcessController from './controllers/HeavyLoadByChildProcessController';

export default (app) => {
    app.get("/welcome", WelcomeController.welcome),
    app.get("/heavy-worker", HeavyLoadByWorkerController.heavy)
    app.get("/heavy-child", HeavyLoadByChildProcessController.heavy)
}