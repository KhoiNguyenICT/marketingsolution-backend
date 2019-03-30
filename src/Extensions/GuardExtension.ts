import * as jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import JsonExtension from '../Extensions/JsonExtension';
import * as httpStatus from 'http-status-codes';
import AccountClaimCommand from '../Commands/AccountClaimCommand';

module.exports = (req: any, res: Response, next: NextFunction) => {
    const authorization: string = req.headers.authorization as string;
    const token = authorization.split(' ')[1];
    const bearer = authorization.split(' ')[0];
    if (bearer.toLowerCase() !== 'bearer') { return res.send(JsonExtension.JsonMessage('Bearer Schema Not Found')).status(httpStatus.UNAUTHORIZED); }
    if (!token) { return res.send(JsonExtension.JsonMessage('Auth Failed')).status(httpStatus.UNAUTHORIZED); }
    const decoded: AccountClaimCommand = jwt.verify(token, process.env.JWT_KEY) as AccountClaimCommand;
    if (!decoded) { return res.send(JsonExtension.JsonMessage('Auth Failed')).status(httpStatus.UNAUTHORIZED); }
    req.account_data = decoded;
    next();
};
