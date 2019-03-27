import { BaseController } from './BaseController';
import AccountService from '../Services/AccountService';
import { Request, Response, NextFunction } from 'express';
import IAccountModel from '../Schemas/AccountSchema';
import AccountLoginCommand from '../Commands/AccountLoginCommand';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import JsonExtension from '../Extensions/JsonExtension';

export default class AccountController extends BaseController {

    private _accountService: AccountService;

    constructor() {
        super();
        this._accountService = new AccountService();
        this.Create = this.Create.bind(this);
        this.Login = this.Login.bind(this);
    }

    async Create(req: Request, res: Response, next: NextFunction) {
        const value: IAccountModel = req.body as IAccountModel;
        if (await this._accountService.Find({ email: value.email })) {
            return this.Ok(JsonExtension.JsonMessage('Account existed'), req, res, next);
        }
        const result = await this._accountService.CreateAsync(value);
        return this.Ok(result, req, res, next);
    }

    async Login(req: Request, res: Response, next: NextFunction) {
        const value: AccountLoginCommand = req.body as AccountLoginCommand;
        const account = await this._accountService.Find({ email: value.email });
        const status = await bcrypt.compare(value.password, account[0].password_hash);
        if (account && status) {
            const token = jwt.sign({
                account_id: account[0]._id,
                email: account[0].email,
                first_name: account[0].first_name,
                last_name: account[0].last_name,
                is_active: account[0].is_active,
                phone_number: account[0].phone_number,
                address: account[0].address,
                created_at: account[0].created_at,
                updated_at: account[0].updated_at,
            }, process.env.JWT_KEY, { expiresIn: '24h' });
            return this.Ok(JsonExtension.TokenMessage(token), req, res, next);
        }
        return this.Ok(JsonExtension.JsonMessage('Account not exist'), req, res, next);
    }

}
