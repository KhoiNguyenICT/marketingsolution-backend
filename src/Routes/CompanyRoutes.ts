import * as express from 'express';
import CompanyController from '../Controllers/CompanyController';

export default class CompanyRoutes {
    private readonly _companyController: CompanyController;
    constructor() {
        this._companyController = new CompanyController();
    }
    get Routes() {
        const router = express();
        const controller = this._companyController;
        router.post('/create', controller.Create);
        return router;
    }
}
