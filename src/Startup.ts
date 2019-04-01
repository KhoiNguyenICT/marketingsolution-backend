import { StartupHelper } from './Helpers/StartupHelper';
import * as express from 'express';
import { InitializeData } from './Initializes/Data/InitializeData';

class Startup {

    public application: express.Application;
    private initialize: InitializeData;

    constructor() {
        this.application = express();
        this.initialize = new InitializeData();
        StartupHelper.ConfigEnvironment();
        StartupHelper.ConfigMiddleWares(this.application);
        StartupHelper.ConfigRouters(this.application);
        StartupHelper.ConfigDatabase();
        StartupHelper.ConfigMultipleLanguage(this.application);
        this.initialize.Init();
    }
}

export default new Startup().application;
