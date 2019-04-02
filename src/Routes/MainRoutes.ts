import * as express from 'express';
import PersonRoute from './PersonRoutes';
import AccountRoutes from './AccountRoutes';

export class MainRoutes {

    get Routes() {
        const app = express();
        app.use('/person', new PersonRoute().Routes);
        app.use('/account', new AccountRoutes().Routes);
        return app;
    }

}
