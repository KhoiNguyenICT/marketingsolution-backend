import { Request, Response, NextFunction } from 'express';
import AccountClaimCommand from '../Commands/AccountClaimCommand';

export class BaseController {

    protected account_data: AccountClaimCommand;

    Ok(data: any, req: any, res: Response, next: NextFunction): any {
        this.account_data = req.account_data;
        res.send(data).status(200);
        next();
    }

}
