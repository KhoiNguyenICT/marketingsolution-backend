import { Request, Response } from 'express';

export default class ValueController {

    public get(req: Request, res: Response) {
        const values = ['value1', 'value2'];
        res.send(values);
    }

    public getById(req: Request, res: Response) {
        const { id } = req.params.id;
        res.send(id);
    }

    public post(req: Request, res: Response) {
        const body = req.body;
        res.send(body);
    }

    public put(req: Request, res: Response) {
        const { id } = req.params;
        const body = req.body;
        res.send({
            method: 'PUT',
            _id: id,
            data: body,
        });
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        res.send(id);
    }

}
