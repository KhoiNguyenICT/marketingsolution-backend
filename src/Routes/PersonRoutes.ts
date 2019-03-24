import * as express from 'express';
import PersonController from '../Controllers/PersonController';

export default class PersonRoutes {
    private readonly _personController: PersonController;
    constructor() {
        this._personController = new PersonController();
    }
    get routes() {
        const router = express();
        const controller = this._personController;
        router.post('/list', controller.find);
        router.post('/create', controller.create);
        router.put('/:id', controller.update);
        router.get('/:id', controller.findById);
        router.delete('/:id', controller.delete);

        return router;
    }
}
