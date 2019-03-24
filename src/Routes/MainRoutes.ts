import * as express from 'express';
import PersonRoute from './PersonRoutes';
import CompanyRoutes from './CompanyRoutes';

export class MainRoutes {

    get routes() {
        const app = express();
        app.use('/person', new PersonRoute().routes);
        app.use('/company', new CompanyRoutes().routes);
        return app;
    }

}
