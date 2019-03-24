import * as express from 'express';
import CompanyController from '../Controllers/CompanyController';

export default class CompanyRoutes {
    private readonly _companyController: CompanyController;
    constructor() {
        this._companyController = new CompanyController();
    }
    get routes() {
        const router = express();
        const controller = this._companyController;
        router.post('/create', controller.create);
        return router;
    }
}
