import { Request, Response, NextFunction } from 'express';
// import * as httpStatus from 'http-status-code';

export class BaseController {

    Ok(data: any, req: Request, res: Response, next: NextFunction): any {
        res.send(data).status(200);
        next();
    }

}
