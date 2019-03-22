import { StartupHelper } from './Helpers/StartupHelper';
import * as express from 'express';

class Startup {

    public express: express.Application;

    constructor() {
        this.express = express();
        StartupHelper.ConfigEnvironment();
        StartupHelper.ConfigMiddleWares(this.express);
        StartupHelper.ConfigRouters(this.express);
        StartupHelper.ConfigDatabase();
    }
}

export default new Startup().express;
