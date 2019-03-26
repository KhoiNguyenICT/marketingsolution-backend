import * as express from 'express';
import PersonRoute from './PersonRoutes';
import CompanyRoutes from './CompanyRoutes';

export class MainRoutes {

    get Routes() {
        const app = express();
        app.use('/person', new PersonRoute().Routes);
        app.use('/company', new CompanyRoutes().Routes);
        return app;
    }

}
