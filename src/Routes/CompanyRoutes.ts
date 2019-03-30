import * as express from 'express';
import CompanyController from '../Controllers/CompanyController';
const GuardExtension = require('../Extensions/GuardExtension');

export default class CompanyRoutes {

    private readonly _companyController: CompanyController;

    constructor() {
        this._companyController = new CompanyController();
    }

    get Routes() {
        const router = express();
        const controller = this._companyController;
        router.post('/create', GuardExtension, controller.Create);
        router.post('/list', controller.Find);
        return router;
    }

}
