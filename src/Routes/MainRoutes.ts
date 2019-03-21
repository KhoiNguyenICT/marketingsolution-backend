import * as express from 'express';
import ValueRoute from './ValueRoutes';

export class MainRoutes {

    get routes() {
        const app = express();
        app.use('/value', new ValueRoute().routes);
        return app;
    }

}
