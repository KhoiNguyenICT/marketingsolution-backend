import { StartupHelper } from './Helpers/StartupHelper';
import * as express from 'express';
import { InitializeData } from './Initializes/Data/InitializeData';

class Startup {

    public express: express.Application;
    private initialize: InitializeData;

    constructor() {
        this.express = express();
        this.initialize = new InitializeData();
        StartupHelper.ConfigEnvironment();
        StartupHelper.ConfigMiddleWares(this.express);
        StartupHelper.ConfigRouters(this.express);
        StartupHelper.ConfigDatabase();
        this.initialize.Init();
    }
}

export default new Startup().express;
