import * as express from 'express';
import ValueController from '../Controllers/ValueController';

export default class ValueRoutes {
    private readonly _valueController: ValueController;
    constructor() {
        this._valueController = new ValueController();
    }
    get routes() {
        const router = express();
        const controller = this._valueController;
        router.get('/list', controller.get);
        router.post('/post', controller.post);
        router.put('/:id', controller.put);
        router.get('/:id', controller.getById);
        router.delete('/:id', controller.delete);

        return router;
    }
}
