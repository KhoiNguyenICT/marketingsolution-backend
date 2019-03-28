import { Request } from 'express';
import AccountClaimCommand from '../Commands/AccountClaimCommand';

export interface HttpRequest extends Request {
    account_data: AccountClaimCommand;
}
