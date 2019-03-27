import AccountController from '../Controllers/AccountController';
import * as express from 'express';

export default class AccountRoutes {

    private readonly _accountController: AccountController;

    constructor() {
        this._accountController = new AccountController();
    }

    get Routes() {
        const router = express();
        const controller = this._accountController;
        router.post('/create', controller.Create);
        router.post('/login', controller.Login);
        return router;
    }

}
