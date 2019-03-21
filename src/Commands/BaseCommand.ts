import { Request, Response } from 'express';

export class BaseCommand {
    req: Request;
    res: Response;
}
