import * as express from 'express';
import PersonRoute from './PersonRoutes';
import AccountRoutes from './AccountRoutes';
import AssetRoutes from './AssetRoutes';

export class MainRoutes {

    get Routes() {
        const app = express();
        app.use('/person', new PersonRoute().Routes);
        app.use('/account', new AccountRoutes().Routes);
        app.use('/asset', new AssetRoutes().Routes);
        return app;
    }

}
