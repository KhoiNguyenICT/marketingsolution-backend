import { Request, Response, NextFunction } from 'express';

export class BaseController {

    Ok(data: any, req: Request, res: Response, next: NextFunction): any {
        res.send(data).status(200);
        next();
    }

}
