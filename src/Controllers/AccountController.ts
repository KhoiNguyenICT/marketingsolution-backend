import { BaseController } from './BaseController';
import AccountService from '../Services/AccountService';
import { Request, Response, NextFunction } from 'express';
import IAccountModel from '../Schemas/AccountSchema';

export default class AccountController extends BaseController {

    private _accountService: AccountService;

    constructor() {
        super();
        this._accountService = new AccountService();
        this.Create = this.Create.bind(this);
    }

    async Create(req: Request, res: Response, next: NextFunction) {
        const value: IAccountModel = req.body as IAccountModel;
        const result = await this._accountService.CreateAsync(value);
        return this.Ok(result, req, res, next);
    }

}
