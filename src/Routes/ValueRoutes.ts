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
        router.post('/list', controller.find);
        router.post('/create', controller.create);
        router.put('/:id', controller.update);
        router.get('/:id', controller.findById);
        router.delete('/:id', controller.delete);

        return router;
    }
}
